import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import cat from "../images/cat.png";

export default function WelcomeCard() {
  return (
    <Card row variant="outlined" sx={{ gap: 3, p: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          gap: 2,
          width: "65%",
        }}
      >
        <Typography level="h1" mt={2}>
          Welcome to Meower!
        </Typography>
        <Typography level="body1">
          An extremely pet-friendly social network.
        </Typography>
        <Typography level="body1">
          To share your (or your pet&apos;s) thoughts with the community{" "}
          <Link component={RouterLink} to={`/signup`} underline="always">
            join Meower!
          </Link>
        </Typography>
      </Box>

      <img
        style={{
          objectFit: "contain",
          maxWidth: "30%",
        }}
        src={cat}
        alt="cat"
      />
    </Card>
  );
}
