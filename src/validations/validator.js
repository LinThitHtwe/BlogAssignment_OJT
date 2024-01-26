import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters"),
});

export const registerValidationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(25, "Username must not exceed 25 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const blogFormValidationSchema = Yup.object({
  title: Yup.string()
    .required("Title required")
    .min(10, "Title shoube be at least 10 characters")
    .max(100, "Title is too loong"),
  subTitle: Yup.string()
    .required("Sub-Title required")
    .min(10, "Sub-Title shoube be at least 10 characters")
    .max(100, "Sub-Title is too loong"),
  content: Yup.string()
    .required("Content required")
    .min(40, "Content shoube be at least 40 characters")
    .max(4000, "Content is too loong"),
});

export const categoryValidationSchema = Yup.object({
  name: Yup.string()
    .required("Category required")
    .min(3, "Category shoube be at least 3 characters")
    .max(50, "Category is too loong"),
});
