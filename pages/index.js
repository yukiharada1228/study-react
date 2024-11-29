import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Header title="Index Page" />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Main page="index" />
        <Footer />
      </div>
    </>
  );
}
