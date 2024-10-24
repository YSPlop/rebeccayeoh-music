"use client";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import MainPageContent from "../components/MainPageContent";


export default function Home() {
  return (
    <div className="bg-background-pink h-screen relative">
      <MainPageContent />
      <Footer />
      <ContactForm />

    </div>
  );
}
