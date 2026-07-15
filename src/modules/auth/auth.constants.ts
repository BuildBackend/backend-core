export const AUTH_MESSAGES = {
    USER_ALREADY_EXISTS: "Email already registered",
    USER_CREATED: "User registered successfully",
    INVALID_CREDENTIALS: "Invalid email or password",
};

export const AUTH_VALIDATION_MESSAGES = {
    FIRST_NAME_REQUIRED: "First name must contain at least 2 characters.",
    FIRST_NAME_MAX: "First name cannot exceed 50 characters.",

    LAST_NAME_MAX: "Last name cannot exceed 50 characters.",

    INVALID_EMAIL: "Please enter a valid email address.",

    PASSWORD_MIN: "Password must be at least 8 characters long.",
    PASSWORD_MAX: "Password cannot exceed 100 characters.",
    PASSWORD_UPPERCASE: "Password must contain at least one uppercase letter.",
    PASSWORD_LOWERCASE: "Password must contain at least one lowercase letter.",
    PASSWORD_NUMBER: "Password must contain at least one number.",
    PASSWORD_SPECIAL: "Password must contain at least one special character.",
} as const;