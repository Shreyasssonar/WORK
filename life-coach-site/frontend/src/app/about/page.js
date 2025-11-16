import Image from "next/image";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import About from "./About";


export default function Home() {
  return (
    <div>
      <Navbar />
        <About />
      <Footer />
    </div>
  );
}
