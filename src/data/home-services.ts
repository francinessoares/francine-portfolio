export type HomeServiceId =
  | "websites"
  | "customSystems"
  | "aiProducts"
  | "platforms";

export type HomeService = {
  id: HomeServiceId;
};

export const homeServices: HomeService[] = [
  { id: "websites" },
  { id: "customSystems" },
  { id: "aiProducts" },
  { id: "platforms" },
];
