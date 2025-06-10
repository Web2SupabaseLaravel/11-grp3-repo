import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg?react";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
        <h2>Admin Management</h2>
      </div>
      <img
        src="src\assets\profile.jpg"
        alt="profile"
        className={styles.profileImg}
      ></img>
    </div>
  );
};

export default Header;
