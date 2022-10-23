import React from "react";
import Box from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import notFoundCat from "../images/notFoundCat.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Typography component="h2" fontSize="140px">
        4
        <span>
          <img
            style={{
              objectFit: "cover",
              height: 140,
              width: 140,
            }}
            src={notFoundCat}
            alt="Page Not Found Cat"
          />
        </span>
        4
      </Typography>
      <Typography component="p">Страница не найдена</Typography>
      <Button type="button" onClick={back} color="primary" variant="plain" sx={{ mt: 1 }}>
        Назад
      </Button>
    </Box>
  );
}
