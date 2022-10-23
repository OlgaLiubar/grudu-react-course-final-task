import React from "react";
import PropTypes from "prop-types";
import WarningIcon from "@mui/icons-material/Warning";
import Alert from "@mui/joy/Alert";
import Typography from "@mui/joy/Typography";

export default function ServerError({ errorMsg }) {
  return (
    <Alert
      startDecorator={<WarningIcon sx={{ mx: 0.5 }} />}
      variant="plain"
      color="danger"
      sx={{ mx: "auto" }}
    >
      <Typography color="danger" fontWeight="md">
        {errorMsg}
      </Typography>
    </Alert>
  );
}

ServerError.propTypes = {
  errorMsg: PropTypes.string,
};
