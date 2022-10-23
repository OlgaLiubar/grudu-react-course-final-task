import React from "react";
import DOMPurify from "dompurify";
import Card from '@mui/joy/Card';
import Avatar from "@mui/joy/Avatar";
import Typography from '@mui/joy/Typography';
import Box from "@mui/joy/Sheet";

export default function Tweet({key, tweet}) {
  const safeText = DOMPurify.sanitize(tweet.text);

  return (
    <Card row variant="outlined">
      <Avatar color="warning" variant="outlined" sx={{ fontSize: "24px" }} size="lg">{tweet.initials}</Avatar>
      <Box sx={{ mx: 3 }}>
        <Typography component="h2">{tweet.author_name}</Typography>
        <Typography component="p">
        <div dangerouslySetInnerHTML={{ __html: safeText }} />
        </Typography>
      </Box>
    </Card>
  );
}