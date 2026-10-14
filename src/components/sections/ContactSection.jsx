import { Mail, ArrowRight } from "lucide-react";
import { contactInformation } from "../../data";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

function ContactSection() {
  return (
    <section id="contact" className="py-20 border-t border-slate-200">
      <Container>
        <SectionHeading
          eyebrow="Start a conversation"
          title="Let’s make the next step clear."
          description={contactInformation.location}
        />
        <a
          href={`mailto:${contactInformation.email}`}
          className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-50 px-5 py-3 font-semibold text-brand-700 transition-colors hover:bg-brand-600 hover:text-white"
        >
          <Mail className="size-4" />
          <span>{contactInformation.email}</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Container>
    </section>
  );
}

export default ContactSection;
