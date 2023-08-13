import styles from "./FormInput.module.scss";
import { FC, InputHTMLAttributes, useEffect, useState } from "react";
import classNames from "classnames";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  validationMessage?: string;
  label?: string;
}

const FormInput: FC<FormInputProps> = ({
  validationMessage: validationMessageInit,
  label,
  className,
  onChange,
  children,
  value,
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
        value={value}
        className={styles.input}
        onChange={(event) => {
          setValidationMessage("");
          onChange?.(event);
        }}
      />
      <div
        className={classNames(styles.label, {
          [styles["label--notEmpty"]]: !!value,
        })}
      >
        {label}
      </div>
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
