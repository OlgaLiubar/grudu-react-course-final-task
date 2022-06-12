import React from 'react';
import {   
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import './App.css';
import api from "../../utils/Api";
import { auth } from "../../utils/AuthApi";
import Main from '../Main/Main';
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";

function App() {
  const navigate = useNavigate();
  const [tweets, setTweets] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);

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

  function handleLogin(username) {
    return auth
      .signIn(username)
      .then(() => {
        // getUserData();
        setLoggedIn(true);
        navigate('/');
      })
      .catch((err) => {
        console.log("При авторизации произошла ошибка.");
      })
      .finally(() => {
        console.log('logged in');
      });
  }

  function handleSaveTweet(newTweet) {
    return api
      .saveTweet(newTweet)
      .then((savedTweet) => {
        console.log(savedTweet)
        setTweets((state) => [
          savedTweet,
          ...state,
        ]);
      })
      .catch((err) => console.log(`Добавление карточки: ${err}`))
      .finally(() => console.log("Уф, сохранили!"));
  }

  return (
    <Routes>
      <Route path="/" 
      element={
      <Main
      tweets={tweets}
      onSaveTweet={handleSaveTweet}
      />
      } />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
