import { aboutContent, statistics, team } from "../data";
import AboutHeroSection from "../components/sections/AboutHeroSection";
import CTASection from "../components/sections/CTASection";
import MissionVisionSection from "../components/sections/MissionVisionSection";
import PhilosophySection from "../components/sections/PhilosophySection";
import StatisticsSection from "../components/sections/StatisticsSection";
import TeamSection from "../components/sections/TeamSection";
import ValuesSection from "../components/sections/ValuesSection";

function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionVisionSection content={aboutContent} />
      <ValuesSection values={aboutContent.values} />
      <StatisticsSection statistics={statistics} />
      <TeamSection team={team} />
      <PhilosophySection content={aboutContent.philosophy} />
      <CTASection content={aboutContent.cta} />
    </>
  );
}

export default AboutPage;
