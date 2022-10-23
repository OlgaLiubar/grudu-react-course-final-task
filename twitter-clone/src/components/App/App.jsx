import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import api from "../../utils/Api";
import { auth } from "../../utils/AuthApi";
import Main from "../Main";
import { AuthForm } from "../AuthForm";
import NotFound from "../NotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import convertNameToInitial from "../../utils/convertNameToInitial";
import { registerValidationSchema } from "../../utils/ValidationSchema";
import { loginValidationSchema } from "../../utils/ValidationSchema";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({});
  const [tweets, setTweets] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [serverErr, setServerErr] = React.useState({
    isError: false,
    errorMsg: '',
  });

  React.useEffect(() => {
    api
      .getTweets()
      .then((allTweets) => {
        setTweets(allTweets);
      })
      .catch((err) => {
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
      .catch(() => {
        setServerErr({ isError: true, errorMsg: "Something went wrong" });
      });
  }

  function handleLogin(user) {
    return auth
      .signIn(user)
      .then((newUser) => {
        setCurrentUser({
          fullName: newUser.name,
          initials: convertNameToInitial(newUser.name),
          userId: newUser.id,
        });
        setLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        if (`${err}` === "404") {
          setServerErr({
            isError: true,
            errorMsg: "Invalid email or password",
          });
        } else {
          setServerErr({ isError: true, errorMsg: "Something went wrong" });
        }
      });
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
    setServerErr({ isError: false, errorMsg: "" });
  }

  return (
    <CssVarsProvider>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                tweets={tweets}
                onSaveTweet={handleSaveTweet}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <AuthForm
                register
                initialValues={{
                  email: "",
                  password: "",
                  username: "",
                  fullName: "",
                }}
                validationSchema={registerValidationSchema}
                handleSubmit={handleRegister}
                title={"Sign up"}
                btnText={"Join Meower!"}
                authQuestion={"Already have an account?"}
                linkPath={`/signin`}
                linkText={"Log in"}
                serverErr={serverErr}
                resetServerError={resetServerError}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <AuthForm
                initialValues={{
                  password: "",
                  username: "",
                }}
                validationSchema={loginValidationSchema}
                handleSubmit={handleLogin}
                title={"Log in"}
                btnText={"Log in"}
                authQuestion={"Don't have an account?"}
                linkPath={`/signup`}
                linkText={"Log in"}
                serverErr={serverErr}
                resetServerError={resetServerError}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </CssVarsProvider>
  );
}

export default App;
