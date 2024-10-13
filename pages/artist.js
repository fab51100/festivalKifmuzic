import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import VideoPlayer from "../components/VideoPlayer";
import styles from "../styles/Artist.module.css";
import programme from "../public/programme.json";
import Link from "next/link";
import Head from "next/head";

const Artist = () => {
  const router = useRouter();
  const { id } = router.query; // Récupérer l'ID de l'URL
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    if (id) {
      const dayInfo = programme.festival.jours.find((jour) =>
        jour.artistes.some((artiste) => artiste.nom === id)
      );

      if (dayInfo) {
        const artistInfo = dayInfo.artistes.find(
          (artiste) => artiste.nom === id
        );
        setArtistData({
          ...artistInfo,
          date: dayInfo.date,
        });
      }
    }
  }, [id]);

  if (!artistData) return <div>Chargement...</div>;

  return (
    <>
      <Head>
        <title>{artistData.nom} au KifMuzic Festival</title>
        <meta
          name="description"
          content="Retrouvez {Artist} au KifMuzic Festival 2025 à l'hippodrome de longchamp "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <header className={styles.header}>
          <Link href="/">
            <img src="/02.png" alt="Logo du site" className={styles.logo} />
          </Link>
        </header>
        <div className={styles.container}>
          <div className={styles.artistInfo}>
            <img
              src={`/images/${artistData.image}`}
              alt={artistData.nom}
              className={styles.artistImage}
            />
            <h1 className={styles.artistName}>{artistData.nom}</h1>
            <p className={styles.concertInfo}>
              Concert : {artistData.horaire}, {artistData.date}
            </p>
          </div>

          {/* Description de l'artiste */}
          <div className={styles.description}>
            <h2>À propos:</h2>
            <p>{artistData.description}</p>
          </div>

          {/* Galerie de vidéos */}
          <div className={styles.videos}>
            <h2>Vidéos</h2>
            <div className={styles.videoGrid}>
              {artistData.videos.map((videoUrl, index) => (
                <div key={index} className={styles.videoWrapper}>
                  <VideoPlayer videoUrl={videoUrl} />
                </div>
              ))}
            </div>
          </div>

          {/* Bouton Retour à l'accueil */}
          <footer className={styles.footer}>
            <Link href="/" className={styles.backButton}>
              Retour à l'accueil
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Artist;
