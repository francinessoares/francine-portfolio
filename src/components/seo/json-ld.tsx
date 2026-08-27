import { siteConfig, siteUrl } from "@/config/site";
import { defaultLocale, getDictionary } from "@/i18n";

export function JsonLd() {
  const dict = getDictionary(defaultLocale);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        url: siteUrl,
        jobTitle: "Desenvolvedora Front-End",
        email: siteConfig.email,
        image: `${siteUrl}${siteConfig.portrait}`,
        sameAs: [siteConfig.githubProfile, siteConfig.linkedInProfile],
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressRegion: "SC",
          addressCountry: siteConfig.location.country,
        },
      },
      {
        "@type": "ProfessionalService",
        name: `${siteConfig.name} — ${siteConfig.role}`,
        url: siteUrl,
        description: dict.meta.description,
        image: `${siteUrl}${siteConfig.ogImage}`,
        areaServed: [
          {
            "@type": "City",
            name: siteConfig.location.city,
          },
          {
            "@type": "City",
            name: siteConfig.location.nearby,
          },
          {
            "@type": "Country",
            name: "Brasil",
          },
        ],
        serviceType: [
          "Criação de sites",
          "Desenvolvimento de sites",
          "Landing page",
          "Site profissional",
          "Desenvolvimento web",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
