import Image from "next/image";
import styles from "./Footer.module.css";

const ITEMS = [
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    src: "/file.svg",
    alt: "File icon",
    description: "Learn"
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    src: "/window.svg",
    alt: "Window icon",
    description: "Examples"
  },
  {
    href: "https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    src: "/globe.svg",
    alt: "Globe icon",
    description: "Go to nextjs.org →"
  },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      {ITEMS.map(item => {
        return (
          <a key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src={item.src}
              alt={item.alt}
              width={16}
              height={16}
            />
            {item.description}
          </a>
        )
      })}
    </footer>
  );
}
