import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import Card from "@mui/joy/Card";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Sheet";
import ListItem from "@mui/joy/ListItem";

export default function Tweet({ tweet }) {
  const safeText = DOMPurify.sanitize(tweet.text);

  return (
    <ListItem sx={{ p: 0 }}>
      <Card row variant="outlined" sx={{ width: "100%" }}>
        <Avatar
          color="warning"
          variant="outlined"
          sx={{ fontSize: "24px" }}
          size="lg"
        >
          {tweet.initials}
        </Avatar>
        <Box sx={{ mx: 3 }}>
          <Typography component="h2">{tweet.author_name}</Typography>
          <Typography>
            <span dangerouslySetInnerHTML={{ __html: safeText }}></span>
          </Typography>
        </Box>
      </Card>
    </ListItem>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
};
