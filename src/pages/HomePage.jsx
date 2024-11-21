import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import React from "react";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer/>
    </>
  );
}

export default HomePage;
