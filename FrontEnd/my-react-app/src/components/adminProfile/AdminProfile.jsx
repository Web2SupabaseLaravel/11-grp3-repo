import Header from "../header/Header";
import styles from "./AdminProfile.module.css";
import EditProfilePictureIcon from "../../assets/editProfile.svg?react";
export default function AdminProfile() {
  return (
    <>
      <Header />
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <img
              src="src\assets\profile.jpg"
              alt="profile"
              className={styles.profileImg}
            ></img>
            <EditProfilePictureIcon className={styles.editProfilePicture} />
          </div>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>Mr. Hassan Magdy</span>
            <span className={styles.profileRole}>Admin</span>
          </div>
          <div className={styles.profileExtraInfo}>
            <span>h@procerew.pro</span>
            <span>369 258 147</span>
          </div>
        </div>
      </div>
    </>
  );
}
