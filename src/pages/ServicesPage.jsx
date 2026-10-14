import { services } from "../data";
import CTASection from "../components/sections/CTASection";
import Container from "../components/common/Container";
import ServiceCard from "../components/sections/ServiceCard";
import ServicesHeroSection from "../components/sections/ServicesHeroSection";

function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <section id="service-offerings" className="scroll-mt-20 py-24 sm:py-28">
        <Container className="relative">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              stacked
              stackIndex={index}
            />
          ))}
        </Container>
      </section>
      <CTASection />
    </>
  );
}

export default ServicesPage;
