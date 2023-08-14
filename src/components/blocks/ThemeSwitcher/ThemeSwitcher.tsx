import styles from "./ThemeSwitcher.module.scss";
import { ChangeEvent } from "react";

interface Props {
  className: string;
  isChecked: boolean;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

const ThemeSwitcher = ({ isChecked, onChange, className }: Props) => {
  return (
    <label className={className}>
      <input
        type="checkbox"
        className={styles.input}
        checked={isChecked}
        onChange={(event) => onChange(event)}
      />
      <div className={styles.checkbox} />
    </label>
  );
};

export default ThemeSwitcher;
