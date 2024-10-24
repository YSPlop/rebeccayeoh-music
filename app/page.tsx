"use client";
import ContactForm from "../components/ContactForm";
import MainPageContent from "../components/MainPageContent";


export default function Home() {
  return (
    <div className="bg-background-pink h-screen">
      <MainPageContent />
      
      <ContactForm />

    </div>
  );
}
