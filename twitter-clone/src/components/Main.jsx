import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import TweetInput from "./TweetInput";
import Tweets from "./Tweets";
import Box from "@mui/joy/Sheet";
import WelcomeCard from "./WelcomeCard";

export default function Main({ tweets, onSaveTweet, loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Box sx={{ maxWidth: "45vw", minWidth: "320px", margin: "auto", pt: 5 }}>
        {loggedIn ? <TweetInput onSaveTweet={onSaveTweet} /> : <WelcomeCard />}
        <Tweets tweets={tweets} />
      </Box>
    </>
  );
}

Main.propTypes = {
  loggedIn: PropTypes.bool,
  tweets: PropTypes.array,
  onSaveTweet: PropTypes.func,
};
