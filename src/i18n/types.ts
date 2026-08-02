import type { ExpertiseId, StackCategoryId, TechId } from "@/data/tech-stack";
import type { ServiceId } from "@/data/services";
import type { NavItemId } from "@/config/navigation";
import type { HomeServiceId } from "@/data/home-services";
import type { ProcessStepId } from "@/data/projects";
import type { DigitalProductId } from "@/data/digital-products";
import type { FeaturedProjectId } from "@/data/featured-projects";
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
    scrollToTop: string;
  };
  nav: Record<NavItemId, string>;
  header: {
    cta: string;
  };
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    headlineHighlight: string;
    headlineMobile: [string, string, string, string];
    subtitle: string;
    subtitleMobile: string;
    viewProjects: string;
    requestQuote: string;
    socialLinks: string;
    badge: string;
    badgeRole: string;
    badgeExperience: string;
    trust: string[];
    trustMobile: string[];
    stats: Array<{ label: string; detail: string }>;
    social: {
      github: string;
      linkedIn: string;
      email: string;
    };
    audience: string[];
    profile: {
      role: string;
      experience: string;
      stack: string;
      focus: string;
      available: string;
    };
  };
  home: {
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
      titleHighlight: string;
      paragraphs: Array<Array<{ text: string; accent?: boolean }>>;
      profile: {
        firstName: string;
        lastName: string;
        role: string;
        stack: string;
      };
      metrics: Array<{ value: string; label: string }>;
      ctaPrimary: string;
      ctaSecondary: string;
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
      paragraphs: string[];
    };
    featured: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      visit: string;
      items: Record<
        FeaturedProjectId,
        {
          name: string;
          status: string;
          paragraphs: string[];
        }
      >;
    };
    cta: {
      title: string;
      description: string;
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
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      sendAnother: string;
      error: string;
    };
    otherChannels: string;
    channels: {
      email: string;
      linkedIn: string;
      github: string;
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
      form: string;
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
  errors: {
    notFound: {
      title: string;
      description: string;
      backHome: string;
    };
    server: {
      title: string;
      description: string;
      retry: string;
      backHome: string;
    };
    loading: string;
  };
};
