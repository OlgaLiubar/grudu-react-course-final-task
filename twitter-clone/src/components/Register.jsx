import { TextInput } from "./TextInput";
import { registerValidationSchema } from "../utils/ValidationSchema";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { Formik, Form } from "formik";
import Logo from "./Logo";

export const SignupForm = ({ handleRegister }) => {
  return (
    <>
      <Logo marginTop />
      <Formik
        initialValues={{
          email: "",
          password: "",
          username: "",
          fullName: "",
        }}
        validationSchema={registerValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleRegister(values);
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
            Sign up
          </Typography>
          <TextInput name="email" type="email" placeholder="Email" />
          <TextInput name="password" type="password" placeholder="Password" />
          <TextInput name="username" type="text" placeholder="Username" />
          <TextInput name="fullName" type="text" placeholder="Full name" />
          <Button
            fullWidth
            type="submit"
            size="lg"
            sx={{
              px: 2,
              my: 2,
            }}
          >
            Join Meower!
          </Button>
          <Typography>
            Already have an account?
            <Link
              component={RouterLink}
              to={`/signin`}
              underline="hover"
              sx={{ marginLeft: 1 }}
            >
              Log in
            </Link>
          </Typography>
        </Form>
      </Formik>
    </>
  );
};
