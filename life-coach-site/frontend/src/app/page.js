import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Home/Hero";
import Subhero from "./Components/Home/Subhero";
import Services from "./Components/Home/Services";
import Mindset from "./Components/Home/Mindset";
import Results from "./Components/Home/Results";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />
      <Subhero />
      <Services />
      <Mindset />
      <Results />
      <Footer />
    </div>
  );
}
