import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import VideoHeader from "../components/VideoHeader/Videoheader";
import Programme from "../components/Programme/Programme";
import Link from "next/link";
import Loader from "../components/loader/Loader";

export default function Home() {
  return (
    <div>
      <head>
        <title>Festival KifMuzic 2025 1er Edition</title>
        <meta
          name="description"
          content="La KiMuzic Team vous accueil à l'hippodrome de longchamp du 11 au 13 Juillet 2025 pour son premier festival de musique"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div>
        <VideoHeader />
        <Programme />
      </div>
    </div>
  );
}