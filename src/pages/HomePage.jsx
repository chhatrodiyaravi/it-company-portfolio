import {
  homeContent,
  projects,
  services,
  statistics,
  technologies,
  testimonials,
} from "../data";
import AboutPreviewSection from "../components/sections/AboutPreviewSection";
import CTASection from "../components/sections/CTASection";
import HeroSection from "../components/sections/HeroSection";
import ProcessSection from "../components/sections/ProcessSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection";
import StatisticsSection from "../components/sections/StatisticsSection";
import TechnologiesSection from "../components/sections/TechnologiesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import TrustStrip from "../components/sections/TrustStrip";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip indicators={homeContent.trustIndicators} />
      <AboutPreviewSection content={homeContent.aboutPreview} />
      <ServicesSection services={services} intro={homeContent.servicesIntro} />
      <WhyChooseUsSection content={homeContent.whyChooseUs} />
      <TechnologiesSection
        technologies={technologies}
        intro={homeContent.technologiesIntro}
      />
      <ProjectsSection projects={projects} intro={homeContent.projectsIntro} />
      <ProcessSection content={homeContent.process} />
      <StatisticsSection statistics={statistics} />
      <TestimonialsSection
        testimonials={testimonials}
        intro={homeContent.testimonialsIntro}
      />
      <CTASection content={homeContent.cta} />
    </>
  );
}

export default HomePage;
