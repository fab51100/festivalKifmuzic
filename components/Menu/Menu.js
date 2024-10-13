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
              <img src="../electric-guitar.png" />
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/programmation" onClick={closeMenu}>
              <img src="../electric-guitar.png" />
              Programmation
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
