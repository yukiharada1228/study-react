import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import { Headlines } from "@/components/Headline";
import { Logo } from "@/components/Logo";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Logo />
      <Headlines>
        <code>"pages/{props.page}.js"</code>
      </Headlines>
      <Links />
    </main>
  );
}
