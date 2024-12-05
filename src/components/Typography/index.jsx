import localFont from "next/font/local";
import styles from "./Typography.module.css";

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

export const Typography = (props) => {
  return (
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        {props.children}
      </div>
  );
}
