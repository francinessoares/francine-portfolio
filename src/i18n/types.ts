import type {
  ExperienceId,
  ExpertiseId,
  StackCategoryId,
  TechId,
} from "@/data/tech-stack";

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

export type Dictionary = {
  meta: {
    description: string;
  };
  a11y: {
    skipToContent: string;
  };
  hero: {
    subtitle: string;
    viewWork: string;
    downloadCv: string;
    getInTouch: string;
    socialLinks: string;
    techBadges: string[];
    social: {
      github: string;
      linkedIn: string;
      email: string;
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
      items: Record<ExperienceId, string>;
    };
  };
};
