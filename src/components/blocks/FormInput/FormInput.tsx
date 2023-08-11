import styles from "./FormInput.module.scss";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  validationMessage?: string;
}

const FormInput = ({
  validationMessage: validationMessageInit,
  className,
  type = "text",
  onChange,
  ...inputProps
}: Props) => {
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
        className={classNames(styles.inputImg, styles[`inputImg--${type}`])}
      />
      <div className={styles.underlineWrapper}>
        <div className={styles.underline} />
      </div>
      {validationMessage && (
        <div className={styles.errorMessage}>{validationMessage}</div>
      )}
    </label>
  );
};

export default FormInput;
