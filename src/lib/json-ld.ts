import { siteConfig, siteUrl } from "@/config/site";
import { faqItems } from "@/data/faq";
import { servicePackages } from "@/data/services";
import { defaultLocale, getDictionary } from "@/i18n";

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;
const businessId = `${siteUrl}/#business`;

export function buildJsonLd() {
  const dict = getDictionary(defaultLocale);
  const imageUrl = `${siteUrl}${siteConfig.ogImage}`;
  const portraitUrl = `${siteUrl}${siteConfig.portrait}`;

  const offers = servicePackages.map((service) => {
    const pkg = dict.services.packages[service.id];
    const offer: Record<string, unknown> = {
      "@type": "Offer",
      name: pkg.title,
      description: pkg.description,
      url: `${siteUrl}/servicos`,
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: pkg.title,
        description: pkg.description,
        provider: { "@id": businessId },
        areaServed: [
          siteConfig.location.city,
          siteConfig.location.nearby,
          "Brasil",
        ],
      },
    };

    if (service.minPriceBRL) {
      offer.priceCurrency = "BRL";
      offer.price = String(service.minPriceBRL);
      offer.priceSpecification = {
        "@type": "PriceSpecification",
        priceCurrency: "BRL",
        minPrice: service.minPriceBRL,
      };
    }

    return offer;
  });

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: siteConfig.name,
      description: dict.meta.description,
      inLanguage: "pt-BR",
      publisher: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: siteUrl,
      jobTitle: "Desenvolvedora Front-End",
      description: dict.about.meta.description,
      email: siteConfig.email,
      image: portraitUrl,
      sameAs: [siteConfig.githubProfile, siteConfig.linkedInProfile],
      knowsAbout: [
        "Criação de sites",
        "Desenvolvimento web",
        "Landing page",
        "React",
        "TypeScript",
        "Next.js",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: "SC",
        addressCountry: siteConfig.location.country,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: `${siteConfig.name} — ${siteConfig.role}`,
      url: siteUrl,
      image: imageUrl,
      description: dict.meta.description,
      priceRange: "R$ 900+",
      founder: { "@id": personId },
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
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: "SC",
        addressCountry: siteConfig.location.country,
      },
      availableLanguage: ["Portuguese", "English"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de criação de sites",
        itemListElement: offers,
      },
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildFaqJsonLd() {
  const dict = getDictionary(defaultLocale);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: faqItems.map((id) => {
      const item = dict.home.faq.items[id];
      return {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      };
    }),
  };
}
