import LogIn from "../../managers/LogIn/LogIn";
import styles from "./LogInPage.module.scss";
import classNames from "classnames";
import useDarkThemeSwitcher from "../../../hooks/useDarcThemeSwitcher";

const LogInPage = () => {
  const { isDarkTheme, toggleTheme } = useDarkThemeSwitcher();
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
