import React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function ProfileGroup() {
  const { fullName, initials } = React.useContext(CurrentUserContext);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "6vw",
        gap: 1.5,
        bgcolor: "transparent",
      }}
    >
      <Typography fontSize="24px" className="header__profile-name">
        {fullName}
      </Typography>
      <Avatar sx={{ bgcolor: "#c6c4ca", fontSize: "24px" }} size="lg">
        {initials}
      </Avatar>
    </Box>
  );
}
