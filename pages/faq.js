import React, { useState, useEffect } from "react";
import styles from "../styles/faq.module.css";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Head from "next/head";

const Question = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Foire aux questions - Le Kif Muzic Festival</title>
        <meta
          name="description"
          content="Vous avez une question ? Nous avons (sûrement) la réponse !"
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
          <h1 className={styles.title}>La foire aux questions</h1>
          <div className={styles.faq}>
            <h2>CAMPING / HÉBERGEMENT </h2>
            <div className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleQuestion(0)}
              >
                <span>L'ACCÈS AU CAMPING EST-IL COMPRIS DANS MON BILLET ?</span>
                <span>{openQuestion === 0 ? "-" : "+"}</span>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  openQuestion === 0 ? styles.open : ""
                }`}
              >
                <p>
                  Le camping est gratuit, sur réservation uniquement
                  (inscriptions depuis votre compte Charrues). Sans cet accès
                  spécifique, impossible de vous rendre au camping.
                </p>
              </div>
            </div>

            <div className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleQuestion(1)}
              >
                <span>
                  PUIS-JE M'INSTALLER LA VEILLE DU JOUR INDIQUÉ SUR MON BILLET ?
                </span>
                <span>{openQuestion === 1 ? "-" : "+"}</span>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  openQuestion === 1 ? styles.open : ""
                }`}
              >
                <p>
                  La réservation du camping est possible uniquement si vous avez
                  saisi le code-barres du jour de votre venue. Si vous avez
                  saisi un code-barres pour le vendredi, alors vous ne pourrez
                  réserver que le camping vendredi.
                </p>
              </div>
            </div>

            <div className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleQuestion(2)}
              >
                <span>
                  J'AI UN BILLET POUR LE VENDREDI ET UN AUTRE POUR LE DIMANCHE
                  (PAR EXEMPLE), PUIS-JE RESTER AU CAMPING ?
                </span>
                <span>{openQuestion === 2 ? "-" : "+"}</span>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  openQuestion === 2 ? styles.open : ""
                }`}
              >
                <p>
                  Attention, toute sortie est définitive ! Si vous sortez du
                  camping et que vous n’avez pas de réservation pour ce jour-là,
                  vous ne pourrez pas re-rentrer… En revanche, vous pouvez
                  circuler librement avec un pass 3J
                </p>
              </div>
              <h2>BILLETS</h2>
              <div className={styles.faqItem}>
                <div
                  className={styles.faqQuestion}
                  onClick={() => toggleQuestion(3)}
                >
                  <span>JE VEUX REVENDRE MON BILLET</span>
                  <span>{openQuestion === 3 ? "-" : "+"}</span>
                </div>
                <div
                  className={`${styles.faqAnswer} ${
                    openQuestion === 3 ? styles.open : ""
                  }`}
                >
                  <p>
                    Attention au marché noir ! La loi n° 2012-348 du 12 mars
                    2012 protège les spectateurs contre la revente de billets
                    par toute société ou personne physique non agréé par le
                    producteur du spectacle. Le festival se réserve le droit
                    d’engager des poursuites si des ventes illégales sont
                    constatées (vous encourez jusque 15000€ d’amende). Si vous
                    décidez d’acheter un billet en-dehors des circuits légaux,
                    vous risquez d’avoir affaire à un faux ou a une copie et de
                    ne pas pouvoir rentrer sur le site du festival.
                  </p>
                </div>
              </div>
              <div className={styles.faqItem}>
                <div
                  className={styles.faqQuestion}
                  onClick={() => toggleQuestion(4)}
                >
                  <span>PUIS-JE CHANGER LE NOM INSCRIT SUR MON BILLET ? ?</span>
                  <span>{openQuestion === 4 ? "-" : "+"}</span>
                </div>
                <div
                  className={`${styles.faqAnswer} ${
                    openQuestion === 4 ? styles.open : ""
                  }`}
                >
                  <p>
                    Vous recevrez un email au printemps 2024 vous indiquant les
                    modalités vous permettant de nommer vos billets
                    (obligatoire). Vous aurez jusqu’à mi-juin 2024 pour nommer
                    chaque billet. À partir de fin juin 2024, vous recevrez sur
                    votre adresse mail un lien vers votre commande pour
                    télécharger vos billets. Si vous n’avez pas nommé vos
                    billets, ils seront automatiquement attribués au nom de
                    l’acheteur de la commande.
                  </p>
                </div>
              </div>
              <div className={styles.faqItem}>
                <div
                  className={styles.faqQuestion}
                  onClick={() => toggleQuestion(5)}
                >
                  <span>
                    AU SECOURS ! JE NE TROUVE PAS DE RÉPONSE À MA QUESTION SUR
                    LA BILLETTERIE !
                  </span>
                  <span>{openQuestion === 5 ? "-" : "+"}</span>
                </div>
                <div
                  className={`${styles.faqAnswer} ${
                    openQuestion === 5 ? styles.open : ""
                  }`}
                >
                  <p>Keep calm and call le service clients.</p>
                </div>
              </div>
              <h2>AUTRES QUESTIONS</h2>
              <div className={styles.faqItem}>
                <div
                  className={styles.faqQuestion}
                  onClick={() => toggleQuestion(6)}
                >
                  <span>
                    J'AI UN FOODTRUCK / JE VOUS PROPOSE MON STAND D'ARTISANAT
                    SUR LE SITE DU FESTIVAL, COMMENT FAIRE ?
                  </span>
                  <span>{openQuestion === 6 ? "-" : "+"}</span>
                </div>
                <div
                  className={`${styles.faqAnswer} ${
                    openQuestion === 6 ? styles.open : ""
                  }`}
                >
                  <p>
                    Seuls nos partenaires peuvent tenir un stand dans l’enceinte
                    du festival. Nous ne donnons suite à aucune demande.
                  </p>
                </div>
              </div>
              <div className={styles.faqItem}>
                <div
                  className={styles.faqQuestion}
                  onClick={() => toggleQuestion(7)}
                >
                  <span>
                    J'AI UN BILLET UN JOUR ET J'AI OUBLIÉ QUELQUE CHOSE DANS MA
                    TENTE : PUIS-JE FAIRE UN ALLER-RETOUR AU CAMPING ?
                  </span>
                  <span>{openQuestion === 7 ? "-" : "+"}</span>
                </div>
                <div
                  className={`${styles.faqAnswer} ${
                    openQuestion === 7 ? styles.open : ""
                  }`}
                >
                  <p>
                    Malheureusement non : avec un billet 1 jour, toute sortie
                    est définitive. Seuls les détenteur·ice·s des pass 3J et 4J
                    peuvent sortir puis revenir sur le site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Question;
