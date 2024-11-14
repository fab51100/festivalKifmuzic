import { useState } from "react";
import dynamic from "next/dynamic";
import "../styles/globals.css";
import Menu from "../components/Menu/Menu";

const Carte = dynamic(() => import("../components/Carte/Carte"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [carteOpen, setCarteOpen] = useState(false); // Etat pour gérer l'ouverture de la carte

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCarte = () => {
    setCarteOpen(!carteOpen); // Ouvre ou ferme la carte
  };

  return (
    <div>
      {/* Icône de la carte a gauche */}
      <header className="header">
        <div className="carte-icon" onClick={toggleCarte}>
          <img src="/icons/map-icon.png" alt="Ouvrir la carte" />
        </div>

        {/* Icône du menu à droite */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Affichage du composant Menu en fonction de l'état */}
      {menuOpen && <Menu closeMenu={toggleMenu} />}

      {/* Affichage du composant Carte en fonction de l'état */}
      {carteOpen && (
        <div className="carte-overlay">
          <button className="close-carte" onClick={toggleCarte}>
            X
          </button>
          <Carte />
        </div>
      )}

      {/* Le composant courant */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
