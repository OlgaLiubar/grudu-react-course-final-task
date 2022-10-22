import React from "react";
import Tweet from "./Tweet";
import Box from "@mui/joy/Sheet";

export default function Tweets({tweets}) {

  console.log(tweets);

  return (
    <Box component="section" sx={{ gap: 2, display: "flex", flexDirection: "column", py: 4 }}>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweet={tweet}
          />
        ))}
    </Box>
  );
}