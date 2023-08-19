import FormInput from "../../blocks/FormInput/FormInput";
import Button from "../../blocks/Button/Button";
import { ValidationResult } from "../../../helpers/logIn";
import { useState } from "react";
import styles from "./LogInForm.module.scss";
import Password from "../../blocks/Password/Password";

interface LogInFormParams {
  onSubmit?: (email: string, password: string) => Promise<void>;
  errors?: ValidationResult;
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
          name="email"
          type="email"
          label="email"
          required
          validationMessage={errors?.email}
          autoComplete="username"
          aria-invalid={errors?.email ? "true" : "false"}
          aria-errormessage={errors?.email}
        />
        <Password
          className={styles.input}
          value={password}
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
          name="password"
          label="password"
          required
          minLength={6}
          maxLength={40}
          validationMessage={errors?.password}
          autoComplete="current-password"
          aria-invalid={errors?.password ? "true" : "false"}
          aria-errormessage={errors?.password}
        />
        <Button
          type="submit"
          className={styles["input-submit"]}
          onClick={(e) => {
            e.preventDefault();
            onSubmit?.(email, password);
          }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LogInForm;
