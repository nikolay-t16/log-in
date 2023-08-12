import styles from "./Button.module.scss";
import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ className, ...props }: Props) => (
  <button className={classNames(styles.root, className)} {...props} />
);

export default Button;
