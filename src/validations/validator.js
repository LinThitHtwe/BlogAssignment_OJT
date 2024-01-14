import * as Yup from "yup";

export const loginRegistervalidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(2, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters"),
});
