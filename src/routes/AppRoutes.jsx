import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import PlaceholderPage from "../pages/PlaceholderPage";
import ServicesPage from "../pages/ServicesPage";
import TechnologiesPage from "../pages/TechnologiesPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CareersPage from "../pages/CareersPage";
import ContactPage from "../pages/ContactPage";
import ScrollToTop from "../components/common/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="*"
            element={<PlaceholderPage title="Page not found" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
