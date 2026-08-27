import { describe, expect, it } from "vitest";

import { navItems } from "@/config/navigation";
import { getWhatsAppUrl, resolveSiteUrl } from "@/config/site";
import { footerNavItems } from "@/data/footer";
import { getDictionary, locales } from "@/i18n";
import { createPageMetadata, rootMetadata } from "@/lib/seo";

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
        expect.objectContaining({
          url: expect.stringContaining("og-image"),
          width: 1055,
          height: 1491,
        }),
      ]),
    );
    expect(metadata.robots).toEqual(
      expect.objectContaining({
        index: true,
        follow: true,
      }),
    );
    expect(metadata.twitter?.card).toBe("summary_large_image");
    expect(metadata.twitter?.images).toEqual(
      expect.arrayContaining([expect.stringContaining("og-image")]),
    );
  });

  it("permite título absoluto sem o template do layout", () => {
    const metadata = createPageMetadata({
      title: "Francine Soares | Criação de sites em Florianópolis",
      description: "Sites profissionais",
      path: "/",
      absoluteTitle: true,
    });

    expect(metadata.title).toEqual({
      absolute: "Francine Soares | Criação de sites em Florianópolis",
    });
    expect(metadata.openGraph?.title).toBe(
      "Francine Soares | Criação de sites em Florianópolis",
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

  it("inclui a verificação do Google Search Console", () => {
    expect(rootMetadata.verification).toEqual({
      google: "qKbevewQ7IeBfr4P14PVPPt52Dw_liSXDLpG6Z456qU",
    });
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
    expect(uniquePaths).toContain("/contato");
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

describe("resolveSiteUrl", () => {
  it("usa o domínio de produção quando a env não está definida", () => {
    expect(
      resolveSiteUrl({
        configured: "",
        vercelProduction: "",
        nodeEnv: "production",
      }),
    ).toBe("https://francinesoares.dev");
  });

  it("não gera URL de localhost em produção", () => {
    const url = resolveSiteUrl({
      configured: "",
      vercelProduction: "francinesoares.dev",
      nodeEnv: "production",
    });

    expect(url).toBe("https://francinesoares.dev");
    expect(url).not.toContain("localhost");
  });
});

describe("getWhatsAppUrl", () => {
  it("retorna null quando o telefone está vazio", () => {
    expect(getWhatsAppUrl("Olá", "")).toBeNull();
  });

  it("monta o link do WhatsApp com DDI e mensagem", () => {
    expect(getWhatsAppUrl("Quero criar meu site", "48 99999-0000")).toBe(
      "https://wa.me/48999990000?text=Quero%20criar%20meu%20site",
    );
  });
});

describe("json-ld", () => {
  it("expõe Website, Person e catálogo de serviços", async () => {
    const { buildFaqJsonLd, buildJsonLd } = await import("@/lib/json-ld");
    const graph = buildJsonLd();
    const types = graph["@graph"].map((node) => node["@type"]);

    expect(types).toEqual(
      expect.arrayContaining([
        "WebSite",
        "Person",
        "ProfessionalService",
      ]),
    );

    const faq = buildFaqJsonLd();
    expect(faq["@type"]).toBe("FAQPage");
    expect(faq.mainEntity.length).toBeGreaterThan(0);
  });
});
