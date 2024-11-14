import React, { useState } from "react";
import styles from "./Footer.module.css";
{
  /*
const Footer = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
*/
}

export default function Footer() {
  return (
    <>
      {" "}
      {/*
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FF6B6B"
          fill-opacity="1"
          d="M0,128L34.3,117.3C68.6,107,137,85,206,101.3C274.3,117,343,171,411,165.3C480,160,549,96,617,69.3C685.7,43,754,53,823,64C891.4,75,960,85,1029,96C1097.1,107,1166,117,1234,117.3C1302.9,117,1371,107,1406,101.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
*/}
      <footer className={styles.footer}>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank">
            <img src="/icons/facebook-icon.png" alt="Facebook" />
            <span>Facebook</span>
          </a>
          <a href="https://x.com" target="_blank">
            <img src="/icons/x-icon.png" alt="X" />
            <span>X</span>
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src="/icons/instagram-icon.png" alt="Instagram" />
            <span>Instagram</span>
          </a>
          <a href="https://youtube.com" target="_blank">
            <img src="/icons/youtube-icon.png" alt="YouTube" />
            <span>YouTube</span>
          </a>
          <a href="https://snapchat.com" target="_blank">
            <img src="/icons/snapchat-icon.png" alt="Snapchat" />
            <span>Snapchat</span>
          </a>
          <a href="https://linkedin.com" target="_blank">
            <img src="/icons/linkedin-icon.png" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className={styles.contactForm}>
          <h3>Contactez-nous</h3>
          <form>
            <input type="text" placeholder="Votre nom" required />
            <input type="email" placeholder="Votre email" required />
            <textarea placeholder="Votre message" required></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </footer>
    </>
  );
}

{
  /*
export default Footer;
*/
}
