import React from "react";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";

export default function Preloader() {
  return (
    <Box
      sx={{
        display: "flex",
        my: 2,
        alignItems: "center",
        justifyContent: "center",
        minHeight: 50,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
