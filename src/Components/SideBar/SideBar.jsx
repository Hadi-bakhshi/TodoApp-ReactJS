import styles from "./sidebar.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
const SideBar = () => {
  const nightModeHandler = () => {
    document.documentElement.classList.toggle("dark-mode");
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.nighty}>
        <button className={styles.nightbtn} onClick={nightModeHandler}>
          <BsFillMoonStarsFill />
        </button>
      </div>
      <ul>
        <li className={styles.sidebaritems}><a href="#">Home</a></li>
        <li className={styles.sidebaritems}><a href="#">Calender</a></li>
        <li className={styles.sidebaritems}><a href="#">Categories</a></li>
        <li className={styles.sidebaritems}><a href="#">Favorite</a></li>
      </ul>
    </div>
  );
};

export default SideBar;
