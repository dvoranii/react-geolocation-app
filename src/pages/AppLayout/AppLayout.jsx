import styles from "../AppLayout/AppLayout.module.css";
import AppNav from "../../Components/AppNav/AppNav";

function AppLayout() {
  return (
    <div className={styles.app}>
      <AppNav />
      <p>App</p>
    </div>
  );
}

export default AppLayout;
