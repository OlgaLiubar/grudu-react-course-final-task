import React from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Tweets from "../Tweets/Tweets";
// import Footer from "../Footer/Footer";

export default function Main({tweets, onSaveTweet}) {
  return (
    <>
      <Header/>
      <Input
      onSaveTweet={onSaveTweet}
      />
      <Tweets
      tweets={tweets}
      />
    </>
  );
}