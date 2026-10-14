import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "./ServiceCard";

function ServicesSection({ services, intro }) {
  return (
    <section id="services" className="py-20">
      <Container>
        <SectionHeading
          eyebrow={intro.eyebrow}
          title={intro.title}
          description={intro.description}
        />
        <div className="services-marquee mt-12 overflow-hidden py-6">
          <div className="services-marquee-track">
            {[false, true].map((isDuplicate) => (
              <div
                key={isDuplicate ? "duplicate-cards" : "cards"}
                className="flex shrink-0 gap-5 pr-5"
                aria-hidden={isDuplicate || undefined}
              >
                {services.map((service) => (
                  <ServiceCard
                    key={`${isDuplicate ? "duplicate-" : ""}${service.id}`}
                    service={service}
                    marquee
                    duplicate={isDuplicate}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
