import { useEffect } from "react";
import { company } from "../../data";

function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = `${title} | ${company.name}`;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", description);
  }, [description, title]);

  return null;
}

export default PageMeta;
