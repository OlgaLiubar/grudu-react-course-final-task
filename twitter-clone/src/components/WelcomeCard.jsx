import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import cat from "../images/cat.png";

export default function WelcomeCard() {
  return (
    <Card row variant="outlined" sx={{ gap: 1, py: 3 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography level="h1" mt={2}>
          Welcome to Meower!
        </Typography>
        <Typography level="body1">
          An extremely pet-friendly social network.
        </Typography>
        <Typography level="body1">
          To share your (or your pet's) thoughts with the community{" "}
          <Link component={RouterLink} to={`/signup`} underline="always">
            join Meower!
          </Link>
        </Typography>
      </Box>

      <img
        style={{
          objectFit: "contain",
          // height: 40,
          width: "30%",
        }}
        src={cat}
        alt="cat"
      />
    </Card>
  );
}
