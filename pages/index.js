import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Typography } from "@/components/Typography";

export default function Home() {
  return (
    <>
      <Header title="Index Page" />
      <Typography>
        <Main page="index" />
        <Footer />
      </Typography>
    </>
  );
}
