import styles from "./FormInput.module.scss";
import { FC, InputHTMLAttributes, useEffect, useState } from "react";
import classNames from "classnames";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  validationMessage?: string;
  icon?: "email" | "password";
}

const FormInput: FC<FormInputProps> = ({
  validationMessage: validationMessageInit,
  className,
  icon,
  onChange,
  children,
  ...inputProps
}) => {
  const [validationMessage, setValidationMessage] = useState(
    validationMessageInit
  );
  useEffect(() => {
    setValidationMessage(validationMessageInit);
  }, [validationMessageInit]);

  return (
    <label className={classNames(className, styles.root)}>
      <input
        {...inputProps}
        className={styles.input}
        onChange={(event) => {
          setValidationMessage("");
          onChange?.(event);
        }}
      />
      <div
        className={classNames(styles.inputImg, styles[`inputImg--${icon}`])}
      />
      <div className={styles.underlineWrapper}>
        <div className={styles.underline} />
      </div>
      {children}
      {validationMessage && (
        <div className={styles.errorMessage}>{validationMessage}</div>
      )}
    </label>
  );
};

export default FormInput;
