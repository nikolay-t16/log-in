import styles from "./Password.module.scss";
import FormInput, { FormInputProps } from "../FormInput/FormInput";
import { useState } from "react";
import classNames from "classnames";

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
        <div
          className={classNames(styles.checkbox, {
            [styles["checkbox--visible"]]: isChecked,
            [styles["checkbox--hidden"]]: !isChecked,
          })}
        />
      </label>
    </FormInput>
  );
};

export default Password;
