import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigationCta, navigationLinks } from "../../data";
import Container from "../common/Container";
import Logo from "../common/Logo";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_4px_24px_-20px_rgba(16,42,45,0.45)] backdrop-blur-xl">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between lg:h-20">
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3 font-semibold text-ink-950 transition-opacity hover:opacity-90"
          >
            <Logo />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-4 lg:flex xl:gap-5"
          >
            {navigationLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.href}
                className={({ isActive }) =>
                  `group relative px-1 py-2 text-[13px] font-semibold transition-colors duration-200 motion-reduce:transition-none ${
                    isActive ? "text-brand-700" : "text-ink-700 hover:text-ink-950"
                  }`
                }
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-1 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-brand-600 transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 group-[.active]:scale-x-100 motion-reduce:transition-none"
                />
              </NavLink>
            ))}
            <NavLink
              to={navigationCta.href}
              className="group inline-flex items-center gap-2 rounded-xl bg-ink-950 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm shadow-ink-950/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md focus-visible:outline-offset-4 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span>{navigationCta.label}</span>
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
            </NavLink>
          </nav>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-xl border border-slate-200 bg-white text-ink-950 transition-all duration-200 hover:border-brand-100 hover:bg-brand-50 hover:text-brand-700 lg:hidden motion-reduce:transition-none"
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden motion-reduce:transition-none ${
            isMenuOpen
              ? "grid-rows-[1fr] border-t border-slate-200 opacity-100"
              : "grid-rows-[0fr] border-t border-transparent opacity-0"
          }`}
        >
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            aria-hidden={!isMenuOpen}
            inert={!isMenuOpen}
            className="min-h-0 overflow-hidden"
          >
            <div className="grid gap-1 py-4">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors duration-200 motion-reduce:transition-none ${
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink-700 hover:bg-slate-50 hover:text-ink-950"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to={navigationCta.href}
                onClick={closeMenu}
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-ink-950 px-3 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-700 motion-reduce:transition-none"
              >
                <span>{navigationCta.label}</span>
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
              </NavLink>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
