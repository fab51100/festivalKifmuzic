import React, { useEffect, useRef } from "react";
import programmeData from "../../public/programme.json";
import styles from "./Programme.module.css";
import Link from "next/link";

const RockFestivalParallax = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollPosition = window.scrollY;
      const days = container.children;

      Array.from(days).forEach((day) => {
        const dayTop = day.offsetTop;
        const dayHeight = day.offsetHeight;
        const dayBottom = dayTop + dayHeight;

        if (
          scrollPosition > dayTop - window.innerHeight &&
          scrollPosition < dayBottom
        ) {
          const progress =
            (scrollPosition - (dayTop - window.innerHeight)) /
            (dayHeight + window.innerHeight);
          day.style.transform = `translateY(${progress * 0}vh)`;
          day.style.opacity = Math.max(0, Math.min(1, 1 - progress / 4));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.festival} ref={containerRef}>
      {programmeData.festival.jours.map((jour, index) => (
        <div
          key={index}
          className={`${styles.day} ${styles[`day${index + 1}`]}`}
        >
          <div className={styles.content}>
            <h2 className={styles.date}>{jour.date}</h2>
            <h3 className={styles.theme}>{jour.theme}</h3>
            <div className={styles.lineup}>
              {jour.artistes.map((artiste, artisteIndex) => (
                <React.Fragment key={artisteIndex}>
                  <Link href={`/artist?id=${encodeURIComponent(artiste.nom)}`}>
                    <span className={styles.artist}>{artiste.nom}</span>
                  </Link>
                  {artisteIndex < jour.artistes.length - 1 && (
                    <span className={styles.separator}>*</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RockFestivalParallax;
