import LogIn from "../../managers/LogIn/LogIn";
import styles from "./LogIn.module.scss";

const LogInPage = () => {
  return (
    <div className={styles.root}>
      <main className={styles.content}>
        <LogIn />
      </main>
    </div>
  );
};
export default LogInPage;
