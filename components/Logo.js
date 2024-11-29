import Image from "next/image";
import styles from "@/styles/Home.module.css";

export function Logo() {
    return (
        <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
        />
    );
}
