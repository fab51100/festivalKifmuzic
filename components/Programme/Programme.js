import React from "react";
import programmeData from "../../public/programme.json";
import styles from "./Programme.module.css";
import Link from "next/link";

const DayCard = ({ jour, index }) => (
  <div className={`${styles.day} ${styles[`day${index + 1}`]}`}>
    <div className={styles.dayContent}>
      <h2 className={styles.date}>{jour.date}</h2>
      <h3 className={styles.theme}>{jour.theme}</h3>
      <div className={styles.artistList}>
        {jour.artistes.map((artiste, artisteIndex) => (
          <Link
            key={artisteIndex}
            href={`/artist?id=${encodeURIComponent(artiste.nom)}`}
          >
            <span className={styles.artist}>{artiste.nom}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default function Programme() {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h2>Bienvenue au KifMuzic Festival!</h2>
        <p>
          Chers festivaliers, préparez-vous à vivre une expérience musicale
          inoubliable ! Pendant trois jours, l'hippodrome de Longchamps à Paris
          va vibrer au rythme des plus grands noms du rock britannique,
          américain et français. Que vous soyez fan de Radiohead, Pearl Jam ou
          Dionysos, vous trouverez votre bonheur sur nos scènes. N'oubliez pas
          votre bonne humeur, votre énergie et votre amour pour la musique live.
          Le KifMuzic Festival, c'est votre festival !
        </p>
      </div>
      <div className={styles.festival}>
        {programmeData.festival.jours.map((jour, index) => (
          <DayCard key={index} jour={jour} index={index} />
        ))}
      </div>
    </div>
  );
}
