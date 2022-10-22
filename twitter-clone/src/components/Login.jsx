import { TextInput } from "./TextInput";
import { loginValidationSchema } from "../utils/ValidationSchema";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { Formik, Form } from "formik";
import Logo from "./Logo";

export const Login = ({ handleLogin }) => {
  return (
    <>
      <Logo marginTop />
      <Formik
        initialValues={{
          password: "",
          username: "",
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleLogin(values.name);
        }}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
            flexWrap: "wrap",
            width: 396,
            margin: "15vh auto",
            padding: 30,
            border: "1px solid black",
            borderRadius: 20,
          }}
        >
          <Typography level="h3" component="h1" sx={{ marginBottom: 3 }}>
            Log in
          </Typography>
          <TextInput name="username" type="text" placeholder="Username" />
          <TextInput name="password" type="password" placeholder="Password" />
          <Button
            fullWidth
            type="submit"
            size="lg"
            sx={{
              px: 2,
              my: 2,
            }}
          >
            Log in
          </Button>
          <Typography>
            Don't have an account?
            <Link
              component={RouterLink}
              to={`/signup`}
              underline="hover"
              sx={{ marginLeft: 1 }}
            >
              Sign up
            </Link>
          </Typography>
        </Form>
      </Formik>
    </>
  );
};
