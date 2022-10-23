import { useField } from "formik";
import TextField from "@mui/joy/TextField";
import Textarea from "@mui/joy/Textarea";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";

export const TextInput = ({ ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      {props.textarea ? (
        <FormControl>
          <Textarea
            {...field}
            error={meta.touched && meta.error}
            {...props}
            helperText={meta.error}
          />
          <FormHelperText sx={{ color: "#bb2124" }}>{meta.error}</FormHelperText>
        </FormControl>
      ) : (
        <TextField
          {...field}
          size="lg"
          sx={{ marginBottom: 1 }}
          fullWidth
          error={meta.touched && meta.error}
          {...props}
          helperText={meta.error}
        />
      )}
    </>
  );
};
