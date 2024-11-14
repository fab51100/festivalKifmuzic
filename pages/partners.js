import React, { useState, useEffect } from "react";
import styles from "../styles/Partners.module.css";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Head from "next/head";

export default function partners() {
  return (
    <>
      <Head>
        <title>Les partenaires du Festival KifMuzic 2025 1er Edition</title>
        <meta
          name="description"
          content="Ils nous font confiance et s'engagent avec nous... nos partenaires"
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
          <h1 className={styles.title}>Nos partenaires</h1>
          <div className={styles.logoslider}>
            <div className={styles.logoslidetrack}>
              <div className={styles.slide}>
                <Link href="https://www.drmartens.com/fr/fr/" target="_blank">
                  <img
                    src="/imgPartners/drm-logo.svg"
                    alt="Logo les chaussures du Dr Marteens"
                    width="250"
                    height="200"
                  />
                </Link>
              </div>
              <div className={styles.slide}>
                <Link href="https://www.fnac.com/" target="_blank">
                  <img
                    src="/imgPartners/fnac-com.svg"
                    alt="Logo de la FNAC"
                    width="250"
                    height="200"
                  />
                </Link>
              </div>
              <div className={styles.slide}>
                <Link href="https://www.mgel.fr/" target="_blank">
                  <img
                    src="/imgPartners/logo-mgel.png"
                    alt="Logo de la MGEL"
                    width="250"
                    height="200"
                  />
                </Link>
              </div>
              <div className={styles.slide}>
                <Link href="https://leffe.com/fr" target="_blank">
                  <img
                    src="/imgPartners/logo-leffe.png"
                    alt="Logo de la biere Leffe"
                    width="250"
                    height="200"
                  />
                </Link>
              </div>
              <div className={styles.slide}>
                <Link href="https://www.paris.fr/" target="_blank">
                  <img
                    src="/imgPartners/logo-ville-de-paris.jpg"
                    alt="Logo de la Ville de Paris"
                    width="250"
                    height="200"
                  />
                </Link>
              </div>
              <div className={styles.slide}>
                <Link href="https://www.epsi.fr/" target="_blank">
                  <img
                    src="/imgPartners/logoEpsiFondBlanc.svg"
                    alt="Logo EPSI: Ecole informatique"
                    width="250"
                    height="200"
                  />
                </Link>
              </div>
              <div className={styles.slide}>
                <Link href="https://www.groupem6.fr" target="_blank">
                  <img
                    src="/imgPartners/m6-groupe.png"
                    alt="Logo du Groupe M6"
                    width="250"
                    height="200"
                  />
                </Link>
              </div>
              <div className={styles.slide}>
                <Link href="https://www.rtl2.fr/" target="_blank">
                  <img
                    src="/imgPartners/rtl2.png"
                    alt="Logo de la radio RTL2"
                    width="250"
                    height="200"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
