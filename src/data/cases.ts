import type { Lang } from "./copy.ts";

export type Decision = {
  tech: string;
  reason: string;
};

export type CaseSection = {
  heading: string;
  body: string[];
};

export type Case = {
  slug: "b2com" | "farmavazquez";
  meta: { title: string; description: string };
  back: string;
  metaLine: string;
  product: string;
  pitch: string;
  sections: CaseSection[];
  decisionsHeading: string;
  decisions: Decision[];
  decisionGroups?: { heading: string; decisions: Decision[] }[];
};

const ES_BACK = "← volver a trabajo";
const EN_BACK = "← back to work";

export const CASES: Record<Lang, Record<Case["slug"], Case>> = {
  es: {
    b2com: {
      slug: "b2com",
      meta: {
        title: "Shara — Caso de estudio · Marc Archer Ciscar",
        description:
          "Cinco años construyendo Shara, el SaaS de telefonía de B2com. NestJS + Vue + MongoDB. Plataforma única de operativa y canal oficial para los distribuidores del grupo B2GROUP.",
      },
      back: ES_BACK,
      metaLine: "B2com · 2021 — 2026 · Full Stack Engineer → Tech Lead",
      product: "Shara",
      pitch:
        "Cinco años construyendo el SaaS de telefonía que B2com usa como única fuente de verdad de su operativa y como canal oficial de los distribuidores del grupo B2GROUP. Asumí el rol de Tech Lead del producto en el último año.",
      decisionsHeading: "Decisiones de stack",
      decisions: [
        {
          tech: "NestJS",
          reason:
            "El equipo ya dominaba JavaScript. NestJS aporta estructura modular sobre Node y permite que el código escale sin convertirse en spaghetti. Elegir un lenguaje que el equipo aún no conocía habría comprometido la velocidad de iteración durante meses. La elección priorizó velocidad real del equipo sobre el lenguaje teóricamente óptimo.",
        },
        {
          tech: "Vue (2 → 3)",
          reason:
            "Por la misma razón que NestJS: continuidad. El equipo ya tenía patrones Vue interiorizados de productos previos del catálogo de B2com. Migramos progresivamente de Vue 2 a Vue 3 sin parar el negocio.",
        },
        {
          tech: "MongoDB",
          reason:
            "Cada operadora y cada distribuidor traen particularidades en su modelo de datos: planes distintos, tarifas distintas, productos distintos. Un schema rígido habría sido fricción permanente. Mongo nos dio la flexibilidad de iterar el modelo sin migraciones lentas, manteniendo la consistencia con validación estricta en la capa de aplicación.",
        },
      ],
      sections: [
        {
          heading: "Contexto",
          body: [
            "B2com es la rama SaaS del grupo B2GROUP, especializada en infraestructura de telefonía para operadoras y empresas que dependen de llamadas para gestionar sus servicios. Shara nació como respuesta a una necesidad concreta: consolidar la operativa interna en una sola plataforma y, al mismo tiempo, ofrecer un canal de autoservicio coherente para los distribuidores externos del grupo.",
            "Una sola fuente de verdad puertas adentro y una experiencia consistente puertas afuera.",
          ],
        },
        {
          heading: "Alcance",
          body: [
            "Plataforma única para gestión de operativa interna: clientes, llamadas, servicios, facturación y reporting.",
            "Canal externo de autoservicio para distribuidores B2GROUP: contratación, soporte y administración de sus propias carteras.",
            "En paralelo, las webs de cliente, las herramientas internas, las apps móviles y los proyectos de IA — todo sobre el mismo stack, lo que mantuvo el coste cognitivo del equipo bajo durante cinco años.",
          ],
        },
        {
          heading: "Estado",
          body: [
            "En producción. La usan operadoras y empresas con infraestructura de llamadas para gestionar sus servicios. Sigue evolucionando.",
          ],
        },
        {
          heading: "Lo que me llevo",
          body: [
            "La decisión más importante no fue técnica, fue de equipo. Rust o Go en backend habrían sido más eficientes computacionalmente, pero el coste real del proyecto no era el de CPU — era el de incorporación de personas. Elegir el stack que el equipo ya dominaba multiplicó por dos la velocidad real de iteración durante cinco años.",
            "La elección correcta de herramienta no es la que es mejor en abstracto, sino la que mejor resuelve el contexto. Esa frase no es marketing: es lo que hizo que Shara saliera adelante.",
          ],
        },
      ],
    },
    farmavazquez: {
      slug: "farmavazquez",
      meta: {
        title: "Plataforma + e-commerce — Caso de estudio · Marc Archer Ciscar",
        description:
          "Liderando la transformación técnica de Farmavázquez. Una nueva plataforma de operativa en Rust y un nuevo e-commerce de farmacia en Astro + Svelte, con SEO y UX como prioridad.",
      },
      back: ES_BACK,
      metaLine: "Farmavázquez · 2026 → · Tech Lead / Full Stack Engineer",
      product: "Plataforma + storefront",
      pitch:
        "Liderando el equipo técnico y construyendo dos cosas a la vez: la nueva plataforma única que va a unificar toda la operativa interna del grupo, y el nuevo e-commerce de farmacia y parafarmacia.",
      sections: [
        {
          heading: "Contexto",
          body: [
            "Farmavázquez es un grupo del sector farmacia y parafarmacia. El plan técnico actual es doble: consolidar toda la operativa interna sobre una sola plataforma — catálogo, pedidos, stock, clientes — y a la vez construir un storefront a la altura del público que llega buscando productos de farmacia online, donde el tráfico orgánico es literalmente el negocio.",
            "Mi rol como Tech Lead cubre las dos piezas: liderar al equipo técnico y tomar las decisiones de arquitectura que van a sostener años de crecimiento.",
          ],
        },
        {
          heading: "Alcance (en curso)",
          body: [
            "Plataforma de operativa: arquitectura definida y primeros módulos en desarrollo, con integración progresiva con los sistemas existentes.",
            "E-commerce nuevo: web optimizada para tráfico orgánico, con la stack puesta donde más rinde — Astro para SSR estático, Svelte para las islas interactivas como carrito, búsqueda y filtros.",
            "En paralelo, lidero el equipo técnico — la parte de gente, no solo de código.",
          ],
        },
        {
          heading: "Estado",
          body: [
            "En curso. Es lo que estoy haciendo ahora.",
          ],
        },
      ],
      decisionsHeading: "Decisiones de stack",
      decisions: [],
      decisionGroups: [
        {
          heading: "Backend de operativa — plataforma única",
          decisions: [
            {
              tech: "Rust",
              reason:
                "El contexto aquí es muy distinto al de B2com. Aquí lo que importa es que el sistema aguante años de operativa creciente sin reescrituras, manejando concurrencia y picos sin sudar. Rust nos da garantías de memoria, performance bruto y un perfil de \"se escribe una vez y se queda corriendo\" que justifica el coste inicial de aprender el lenguaje. La decisión asume que el equipo va a invertir en Rust como activo a largo plazo, no como spike puntual.",
            },
          ],
        },
        {
          heading: "Storefront — frontend del e-commerce",
          decisions: [
            {
              tech: "Astro",
              reason:
                "Para un e-commerce de farmacia online, el SEO no es opcional: el tráfico orgánico ES el negocio. Astro nos da SSR estático nativo, hidratación selectiva por isla y un techo de rendimiento que un SPA pesado no alcanza. El SEO completo sale por defecto, no como remiendo posterior.",
            },
            {
              tech: "Svelte",
              reason:
                "Para las islas interactivas (carrito, filtros, buscador). Bundle pequeño, hidratación rápida, sintaxis directa sin el overhead de un framework grande. Donde Astro pone los cimientos, Svelte hace que la parte interactiva pese poco.",
            },
          ],
        },
      ],
    },
  },

  en: {
    b2com: {
      slug: "b2com",
      meta: {
        title: "Shara — Case study · Marc Archer Ciscar",
        description:
          "Five years building Shara, B2com's telephony SaaS. NestJS + Vue + MongoDB. Single operations platform and the official channel for B2GROUP distributors.",
      },
      back: EN_BACK,
      metaLine: "B2com · 2021 — 2026 · Full Stack Engineer → Tech Lead",
      product: "Shara",
      pitch:
        "Five years building the telephony SaaS that B2com uses as the single source of truth for its operations and as the official channel for B2GROUP distributors. I took the Tech Lead position for the product in the last year.",
      sections: [
        {
          heading: "Context",
          body: [
            "B2com is the SaaS arm of the B2GROUP group, focused on telephony infrastructure for carriers and any business that runs on call infrastructure to manage their services. Shara was born to consolidate internal operations onto a single platform and, at the same time, to offer a coherent self-service channel for the group's external distributors.",
            "A single source of truth on the inside and a consistent experience on the outside.",
          ],
        },
        {
          heading: "Scope",
          body: [
            "Single platform for internal operations management: customers, calls, services, billing and reporting.",
            "External self-service channel for B2GROUP distributors: onboarding, support and administration of their own portfolios.",
            "In parallel, the client-facing websites, the internal tools, the mobile apps and the AI projects — all on the same stack, which kept the team's cognitive cost low over five years.",
          ],
        },
        {
          heading: "Status",
          body: [
            "In production. Used by carriers and businesses that run on call infrastructure. Still evolving.",
          ],
        },
        {
          heading: "What I take from it",
          body: [
            "The most important decision wasn't technical, it was about the team. Rust or Go on the backend would have been more efficient computationally, but the real cost of the project wasn't CPU — it was onboarding people. Choosing the stack the team already mastered doubled the actual iteration speed for five years.",
            "The right tool isn't the one that's best in the abstract, it's the one that best fits the context. That's not marketing — it's what made Shara ship.",
          ],
        },
      ],
      decisionsHeading: "Stack decisions",
      decisions: [
        {
          tech: "NestJS",
          reason:
            "The team already mastered JavaScript. NestJS brings modular structure on top of Node and lets the code scale without turning into spaghetti. Picking a language the team didn't know would have compromised iteration speed for months. The decision prioritized real team velocity over the theoretically optimal language.",
        },
        {
          tech: "Vue (2 → 3)",
          reason:
            "Same reason as NestJS: continuity. The team already had Vue patterns internalized from previous B2com products. We migrated progressively from Vue 2 to Vue 3 without stopping the business.",
        },
        {
          tech: "MongoDB",
          reason:
            "Each carrier and each distributor brings particularities in their data model: different plans, different rates, different products. A rigid schema would have been permanent friction. Mongo gave us the flexibility to iterate the model without slow migrations, while keeping consistency through strict validation at the application layer.",
        },
      ],
    },
    farmavazquez: {
      slug: "farmavazquez",
      meta: {
        title: "Platform + e-commerce — Case study · Marc Archer Ciscar",
        description:
          "Leading Farmavázquez's technical transformation. A new operations platform in Rust and a new pharmacy e-commerce in Astro + Svelte, with SEO and UX as the priority.",
      },
      back: EN_BACK,
      metaLine: "Farmavázquez · 2026 → · Tech Lead / Full Stack Engineer",
      product: "Platform + storefront",
      pitch:
        "Leading the technical team and building two things at once: the new single platform that will unify the group's internal operations, and the new pharmacy and parapharmacy e-commerce.",
      sections: [
        {
          heading: "Context",
          body: [
            "Farmavázquez is a group in the pharmacy and parapharmacy sector. The current technical plan is twofold: consolidate the whole internal operation onto a single platform — catalogue, orders, stock, customers — and at the same time build a storefront worthy of the audience that arrives looking for pharmacy products online, where organic traffic is literally the business.",
            "My role as Tech Lead covers both pieces: leading the technical team and making the architecture decisions that will sustain years of growth.",
          ],
        },
        {
          heading: "Scope (ongoing)",
          body: [
            "Operations platform: architecture defined and first modules under development, with progressive integration into existing systems.",
            "New e-commerce: web optimized for organic traffic, with the stack placed where it pays off most — Astro for static SSR, Svelte for interactive islands like cart, search and filters.",
            "In parallel, I lead the technical team — the people part, not only the code.",
          ],
        },
        {
          heading: "Status",
          body: [
            "Ongoing. This is what I'm doing right now.",
          ],
        },
      ],
      decisionsHeading: "Stack decisions",
      decisions: [],
      decisionGroups: [
        {
          heading: "Operations backend — single platform",
          decisions: [
            {
              tech: "Rust",
              reason:
                "The context here is very different from B2com. What matters here is that the system holds up under years of growing operations without rewrites, handling concurrency and spikes without breaking a sweat. Rust gives us memory guarantees, raw performance and a \"write once, keep running\" profile that justifies the upfront cost of learning the language. The decision assumes the team will invest in Rust as a long-term asset, not as a one-off spike.",
            },
          ],
        },
        {
          heading: "Storefront — e-commerce frontend",
          decisions: [
            {
              tech: "Astro",
              reason:
                "For a pharmacy e-commerce, SEO is not optional: organic traffic IS the business. Astro gives us native static SSR, per-island selective hydration and a performance ceiling a heavy SPA can't reach. Full SEO comes by default, not as an afterthought.",
            },
            {
              tech: "Svelte",
              reason:
                "For the interactive islands (cart, filters, search). Small bundle, fast hydration, direct syntax without the overhead of a large framework. Where Astro lays the foundation, Svelte keeps the interactive part light.",
            },
          ],
        },
      ],
    },
  },
};
