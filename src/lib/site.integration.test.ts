import { describe, expect, it } from "vitest";

import { navItems } from "@/config/navigation";
import { footerNavItems } from "@/data/footer";
import { getDictionary, locales } from "@/i18n";
import { createPageMetadata, rootMetadata } from "@/lib/seo";
import { getWhatsAppProductUrl, getWhatsAppQuoteUrl } from "@/lib/whatsapp";

describe("getWhatsAppQuoteUrl", () => {
  it("monta URL com telefone sanitizado e mensagem codificada em pt", () => {
    const url = getWhatsAppQuoteUrl("pt");

    expect(url).toMatch(/^https:\/\/wa\.me\/\d+\?text=/);
    expect(decodeURIComponent(url)).toContain("orçamento");
  });

  it("usa mensagem em inglês quando locale é en", () => {
    const url = getWhatsAppQuoteUrl("en");

    expect(decodeURIComponent(url)).toContain("request a quote");
  });
});

describe("getWhatsAppProductUrl", () => {
  it("inclui o nome do produto na mensagem", () => {
    const url = getWhatsAppProductUrl("pt", "Chatbot Inteligente");

    expect(decodeURIComponent(url)).toContain("Chatbot Inteligente");
  });
});

describe("createPageMetadata", () => {
  it("define título, descrição, canonical e redes sociais", () => {
    const metadata = createPageMetadata({
      title: "Contato",
      description: "Fale com a Francine",
      path: "/contato",
    });

    expect(metadata.title).toBe("Contato");
    expect(metadata.description).toBe("Fale com a Francine");
    expect(metadata.alternates?.canonical).toContain("/contato");
    expect(metadata.openGraph?.title).toContain("Contato");
    expect(metadata.openGraph?.images).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ url: expect.stringContaining("francine-portrait") }),
      ]),
    );
    expect(metadata.twitter?.card).toBe("summary_large_image");
    expect(metadata.twitter?.images).toEqual(
      expect.arrayContaining([expect.stringContaining("francine-portrait")]),
    );
  });
});

describe("rootMetadata", () => {
  it("expõe favicon e apple touch icon nos caminhos públicos", () => {
    const icons = rootMetadata.icons;

    expect(icons).toEqual(
      expect.objectContaining({
        apple: "/apple-touch-icon.png",
      }),
    );

    const iconEntries = Array.isArray(icons?.icon) ? icons.icon : [];
    const iconUrls = iconEntries.map((entry) =>
      typeof entry === "string" ? entry : entry.url,
    );

    expect(iconUrls).toEqual(
      expect.arrayContaining([
        "/favicon.ico",
        "/favicon-32x32.png",
        "/favicon-48x48.png",
      ]),
    );
  });
});

describe("navegação", () => {
  it("mantém ids do header presentes nas traduções de todos os locales", () => {
    for (const locale of locales) {
      const dictionary = getDictionary(locale);

      for (const item of navItems) {
        expect(dictionary.nav[item.id]).toBeTruthy();
      }
    }
  });

  it("expõe rotas internas válidas para páginas dedicadas", () => {
    const internalPaths = [...navItems, ...footerNavItems]
      .map((item) => item.href)
      .filter((href) => href.startsWith("/") && !href.includes("#"));

    const uniquePaths = [...new Set(internalPaths)];

    expect(uniquePaths).toContain("/");
    expect(uniquePaths).toContain("/projetos");
  });
});

function collectKeys(value: unknown, prefix = ""): string[] {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return prefix ? [prefix] : [];
  }

  return Object.entries(value).flatMap(([key, nested]) => {
    const nextPrefix = prefix ? `${prefix}.${key}` : key;
    return collectKeys(nested, nextPrefix);
  });
}

describe("i18n", () => {
  it("mantém a mesma árvore de chaves entre pt e en", () => {
    const ptKeys = collectKeys(getDictionary("pt")).sort();
    const enKeys = collectKeys(getDictionary("en")).sort();

    expect(ptKeys).toEqual(enKeys);
  });
});
