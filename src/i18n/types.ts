import type { ExpertiseId, StackCategoryId, TechId } from "@/data/tech-stack";
import type { ServiceId } from "@/data/services";
import type { NavItemId } from "@/config/navigation";
import type { HomeServiceId } from "@/data/home-services";
import type { ProcessStepId } from "@/data/projects";
import type { DigitalProductId } from "@/data/digital-products";
import type { ClientIndustryId } from "@/data/clients";
import type { FaqId } from "@/data/faq";
import type { FooterNavId, FooterServiceId } from "@/data/footer";

export type Locale = "pt" | "en";

type TechEntry = {
  name: string;
  description: string;
  tags: string[];
};

type CategoryEntry = {
  title: string;
  description: string;
};

type ExpertiseEntry = {
  title: string;
  description: string;
};

type ServiceEntry = {
  title: string;
  description: string;
  features: string[];
  price: string;
};

type HomeServiceEntry = {
  title: string;
  description: string;
};

type DigitalProductEntry = {
  title: string;
  description: string;
  features: string[];
};

type ProcessStepEntry = {
  title: string;
  description: string;
};

type FaqEntry = {
  question: string;
  answer: string;
};

export type Dictionary = {
  meta: {
    description: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
  };
  nav: Record<NavItemId, string>;
  header: {
    cta: string;
  };
  hero: {
    role: string;
    headline: string;
    subtitle: string;
    viewSolutions: string;
    requestQuote: string;
    socialLinks: string;
    social: {
      github: string;
      linkedIn: string;
      email: string;
    };
  };
  home: {
    clients: {
      eyebrow: string;
      title: string;
      items: Record<ClientIndustryId, string>;
    };
    services: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: Record<HomeServiceId, HomeServiceEntry>;
      cta: string;
    };
    solutions: {
      eyebrow: string;
      title: string;
      subtitle: string;
      requestQuote: string;
      items: Record<DigitalProductId, DigitalProductEntry>;
    };
    process: {
      eyebrow: string;
      title: string;
      subtitle: string;
      steps: Record<ProcessStepId, ProcessStepEntry>;
    };
    techPreview: {
      eyebrow: string;
      title: string;
      subtitle: string;
      cta: string;
    };
    about: {
      eyebrow: string;
      title: string;
      subtitle: string;
      paragraphs: string[];
      viewStack: string;
    };
    faq: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: Record<FaqId, FaqEntry>;
    };
    contact: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  services: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    packages: Record<ServiceId, ServiceEntry>;
    featured: string;
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  projects: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    domains: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    cta: {
      title: string;
      button: string;
    };
  };
  about: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    approach: {
      title: string;
      paragraphs: string[];
    };
    viewStack: string;
  };
  contact: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    channels: {
      email: string;
      linkedIn: string;
      github: string;
      whatsapp: string;
    };
    cta: {
      title: string;
      button: string;
    };
  };
  footer: {
    brand: {
      description: string;
    };
    sections: {
      navigation: string;
      services: string;
      contact: string;
    };
    nav: Record<FooterNavId, string>;
    services: Record<FooterServiceId, string>;
    contact: {
      whatsapp: string;
      email: string;
      linkedIn: string;
      github: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
    bottom: {
      copyright: string;
      rights: string;
      builtWith: string;
    };
  };
  profileCard: {
    available: string;
    profile: string;
    metrics: {
      based: { label: string; value: string };
      stack: { label: string; value: string };
      focus: { label: string; value: string };
    };
  };
  localeSwitcher: {
    label: string;
    pt: string;
    en: string;
  };
  techStack: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    categories: Record<StackCategoryId, CategoryEntry>;
    techs: Record<TechId, TechEntry>;
    featured: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: Record<ExpertiseId, ExpertiseEntry>;
    };
    experience: {
      eyebrow: string;
      title: string;
      highlights: string[];
      systemsTitle: string;
      systems: string[];
    };
  };
};
