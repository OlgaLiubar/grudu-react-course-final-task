import React from "react";
import Card from '@mui/joy/Card';
import Avatar from "@mui/joy/Avatar";
import Typography from '@mui/joy/Typography';
import Box from "@mui/joy/Sheet";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
// import convertNameToInitial from "../utils/convertNameToInitial";

export default function Tweet({key, tweet}) {
  // const {fullName, initials} = React.useContext(CurrentUserContext);

  return (
    <Card row variant="outlined">
      <Avatar color="warning" variant="outlined" sx={{ fontSize: "24px" }} size="lg">{tweet.initials}</Avatar>
      <Box sx={{ mx: 3 }}>
        <Typography component="h2">{tweet.author_name}</Typography>
        <Typography component="p">
        {tweet.text}
        </Typography>
      </Box>
    </Card>
  );
}