import styles from "./Main.module.css";
import { Links } from "@/components/Links";
import { Headlines } from "@/components/Headline";
import { Logo } from "@/components/Logo";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Logo />
      <Headlines>
        <code>&quot;pages/{props.page}.js&quot;</code>
      </Headlines>
      <Links />
    </main>
  );
}
