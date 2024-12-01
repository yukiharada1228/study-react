import Link from "next/link";
import style from "./Header.module.css"

export function Header() {
  return (
    <header className={style.header}>
      <Link className={style.anchor} href="/">Index</Link>
      <Link className={style.anchor} href="/about">About</Link>
    </header>
  );
}
