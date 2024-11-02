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
              fill="#F9C62D"
              fill-rule="evenodd"
              fill-opacity="1"
            />
          </svg>
          <div className={styles.logo}>
            <img
              className={styles.imgLogo}
              src="/logo.png"
              alt="Logo du festival KifMuzic"
            />
          </div>
        </div>
      </div>
      {/*
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F9C62D"
          fill-opacity="1"
          d="M0,128L34.3,117.3C68.6,107,137,85,206,101.3C274.3,117,343,171,411,165.3C480,160,549,96,617,69.3C685.7,43,754,53,823,64C891.4,75,960,85,1029,96C1097.1,107,1166,117,1234,117.3C1302.9,117,1371,107,1406,101.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
       */}
    </>
  );
}
