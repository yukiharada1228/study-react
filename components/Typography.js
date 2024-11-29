import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

const geistSans = localFont({
  src: "../pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../pages/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function Typography(props) {
  return (
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        {props.children}
      </div>
  );
}
