# marcarcherciscar.com

Portfolio personal de **Marc Archer Ciscar** — Tech Lead / Full Stack Engineer en
Valencia. Estética brutalist terminal, bilingüe (ES/EN), estático y rápido.

> _la tecnología, al servicio del problema._

[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%20%2F%20100%20%2F%20100%20%2F%20100-6dff8e?style=flat-square)](#lighthouse)

---

## Stack

- **[Astro 5](https://astro.build)** · output estático, cero framework en cliente
- **TypeScript** para los datos / tipado de las secciones
- **Vanilla JS** islands (`<script is:inline>`) para clock, typewriter y terminal
- **JetBrains Mono Variable** (latin + latin-ext) self-hosted, woff2 preloaded
- **lightningcss** para minificado, **@astrojs/sitemap** para i18n sitemap
- **sharp** para generar PNGs (OG image, apple-touch-icon) desde SVG

Sin React, sin Babel-en-navegador, sin trackers, sin cookies.

---

## Lighthouse

Ejecutado contra el build estático servido en local (`http-server dist`):

|              | Performance | Accessibility | Best Practices | SEO |
| :----------- | :---------: | :-----------: | :------------: | :-: |
| `/` desktop  |     100     |      100      |      100       | 100 |
| `/` mobile   |     100     |      100      |      100       | 100 |
| `/en/` desktop |   100     |      100      |      100       | 100 |
| `/en/` mobile  |   100     |      100      |      100       | 100 |

Cómo reproducir:

```bash
npm run build
npx http-server dist -p 4321 -c-1 &
npx lighthouse http://localhost:4321/      --preset=desktop --view
npx lighthouse http://localhost:4321/      --view              # mobile
npx lighthouse http://localhost:4321/en/   --preset=desktop --view
```

---

## SEO

- Rutas bilingües: `/` (ES, canonical) y `/en/` (EN)
- `<link rel="alternate" hreflang>` cruzados + `x-default` apuntando a ES
- `<link rel="canonical">` por idioma
- Meta description, Open Graph, Twitter Card, theme-color
- JSON-LD `Person` (con `sameAs` a LinkedIn/GitHub) + `WebSite`
- Sitemap multilingüe automático (`/sitemap-index.xml`)
- `robots.txt` permisivo apuntando al sitemap
- Manifest PWA, favicon SVG (light + maskable), apple-touch-icon

---

## Accesibilidad

- `lang` por página (`es-ES` / `en-US`)
- Skip-link al contenido principal
- Contrastes AA (WCAG 2.2)
- `:focus-visible` con outline visible
- Tap targets ≥ 44px en móvil
- `prefers-reduced-motion`: desactiva typewriter, cursor parpadeante y atenúa CRT
- ARIA labels en navegación y grupos de botones
- Input de terminal con `<label>` oculto, atributos `autocomplete=off` correctos

---

## Estructura

```
.
├── astro.config.mjs           # site, sitemap i18n, lightningcss
├── tsconfig.json
├── public/                    # favicons, og.png, manifest, robots
├── scripts/
│   └── generate-assets.mjs    # sharp: og.svg → og.png, favicon → apple-touch-icon
└── src/
    ├── pages/
    │   ├── index.astro        # /     (ES)
    │   └── en/index.astro     # /en/  (EN)
    ├── layouts/
    │   └── Base.astro         # html shell + SEO + font preload
    ├── components/
    │   ├── SEO.astro          # meta, OG, hreflang, JSON-LD
    │   ├── TopBar.astro       # nav + clock (vanilla JS)
    │   ├── Hero.astro         # name, principles typewriter, neofetch, log
    │   ├── About.astro
    │   ├── Work.astro
    │   ├── Stack.astro
    │   ├── Contact.astro
    │   ├── Terminal.astro     # interactive shell with history + tab-complete
    │   └── SiteFooter.astro
    ├── data/
    │   ├── copy.ts            # bilingual content (typed)
    │   └── shark.ts           # ASCII art
    └── styles/
        └── global.css         # phosphor theme, self-hosted JetBrains Mono Var
```

---

## Comandos

```bash
npm install          # instalar deps
npm run dev          # servidor de desarrollo (localhost:4321)
npm run build        # build estático → dist/
npm run preview      # servir dist/ localmente
node scripts/generate-assets.mjs   # regenerar og.png y apple-touch-icon.png
```

Despliegue: cualquier static host (Cloudflare Pages, Netlify, Vercel, GitHub
Pages). No requiere runtime de Node.

---

## Contenido

Todo el copy ES/EN vive en `src/data/copy.ts` con tipos estrictos
(`Copy`, `Job`, `StackGroup`, ...). Para añadir un trabajo nuevo, editar el
array `work.jobs` en cada idioma. El resto se infiere.

La terminal (`src/components/Terminal.astro`) acepta comandos `help`, `whoami`,
`work`, `stack`, `contact`, `social`, `now`, `cv`, `date`, `echo`, `clear`,
`exit`. Navegación con flechas ↑/↓ por historial y `Tab` para autocompletar.

---

## Contacto

- LinkedIn — [marc-archer-ciscar](https://www.linkedin.com/in/marc-archer-ciscar/)
- GitHub — [@MarcArcherCiscar](https://github.com/MarcArcherCiscar)
- Email — marcarcher1999@gmail.com

---

construido a mano · sin trackers · sin cookies · valencia · 2026
