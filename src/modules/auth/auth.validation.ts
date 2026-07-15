import { z } from "zod";
import { AUTH_VALIDATION_MESSAGES } from "./auth.constants.js";

export const registerSchema = z.object({
    firstName: z.string().trim()
        .min(2, AUTH_VALIDATION_MESSAGES.FIRST_NAME_REQUIRED)
        .max(50, AUTH_VALIDATION_MESSAGES.FIRST_NAME_MAX),

    lastName: z.string().trim()
        .max(50, AUTH_VALIDATION_MESSAGES.LAST_NAME_MAX).optional(),

    email: z.email(AUTH_VALIDATION_MESSAGES.INVALID_EMAIL),

    password: z
        .string()
        .min(8, AUTH_VALIDATION_MESSAGES.PASSWORD_MIN)
        .max(100, AUTH_VALIDATION_MESSAGES.PASSWORD_MAX)
        .regex(/[A-Z]/, AUTH_VALIDATION_MESSAGES.PASSWORD_UPPERCASE)
        .regex(/[a-z]/, AUTH_VALIDATION_MESSAGES.PASSWORD_LOWERCASE)
        .regex(/[0-9]/, AUTH_VALIDATION_MESSAGES.PASSWORD_NUMBER)
        .regex(
            /[^A-Za-z0-9]/,
            AUTH_VALIDATION_MESSAGES.PASSWORD_SPECIAL
        ),
});