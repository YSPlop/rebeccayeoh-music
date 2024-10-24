"use client";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


export default function Home() {
  return (
    <div className="bg-background-pink h-screen">
      <NavBar />
      <ContactForm/>
      <Footer/>
    </div>
    
  );
}
