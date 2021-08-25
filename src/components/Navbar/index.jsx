import styles from "./Navbar.module.css";
import searchIcon from "../../assets/search-icon.svg";
import emojiIcon from "../../assets/emoji-icon.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img
        style={{ marginRight: 8 }}
        src={emojiIcon}
        className={styles.navIcon}
        alt="emoji icon"
      />
      <img
        styles={{ marginRight: 3 }}
        src={searchIcon}
        className={styles.navIcon}
        alt="search icon"
      />
      <span className={styles.navTitle}>er</span>
    </nav>
  );
};

export default Navbar;
