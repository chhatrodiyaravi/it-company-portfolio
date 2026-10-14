import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { company } from "../../data";
import PageMeta from "../common/PageMeta";

const pageMeta = {
  "/": { title: "Home", description: company.description },
  "/about": {
    title: "About",
    description: `Meet the people and principles behind ${company.name}.`,
  },
  "/services": {
    title: "Services",
    description:
      `Product strategy, design, engineering, and cloud services from ${company.name}.`,
  },
  "/technologies": {
    title: "Technologies",
    description:
      `The practical technology stack ${company.name} uses to build dependable products.`,
  },
  "/projects": {
    title: "Projects",
    description:
      `Explore selected digital products and platforms built with ${company.name}.`,
  },
  "/careers": {
    title: "Careers",
    description:
      "Work with a thoughtful team building useful digital products.",
  },
  "/contact": {
    title: "Contact",
    description:
      `Start a conversation with ${company.name} about your next product challenge.`,
  },
};

function MainLayout() {
  const location = useLocation();
  const metadata = pageMeta[location.pathname] || {
    title: company.name,
    description: company.description,
  };

  return (
    <div id="top" className="min-h-screen">
      <PageMeta title={metadata.title} description={metadata.description} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
