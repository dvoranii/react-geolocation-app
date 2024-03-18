import styles from "../AppLayout/AppLayout.module.css";
import AppNav from "../../Components/AppNav/AppNav";
import Sidebar from "../../Components/Sidebar/Sidebar";

function AppLayout() {
  return (
    <div className={styles.app}>
      <AppNav />
      <Sidebar />
    </div>
  );
}

export default AppLayout;
