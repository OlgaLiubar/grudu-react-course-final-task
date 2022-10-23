import React from "react";
import PropTypes from 'prop-types';
import Tweet from "./Tweet";
import List from '@mui/joy/List';

export default function Tweets({ tweets }) {

  return (
    <List sx={{ gap: 2, display: "flex", flexDirection: "column", py: 4 }}>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweet={tweet}
          />
        ))}
    </List>
  );
}

Tweets.propTypes = {
  tweets: PropTypes.array,
};