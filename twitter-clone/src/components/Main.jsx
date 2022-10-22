import React from "react";
import Header from "./Header";
import TweetInput from "./TweetInput";
import Tweets from "./Tweets";
import Box from "@mui/joy/Sheet";
import WelcomeCard from "./WelcomeCard";

export default function Main({ tweets, onSaveTweet, loggedIn }) {

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <Box sx={{ width: "55%", margin: "auto", pt: 5 }}>
        {loggedIn ? <TweetInput onSaveTweet={onSaveTweet} /> : <WelcomeCard />}
        <Tweets tweets={tweets} />
      </Box>
    </>
  );
}
