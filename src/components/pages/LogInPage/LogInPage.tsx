import LogIn from "../../managers/LogIn/LogIn";
import styles from "./LogInPage.module.scss";
import classNames from "classnames";
import useDarkThemeSwitcher from "../../../hooks/useDarcThemeSwitcher";
import ThemeSwitcher from "../../blocks/ThemeSwitcher/ThemeSwitcher";

const LogInPage = () => {
  const { isDarkTheme, toggleTheme } = useDarkThemeSwitcher();
  return (
    <div
      className={classNames(styles.root, { [styles.darkTheme]: isDarkTheme })}
    >
      <ThemeSwitcher
        className={styles.themeBtn}
        isChecked={isDarkTheme}
        onChange={toggleTheme}
      />
      <main className={styles.content}>
        <LogIn />
      </main>
    </div>
  );
};
export default LogInPage;
