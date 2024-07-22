import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import {useAuth} from "../context/FakeAuthContext";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const {user} = useAuth();

  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      {user && <User />}
    </div>
  );
}

export default AppLayout;
