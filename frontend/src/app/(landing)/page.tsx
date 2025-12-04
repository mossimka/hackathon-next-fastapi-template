import Image from "next/image";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import FeaturesSection from "@/components/sections/FeautersSections/FeaturesSetion";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
