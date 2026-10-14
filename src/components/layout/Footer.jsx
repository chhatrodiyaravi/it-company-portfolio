import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { company, contactInformation, navigationLinks } from "../../data";
import Container from "../common/Container";
import Logo from "../common/Logo";
import SocialIcon from "../common/SocialIcon";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link to="/" className="group inline-block">
              <Logo />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-ink-600">
              {company.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {contactInformation.socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="grid size-9 place-items-center rounded-lg border border-slate-200 text-ink-600 transition-colors hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700"
                >
                  <SocialIcon id={link.id} className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-950">
              Explore
            </h2>
            <nav
              aria-label="Footer navigation"
              className="mt-4 grid gap-3 text-sm text-ink-600"
            >
              {navigationLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.id}
                  to={link.href}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-700"
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-950">
              Get in touch
            </h2>
            <div className="mt-4 grid gap-3.5 text-sm text-ink-600">
              <a
                href={`mailto:${contactInformation.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-brand-700"
              >
                <Mail className="size-4 text-brand-600 shrink-0" />
                <span>{contactInformation.email}</span>
              </a>
              <a
                href={`tel:${contactInformation.phone}`}
                className="flex items-center gap-2.5 transition-colors hover:text-brand-700"
              >
                <Phone className="size-4 text-brand-600 shrink-0" />
                <span>{contactInformation.phone}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 text-brand-600 shrink-0 mt-0.5" />
                <span>{contactInformation.location}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-ink-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            Designed & Engineered with Craft
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
