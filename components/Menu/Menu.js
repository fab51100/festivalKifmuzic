import Link from "next/link";
import styles from "./Menu.module.css";
import Image from "next/image";

const Menu = ({ closeMenu }) => {
  return (
    <div className={styles.menuOverlay}>
      <div className={styles.menuContent}>
        <button className={styles.closeButton} onClick={closeMenu}>
          X
        </button>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>
              <img className={styles.iconMenu} src="/icons/house.png" />
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/programmation" onClick={closeMenu}>
              <img className={styles.iconMenu} src="/icons/music-notes.png" />
              Programmation
            </Link>
          </li>
          <li>
            <Link href="/partners" onClick={closeMenu}>
              <img className={styles.iconMenu} src="/icons/deal.png" />
              Partenaires
            </Link>
          </li>
          <li>
            <Link href="/faq" onClick={closeMenu}>
              <img className={styles.iconMenu} src="/icons/signpost.png" />
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
