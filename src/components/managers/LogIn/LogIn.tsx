import LogInForm from "../../layouts/LogInForm/LogInForm";
import { logIn } from "../../../api/logIn";
import { validate, ValidationResult } from "../../../helpers/logIn";
import { useState, memo } from "react";

const LogIn = () => {
  const [errors, setErrors] = useState<ValidationResult>(null);
  const onLogIn = async (email: string, password: string) => {
    const validationResult = validate(email, password);
    setErrors(validationResult);
    if (!validationResult) await logIn(email, password);
  };
  return <LogInForm onSubmit={onLogIn} errors={errors} />;
};

export default memo(LogIn);
