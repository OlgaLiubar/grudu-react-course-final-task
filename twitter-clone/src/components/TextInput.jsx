import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import TextField from "@mui/joy/TextField";
import Textarea from "@mui/joy/Textarea";
import FormControl from "@mui/joy/FormControl";
import Typography from "@mui/joy/Typography";

export const TextInput = ({ ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);

  return (
    <>
      {props.istextarea ? (
        <FormControl>
          <Textarea
            {...field}
            error={!!meta.touched && !!meta.error}
            {...props}
          />
          <Typography level="body2" sx={{ color: "#bb2124" }}>
            {meta.error}
          </Typography>
        </FormControl>
      ) : (
        <TextField
          {...field}
          size="lg"
          sx={{ marginBottom: 1, width: "100%" }}
          error={!!meta.touched && !!meta.error}
          {...props}
          helperText={meta.error}
        />
      )}
    </>
  );
};

TextInput.propTypes = {
  istextarea: PropTypes.number,
};
