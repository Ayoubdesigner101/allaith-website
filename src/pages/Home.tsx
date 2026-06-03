
import { useEffect } from "react";
import { initBuildingScene } from "../assets/js/three/buildingScene";
import { initScrollReveal } from "../assets/js/utils/scrollReveal";

import HeroSection from "../components/home/HeroSection";
import ServicesStrip from "../components/home/ServicesStrip";
import SolutionsSection from  "../components/home/SolutionsSection";
import CompanySection from  "../components/home/CompanySection";
import ContactCTASection from "../components/home/ContactCTASection";
import CompanyFieldsSection from "../components/home/CompanyFieldsSection";
import HorizontalSilkSection from "../components/home/HorizontalSilkSection";
import AlLaithIntegrationSection from "../components/home/AlLaithIntegrationSection";


import "../assets/css/base.css";
import "../assets/css/layout.css";
import "../assets/css/components.css";
import "../assets/css/sections.css";
import "../assets/css/responsive.css";

export default function Home() {
  useEffect(() => {
    initScrollReveal();

    const cleanup = initBuildingScene();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <ServicesStrip />
      <CompanyFieldsSection />
      <SolutionsSection />
            <AlLaithIntegrationSection />

      <HorizontalSilkSection />
      <CompanySection />
      <ContactCTASection />
    </main>
  );
}