const emailValidationPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
const validateEmail = (value: string) => {
  if (value.length < 1) return "обязательно поле";
  if (!value.toLowerCase().match(emailValidationPattern))
    return "невалидный email";
  return "";
};

const validatePassword = (value: string) => {
  if (value.length < 1) return "обязательно поле";
  if (value.length < 6) return "пароль должен содержать не меньше 6 символов";
  if (value.length > 40) return "пароль должен содержать не боее 40 символов";
  return "";
};

interface ValidationData {
  password: string;
  email: string;
}

export type ValidationResult = ValidationData | null;
export const validate = (email: string, password: string): ValidationResult => {
  const emailValidationError = validateEmail(email);
  const passwordValidationError = validatePassword(password);

  if (!emailValidationError && !passwordValidationError) return null;
  return {
    email: emailValidationError,
    password: passwordValidationError,
  };
};
