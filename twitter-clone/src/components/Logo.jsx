import React from "react";
import PropTypes from "prop-types";
import headerLogo from "../images/headerLogo.png";
import Box from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";

export default function Logo({ marginTop }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        marginLeft: "6vw",
        gap: 1.5,
        bgcolor: "transparent",
        mt: marginTop ? 3 : 0,
      }}
    >
      <Link component={RouterLink} to={`/`} underline="none">
        <img
          style={{
            objectFit: "cover",
            height: 40,
            width: 40,
          }}
          src={headerLogo}
          alt="Meower Logo"
        />
        <Typography
          sx={{
            fontSize: 24,
            height: 38,
            fontWeight: 600,
            pl: 1,
          }}
        >
          Meower
        </Typography>
      </Link>
    </Box>
  );
}

Logo.propTypes = {
  marginTop: PropTypes.bool,
};
