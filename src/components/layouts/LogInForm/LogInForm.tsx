import FormInput from "../../blocks/FormInput/FormInput";
import Button from "../../blocks/Button/Button";
import {
  emailValidationPattern,
  ValidationResult,
} from "../../../helpers/logIn";
import { useState } from "react";
import styles from "./LogInForm.module.scss";
import Password from "../../blocks/Password/Password";

interface LogInFormParams {
  onSubmit: (email: string, password: string) => Promise<void>;
  errors: ValidationResult;
}
const LogInForm = ({ onSubmit, errors }: LogInFormParams) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1 className={styles.title}>Log in!</h1>
      <form>
        <FormInput
          className={styles.input}
          value={email}
          onChange={({ target: { value } }) => {
            setEmail(value);
          }}
          icon="email"
          name="email"
          type="email"
          placeholder="введите email"
          required
          pattern={emailValidationPattern}
          validationMessage={errors?.email}
        />
        <Password
          className={styles.input}
          value={password}
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
          icon="password"
          name="password"
          placeholder="введите пароль"
          required
          minLength={6}
          maxLength={40}
          validationMessage={errors?.password}
        />
        <Button />
      </form>
    </div>
  );
};

export default LogInForm;
