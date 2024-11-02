import React, { useState, useEffect } from "react";
import styles from "../styles/Programmation.module.css";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Head from "next/head";

const Programmation = () => {
  const [programmeData, setProgrammeData] = useState(null);

  useEffect(() => {
    fetch("/programme.json")
      .then((response) => response.json())
      .then((data) => setProgrammeData(data))
      .catch((error) =>
        console.error("Erreur de récupération des infos:", error)
      );
  }, []);

  if (!programmeData) return <div>Chargement...</div>;

  const allArtists = programmeData.festival.jours.flatMap((jour) =>
    jour.artistes.map((artiste) => ({
      ...artiste,
      date: jour.date,
    }))
  );

  return (
    <>
      <Head>
        <title>Programmation du Festival KifMuzic 2025 1er Edition</title>
        <meta
          name="description"
          content="consultez la programmation de nos 3 jours de Festival à l'hippodrome de longchamp du 11 au 13 Juillet 2025"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <header className={styles.header}>
          <Link href="/">
            <img src="/logo.png" alt="Logo du site" className={styles.logo} />
          </Link>
        </header>
        <div className={styles.container}>
          <h1 className={styles.title}>Programmation du Festival</h1>
          <div className={styles.gallery}>
            {allArtists.map((artiste, index) => (
              <Link
                key={index}
                href={`/artist?id=${encodeURIComponent(artiste.nom)}`}
              >
                <div className={styles.card}>
                  <div className={styles.imageContainer}>
                    <img
                      src={`/images/${artiste.image}`}
                      alt={artiste.nom}
                      className={styles.image}
                    />
                    <div className={styles.overlay}>
                      <h2 className={styles.artistName}>{artiste.nom}</h2>
                      <p className={styles.date}>
                        {artiste.date} - {artiste.horaire}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>{" "}
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default Programmation;
