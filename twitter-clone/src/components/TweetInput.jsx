import React from "react";
import { Formik, Form } from "formik";
import { tweetValidationSchema } from "../utils/ValidationSchema";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { TextInput } from "./TextInput";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

// import Textarea from '@mui/joy/Textarea';

export default function TweetInput({ onSaveTweet }) {
  const { userId, fullName, initials } = React.useContext(CurrentUserContext);

  return (
    <>
      <Formik
        initialValues={{
          text: "",
        }}
        validationSchema={tweetValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          onSaveTweet(values, userId, fullName, initials);
          // onSaveTweet(values, authorId, initials);
        }}
      >
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
        <Form style={{ width: "100%" }}>
          <TextInput
            name="text"
            type="text"
            fullWidth
            placeholder="What’s happening?"
            sx={{ mb: 1, minHeight: "80px" }}
            textarea
          />
          <Button
            type="submit"
            sx={{ float: "right", bgcolor: "#c6c4ca", color: "black" }}
          >
            Tweet
          </Button>
        </Form>
        </Box>
      </Formik>
    </>
  );
}
