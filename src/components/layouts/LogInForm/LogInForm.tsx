import FormInput from "../../blocks/FormInput/FormInput";
import Button from "../../blocks/Button/Button";
import {
  emailValidationPattern,
  ValidationResult,
} from "../../../helpers/logIn";
import { useState } from "react";
interface LogInFormParams {
  onSubmit: (email: string, password: string) => Promise<void>;
  errors: ValidationResult;
}
const LogInForm = ({ onSubmit, errors }: LogInFormParams) => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Log in!</h1>
      <form>
        <FormInput
          value={email}
          onChange={({ target: { value } }) => {
            setEmail(value);
          }}
          name="email"
          type="email"
          placeholder="введите email"
          required
          pattern={emailValidationPattern}
          validationMessage={errors?.email}
        />
        <FormInput validationMessage={errors?.password} />
        <Button />
      </form>
    </div>
  );
};

export default LogInForm;
