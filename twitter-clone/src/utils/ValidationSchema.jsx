import * as Yup from "yup";

// export const validationSchema=Yup.object({
//     firstName: Yup.string()
//       .max(15, "Must be 15 characters or less")
//       .required("Required"),
//     lastName: Yup.string()
//       .max(20, "Must be 20 characters or less")
//       .required("Required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Required"),
//     acceptedTerms: Yup.boolean()
//       .required("Required")
//       .oneOf([true], "You must accept the terms and conditions."),
//     jobType: Yup.string()
//       .oneOf(
//         ["designer", "development", "product", "other"],
//         "Invalid Job Type"
//       )
//       .required("Required"),
//   })

export const registerValidationSchema=Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or more")
      .max(256, "Password must be 256 characters or less")
      .required("Password is required"),
    username: Yup.string()
      .max(15, "Username must be 15 characters or less")
      .required("Username is required"),
    fullName: Yup.string()
      .max(20, "Name must be 512 characters or less")
      .required("Name is required"),
  })

  export const loginValidationSchema=Yup.object({
    username: Yup.string()
    .max(15, "Username must be 15 characters or less")
    .required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or more")
      .max(256, "Password must be 256 characters or less")
      .required("Password is required"),
  })

  export const tweetValidationSchema=Yup.object({
    text: Yup.string()
    .max(140, "Too long. Your post shoud be less than 140 characters")
    .required("Type something to submit"),
  })