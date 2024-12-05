import Link from "next/link";
import style from "./Header.module.css"

const NAV_ITEMS = [
  {href: "/", label: "Index"},
  {href: "/about", label: "About"},
]

export const Header = () => {
  return (
    <header className={style.header}>
      {NAV_ITEMS.map((item) => {
        return  <Link key={item.href} className={style.anchor} href={item.href}>{item.label}</Link>
      })}
    </header>
  );
}
