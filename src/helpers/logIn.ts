export const emailValidationPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
const validateEmail = (value: string) => {
  if (value.length < 1) return "обязательно поле";
  if (!value.toLowerCase().match(emailValidationPattern))
    return "невалидный email";
  return null;
};

const validatePassword = (value: string) => {
  if (value.length < 1) return "обязательно поле";
  if (value.length < 6) return "пароль должен содержать не меньше 6 символов";
  if (value.length > 40) return "пароль должен содержать не боее 40 символов";
  return null;
};

interface ValidationData {
  password: string;
  email: string;
}

export type ValidationResult = ValidationData | null;
export const validate = (email: string, password: string): ValidationResult => {
  const emailValidationResult = validateEmail(email);
  const passwordValidationResult = validatePassword(password);

  if (!emailValidationResult || !passwordValidationResult) return null;
  return {
    email: emailValidationResult,
    password: passwordValidationResult,
  };
};
