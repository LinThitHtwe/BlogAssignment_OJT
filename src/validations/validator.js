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
    .required("Password is required")
    .min(3, "Password must be at least 3 characters")
    .max(25, "Password must not exceed 25 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters"),
});
