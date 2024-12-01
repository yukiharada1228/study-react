import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Main } from "@/src/components/Main";
import { Typography } from "@/src/components/Typography";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <Typography>
        <Main page="index" />
        <Footer />
      </Typography>
    </>
  );
}
