# Francine Portfolio

Site institucional e portfólio da **Francine Soares — Software Studio**, construído com Next.js 16, React 19, TypeScript e Tailwind CSS v4.

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4, Framer Motion
- **Componentes:** shadcn/ui (Base UI)
- **Idiomas:** PT-BR e EN (i18n client-side com tipagem forte)

## Estrutura do projeto

```text
src/
├── app/              # Rotas e metadata (Server Components)
├── components/       # UI reutilizável (layout, hero, primitives)
├── sections/         # Composição de páginas por domínio
├── data/             # IDs e estrutura estática (sem copy)
├── i18n/             # Dicionários tipados (pt/en)
├── config/           # site, navegação
├── hooks/            # Motion e animações
└── lib/              # SEO, WhatsApp, utilitários
```

### Convenções

- **Páginas finas:** `src/app/*/page.tsx` exportam metadata e delegam para `sections/`
- **Copy:** sempre em `src/i18n/locales/`, nunca hardcoded em componentes
- **Data:** IDs em `src/data/`, textos referenciados via `Dictionary` tipado
- **Estilo:** tokens em `globals.css`, unidades em `px` (não `rem`)

## Scripts

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run start    # servidor de produção
npm run lint     # ESLint
npm run test     # testes de integração (Vitest)
```

## Variáveis de ambiente

Crie um `.env.local` na raiz:

```env
NEXT_PUBLIC_SITE_URL=https://seudominio.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/seu-usuario
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/seu-perfil
NEXT_PUBLIC_EMAIL=seu@email.com
NEXT_PUBLIC_WHATSAPP=5548999999999
```

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `NEXT_PUBLIC_SITE_URL` | Recomendada | URL canônica para SEO, sitemap e Open Graph |
| `NEXT_PUBLIC_WHATSAPP` | Opcional | Número com DDI (fallback no código) |
| `NEXT_PUBLIC_EMAIL` | Opcional | E-mail de contato |
| `NEXT_PUBLIC_GITHUB_URL` | Opcional | Perfil GitHub |
| `NEXT_PUBLIC_LINKEDIN_URL` | Opcional | Perfil LinkedIn |

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page com seções âncora |
| `/servicos` | Pacotes de serviço |
| `/projetos` | Domínios de atuação |
| `/sobre` | Página sobre |
| `/contato` | Canais de contato |
| `/stack` | Tech stack completa |

## SEO

- Metadata com Open Graph e Twitter Card via `src/lib/seo.ts`
- `sitemap.xml` e `robots.txt` gerados automaticamente
- Ícones em `src/app/icon.png` e `apple-icon.png`

## Desenvolvimento em rede local

Para testar no celular via IP local, configure em `next.config.ts`:

```ts
allowedDevOrigins: ["SEU_IP_LOCAL"],
```

## Testes

Os testes em `src/lib/site.integration.test.ts` cobrem:

- URLs do WhatsApp
- Helper de metadata SEO
- Consistência de navegação e traduções PT/EN

```bash
npm run test
```

## CI (GitHub Actions)

O workflow em `.github/workflows/ci.yml` roda automaticamente em **push** para `main`/`master` e em **pull requests**:

1. `npm ci`
2. `npm run lint`
3. `npm run test`
4. `npm run build`

Para o build em CI, `NEXT_PUBLIC_SITE_URL` usa um valor de exemplo. Em produção, configure o domínio real nas variáveis do host (ex.: Vercel).

## Deploy

Compatível com Vercel ou qualquer host Node.js. Antes do deploy:

1. Defina `NEXT_PUBLIC_SITE_URL` com o domínio final
2. Execute `npm run build` localmente para validar
3. Execute `npm run test`
