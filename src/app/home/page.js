"use client";

import CardSection from "./../../components/CardSection";
import EmissionManager from "./../../components/EmissionManager";
import FeatureSection from "./../../components/FeatureSection";
import FooterSection from "./../../components/FooterSection";
import GlobalProblem from "./../../components/GlobalProblem";
import HeroSection from "./../../components/HeroSection";
import Navbar from "./../../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardSection />
      <GlobalProblem />
      <FeatureSection />
      <EmissionManager />
      <FooterSection />
    </>
  );
}
