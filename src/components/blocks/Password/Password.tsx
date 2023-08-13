import styles from "./Password.module.scss";
import FormInput, { FormInputProps } from "../FormInput/FormInput";
import { useState } from "react";

type Props = Exclude<FormInputProps, "icon" | "type">;

const Password = (props: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const type = isChecked ? "text" : "password";
  return (
    <FormInput type={type} {...props}>
      <label className={styles.container}>
        <input
          type="checkbox"
          className={styles.input}
          checked={isChecked}
          onChange={() => setIsChecked((v) => !v)}
        />
        <div className={styles.checkbox} />
      </label>
    </FormInput>
  );
};

export default Password;
