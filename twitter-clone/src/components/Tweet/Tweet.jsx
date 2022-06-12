import React from "react";

export default function Tweet({key, tweet}) {
  return (
    <div className="tweet">
      <div className="tweet__userpick">CN</div>
      <div className="tweet__body">
        <h2 className="tweet__username">{tweet.author_id}</h2>
        <p className="tweet__text">
        {tweet.text}
        </p>
      </div>
    </div>
  );
}
