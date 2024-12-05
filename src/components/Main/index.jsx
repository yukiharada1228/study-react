import styles from "./Main.module.css";
import { Links } from "@/src/components/Links";
import { Headlines } from "@/src/components/Headline";
import { Logo } from "@/src/components/Logo";

export const Main = (props) => {
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
