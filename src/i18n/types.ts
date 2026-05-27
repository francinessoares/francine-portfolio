export type Locale = "pt" | "en";

export type Dictionary = {
  meta: {
    description: string;
  };
  hero: {
    subtitle: string;
    viewWork: string;
    downloadCv: string;
    getInTouch: string;
    socialLinks: string;
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
};
