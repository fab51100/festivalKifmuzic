import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Icon } from "leaflet";
import { useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Icônes
const sceneIcon = new Icon({
  iconUrl: "/icons/stage-icon.png",
  iconSize: [30, 30],
});
const campingIcon = new Icon({
  iconUrl: "/icons/camping-icon.png",
  iconSize: [30, 30],
});
const foodIcon = new Icon({
  iconUrl: "/icons/food-icon.png",
  iconSize: [30, 30],
});
const wcIcon = new Icon({ iconUrl: "/icons/wc-icon.png", iconSize: [30, 30] });
const parkingIcon = new Icon({
  iconUrl: "/icons/parking-icon.png",
  iconSize: [30, 30],
});
const secoursIcon = new Icon({
  iconUrl: "/icons/first-aid-icon.png",
  iconSize: [30, 30],
});
/*
// Géolocalisation de l'utilisateur désactivé pour l'exercice, pour visualiser le lieu du festival
const UserLocationMarker = () => {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.setView(e.latlng, 15);
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Vous êtes ici</Popup>
    </Marker>
  );
};
*/
const Carte = () => {
  const [isClient, setIsClient] = useState(false);
  const [visibleLayers, setVisibleLayers] = useState({
    scenes: true,
    camping: true,
    food: true,
    wc: true,
    parking: true,
    secours: true,
  });

  useEffect(() => {
    setIsClient(true); // Vérifier que nous sommes bien côté client
  }, []);

  const festivalLocation = [48.864716, 2.217467]; // Coordonnées de l'Hippodrome de Longchamp

  // Gestion des filtres
  const toggleLayer = (layer) => {
    setVisibleLayers({ ...visibleLayers, [layer]: !visibleLayers[layer] });
  };

  if (!isClient) {
    // Si on est côté serveur, on ne charge pas Leaflet
    return <div>Chargement de la carte...</div>;
  }

  return (
    <div>
      <div className="filters">
        <button onClick={() => toggleLayer("scenes")}>
          Afficher / Cacher Scènes
        </button>
        <button onClick={() => toggleLayer("camping")}>
          Afficher / Cacher Camping
        </button>
        <button onClick={() => toggleLayer("food")}>
          Afficher / Cacher Restauration
        </button>
        <button onClick={() => toggleLayer("wc")}>Afficher / Cacher WC</button>
        <button onClick={() => toggleLayer("parking")}>
          Afficher / Cacher Parking
        </button>
        <button onClick={() => toggleLayer("secours")}>
          Afficher / Cacher Secours
        </button>
      </div>

      <MapContainer
        center={festivalLocation}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Ajout de la géolocalisation
        <UserLocationMarker />
 */}
        {/* Afficher uniquement les scènes si elles sont activées */}
        {visibleLayers.scenes && (
          <>
            <Marker position={[48.866, 2.217]} icon={sceneIcon}>
              <Popup>
                Scène Rock US
                <br />
                Les plus grands artistes ici !
              </Popup>
            </Marker>
            <Marker position={[48.863, 2.214]} icon={sceneIcon}>
              <Popup>Scéne Rock Britannique</Popup>
            </Marker>
            <Marker position={[48.865, 2.221]} icon={sceneIcon}>
              <Popup>Scéne Rock Français</Popup>
            </Marker>
          </>
        )}

        {/* Camping */}
        {visibleLayers.camping && (
          <>
            <Marker position={[48.862, 2.219]} icon={campingIcon}>
              <Popup>Zone de camping A : Proche des scènes.</Popup>
            </Marker>
            <Marker position={[48.861, 2.222]} icon={campingIcon}>
              <Popup>Zone de camping B : Plus calme.</Popup>
            </Marker>
          </>
        )}

        {/* Restauration */}
        {visibleLayers.food && (
          <>
            <Marker position={[48.864, 2.219]} icon={foodIcon}>
              <Popup>Restauration : Un large choix de nourriture !</Popup>
            </Marker>
            <Marker position={[48.864, 2.216]} icon={foodIcon}>
              <Popup>Bar principal : Rafraîchissements disponibles.</Popup>
            </Marker>
          </>
        )}

        {/* Toilettes */}
        {visibleLayers.wc && (
          <>
            <Marker position={[48.863, 2.219]} icon={wcIcon}>
              <Popup>Toilettes et douches (zone A).</Popup>
            </Marker>
            <Marker position={[48.861, 2.216]} icon={wcIcon}>
              <Popup>Toilettes et douches (zone B).</Popup>
            </Marker>
          </>
        )}

        {/* Parkings */}
        {visibleLayers.parking && (
          <Marker position={[48.867, 2.218]} icon={parkingIcon}>
            <Popup>Parking principal : Sécurisé et facile d'accès.</Popup>
          </Marker>
        )}

        {/* Postes de secours */}
        {visibleLayers.secours && (
          <Marker position={[48.864, 2.214]} icon={secoursIcon}>
            <Popup>Poste de secours et sécurité.</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Carte;
