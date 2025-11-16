import Image from "next/image";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import ContactForm from "./ContactPage";


export default function Home() {
  return (
    <div>
      <Navbar />
        <ContactForm />
      <Footer />
    </div>
  );
}
