"use client";

import dynamic from "next/dynamic";
import HeroSection from "../sections/hero-section";

const ServicesSection = dynamic(
  () => import("@/components/sections/services-section").then((m) => m.ServicesSection)
);
const ProcessSection = dynamic(
  () => import("@/components/sections/process-section").then((m) => m.ProcessSection)
);
const SecuritySection = dynamic(
  () => import("@/components/sections/security-section").then((m) => m.SecuritySection)
);
const TrustSection = dynamic(
  () => import("@/components/sections/trust-section").then((m) => m.TrustSection)
);
const SpecialtiesSection = dynamic(
  () =>
    import("@/components/sections/specialties-section").then(
      (m) => m.SpecialtiesSection
    )
);
const CtaSection = dynamic(
  () => import("@/components/sections/cta-section").then((m) => m.CtaSection)
);

export function HomePage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <SecuritySection />
      <TrustSection />
      <SpecialtiesSection />
      <CtaSection />
    </main>
  );
}
