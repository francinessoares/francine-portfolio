import type { MockupVariant } from "@/data/projects";

export type DigitalProductId =
  | "scheduling"
  | "nutrition"
  | "personalTrainer"
  | "petShop"
  | "whatsappChatbot"
  | "dashboard"
  | "institutionalSite"
  | "customSystem";

export type DigitalProduct = {
  id: DigitalProductId;
  mockup: MockupVariant;
  device: "laptop" | "phone";
  image?: string;
};

const allDigitalProducts: DigitalProduct[] = [
  { id: "scheduling", mockup: "portal", device: "laptop", image: "/products/scheduling-platform.png" },
  { id: "nutrition", mockup: "dashboard", device: "laptop", image: "/products/nutrition-system.png" },
  { id: "personalTrainer", mockup: "mobile", device: "phone", image: "/products/personal-trainer-app.png" },
  { id: "petShop", mockup: "operations", device: "laptop", image: "/products/pet-shop-platform.png" },
  { id: "whatsappChatbot", mockup: "mobile", device: "phone", image: "/products/whatsapp-chatbot.png" },
  { id: "dashboard", mockup: "analytics", device: "laptop" },
  { id: "institutionalSite", mockup: "portal", device: "laptop" },
  { id: "customSystem", mockup: "dashboard", device: "laptop" },
];

export const digitalProducts = allDigitalProducts.filter((product) => product.image);
