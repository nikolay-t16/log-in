import FormInput from "../../blocks/FormInput/FormInput";
import Button from "../../blocks/Button/Button";
import { ValidationResult } from "../../../helpers/logIn";
interface LogInFormParams {
  onSubmit: (email: string, password: string) => Promise<void>;
  errors: ValidationResult;
}
const LogInForm = ({ onSubmit, errors }: LogInFormParams) => {
  return (
    <div>
      <h1>Log in!</h1>
      <form>
        <FormInput />
        <FormInput />
        <Button />
      </form>
    </div>
  );
};

export default LogInForm;
