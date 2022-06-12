import React from "react";
import Tweet from "../Tweet/Tweet";



export default function Tweets({tweets}) {

  console.log(tweets);

  return (
    <section className="tweets">
      <ul className="tweets__list">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id || tweet._id}
            tweet={tweet}
          />
        ))}
      </ul>
    </section>
  );
}