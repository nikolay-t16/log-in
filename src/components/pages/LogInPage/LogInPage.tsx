import LogIn from "../../managers/LogIn/LogIn";
import styles from "./LogInPage.module.scss";
import { useState } from "react";
import classNames from "classnames";

const LogInPage = () => {
  const themeParamName = "isDarkTheme";
  const [isDarkTheme, setIsDarkTheme] = useState(
    !!localStorage.getItem(themeParamName)
  );

  const toggleTheme = () => {
    setIsDarkTheme((v) => {
      const newValue = !v;
      localStorage.setItem(themeParamName, newValue ? "1" : "");
      return newValue;
    });
  };
  return (
    <div
      className={classNames(styles.root, { [styles.darkTheme]: isDarkTheme })}
    >
      <button
        className={styles.themeBtn}
        title={`${isDarkTheme ? "Light" : "Dark"} theme`}
        onClick={toggleTheme}
      />
      <main className={styles.content}>
        <LogIn />
      </main>
    </div>
  );
};
export default LogInPage;
