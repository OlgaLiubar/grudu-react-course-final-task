import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import api from "../../utils/Api";
import { auth } from "../../utils/AuthApi";
import Main from "../Main";
import { Login } from "../Login";
import { SignupForm } from "../Register";
import NotFound from "../NotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import convertNameToInitial from "../../utils/convertNameToInitial";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({});
  const [tweets, setTweets] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [serverErr, setServerErr] = React.useState({ isError: false, errorMsg: '' });

  React.useEffect(() => {
    api
      .getTweets()
      .then((allTweets) => {
        setTweets(allTweets);
      })
      .catch((err) => {
        // setFetchErrMsg(FETCH_MOVIES_ERR);
        console.log(`${err}`);
      });
  }, []);

  function handleRegister({ email, username, fullName }) {
    return auth
      .register(email, username, fullName)
      .then(() => {
        console.log(username, fullName);

        handleLogin(username);

        console.log("Registered successfully");
      })
      .catch((err) => {
        setServerErr({isError: true, errorMsg:'Something went wrong'});
        console.log("500", err);
      });
  }

  function handleLogin(user) {
    return auth
      .signIn(user)
      .then((newUser) => {
        console.log("user", newUser);
        setCurrentUser({
          fullName: newUser.name,
          initials: convertNameToInitial(newUser.name),
          userId: newUser.id,
        });
        setLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        if (`${err}` === '404') {
          setServerErr({isError: true, errorMsg: 'Invalid email or password'});
        } else {
          setServerErr({isError: true, errorMsg:'Something went wrong'});
          console.log("500", err);
        }
      })
      // .finally(() => {
      //   console.log("logged in");
      // });
  }

  function handleSaveTweet(newTweet, authorId, authorName, initials) {
    return api
      .saveTweet(newTweet, authorId, authorName, initials)
      .then((savedTweet) => {
        console.log(savedTweet);
        setTweets((state) => [savedTweet, ...state]);
      })
      .catch((err) => console.log(`Добавление карточки: ${err}`))
      .finally(() => console.log("Уф, сохранили!"));
  }

  function resetServerError() {
    setServerErr({isError: false, errorMsg: ''});
  }

  return (
    <CssVarsProvider>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={<Main tweets={ tweets } onSaveTweet={ handleSaveTweet } loggedIn={ loggedIn }/>}
          />
          <Route
            path="/signup"
            element={<SignupForm handleRegister={ handleRegister } serverErr={ serverErr } resetServerError={resetServerError}/>}
          />
          <Route path="/signin" element={<Login handleLogin={ handleLogin } serverErr={ serverErr } resetServerError={resetServerError}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </CssVarsProvider>
  );
}

export default App;
