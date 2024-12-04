import Head from "next/head";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Main } from "@/src/components/Main";
import { Typography } from "@/src/components/Typography";


export default function Home({
  count,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd
}) {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <Typography>

        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map(item => {
            return (
              <list key={item}>{item}</list>
            )
          })}
        </ul>

        <Main page="index" />

        <Footer />
      </Typography>
    </>
  );
}
