import styles from "./VideoHeader.module.css";
import Image from "next/image";

export default function VideoHeader() {
  return (
    <>
      <div className={styles.videocontainer}>
        <div className={styles.body}>
          <video className={styles.video} autoPlay muted loop>
            <source
              src="/vidéopiquéesurlesitedufestivallesvieillescharues.mp4"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
          <svg
            className={styles.svgoverlay}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 H100 V100 H0 Z
                   M5,15 
                   Q25,10 50,15 T95,15 
                   Q98,50 95,85 
                   Q75,90 50,85 T5,85 
                   Q2,50 5,15 Z"
              fill="#DC8F33"
              fill-rule="evenodd"
            />
          </svg>
          <div className={styles.logo}>
            <img
              className={styles.imgLogo}
              src="/01.png"
              alt="Logo du festival KifMuzic"
            />
          </div>
        </div>
      </div>
    </>
  );
}
