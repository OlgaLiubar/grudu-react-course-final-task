import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import ProfileGroup from "./ProfileGroup";
import Box from "@mui/joy/Sheet";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

export default function Header({ loggedIn }) {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#d08c4c",
        minHeight: 90,
      }}
    >
      <Logo />
      {loggedIn ? (
        <ProfileGroup />
      ) : (
        <Link
          component={RouterLink}
          to={`/signin`}
          underline="hover"
          sx={{ color: "white" }}
        >
          <Typography
            fontSize="lg"
            fontWeight="lg"
            sx={{ mr: "6vw", textDecoration: "underline" }}
          >
            Sign in
          </Typography>
        </Link>
      )}
    </Box>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
};
