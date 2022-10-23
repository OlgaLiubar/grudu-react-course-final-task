import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "./TextInput";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { Formik, Form } from "formik";
import Logo from "./Logo";
import ServerError from "./ServerError";

export const AuthForm = (props) => {
  return (
    <>
      <Logo marginTop />
      <Formik
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}
        onSubmit={(values) => {
          if (props.register) {
            return props.handleSubmit(values);
          }
          props.handleSubmit(values.username);
        }}
      >
        {({ isValid }) => (
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
              {props.title}
            </Typography>

            {props.register ? (
              <>
                <TextInput name="email" type="email" placeholder="Email" />
                <TextInput
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <TextInput name="username" type="text" placeholder="Username" />
                <TextInput
                  name="fullName"
                  type="text"
                  placeholder="Full name"
                />
              </>
            ) : (
              <>
                <TextInput name="username" type="text" placeholder="Username" />
                <TextInput
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </>
            )}
            {props.serverErr.isError && (
              <ServerError errorMsg={props.serverErr.errorMsg} />
            )}
            <Button
              type="submit"
              size="lg"
              disabled={!isValid}
              sx={{
                width: "100%",
                px: 2,
                my: 2,
              }}
            >
              {props.btnText}
            </Button>
            <Typography>
              {props.authQuestion}
              <Link
                component={RouterLink}
                to={props.linkPath}
                underline="hover"
                sx={{ marginLeft: 1 }}
                onClick={props.resetServerError}
              >
                {props.linkText}
              </Link>
            </Typography>
          </Form>
        )}
      </Formik>
    </>
  );
};

AuthForm.propTypes = {
  register: PropTypes.bool,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  handleSubmit: PropTypes.func,
  title: PropTypes.string,
  btnText: PropTypes.string,
  authQuestion: PropTypes.string,
  linkPath: PropTypes.string,
  linkText: PropTypes.string,
  serverErr: PropTypes.object,
  resetServerError: PropTypes.func,
};
