import { useField } from "formik";
import TextField from "@mui/joy/TextField";
import Textarea from "@mui/joy/Textarea";

// export const TextInput = ({ ...props }) => {
//   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//   // which we can spread on <input>. We can use field meta to show an error
//   // message if the field is invalid and it has been touched (i.e. visited)
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <TextField
//       {...field}
//       size="lg"
//       sx={{marginBottom: 1}}
//       fullWidth
//       error={meta.touched && meta.error}
//       {...props}
//       helperText={meta.error}
//       />
//     </>
//   );
// };

export const TextInput = ({ ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      {props.textarea ? (
        <Textarea
          {...field}
          error={meta.touched && meta.error}
          {...props}
          helperText={meta.error}
        />
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
