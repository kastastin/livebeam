import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Title must contain at least 2 characters" })
    .max(30, { message: "Title must contain at most 30 characters" }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must contain at least 6 characters" })
    .max(30, { message: "Password must contain at most 30 characters" }),
});
