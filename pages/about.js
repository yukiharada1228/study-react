import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeadMeta } from "@/components/HeadMeta";
import { Main } from "@/components/Main";
import { Typography } from "@/components/Typography";

export default function Home() {
  return (
    <>
      <HeadMeta title="About Page" />
      <Header />
      <Typography>
        <Main page="about" />
        <Footer />
      </Typography>
    </>
  );
}
