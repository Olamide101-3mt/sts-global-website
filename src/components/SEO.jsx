
import { useEffect } from "react";

const SITE_URL = "https://www.stsolutionsglobal.com";

export default function SEO({
  title,
  description,
  path = "/",
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Service Technology Solutions Global`
      : "Service Technology Solutions Global | Solar, Security, CCTV and Automation Solutions";

    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = fullTitle;

    function setMeta(attribute, key, content) {
      if (!content) return;

      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    }

    // Standard SEO metadata
    setMeta("name", "description", description);

    // Social sharing metadata
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    // Canonical URL
    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }, [title, description, path]);

  return null;
}
