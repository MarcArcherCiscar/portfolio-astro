export type Lang = "es" | "en";

export type Job = {
  period: string;
  company: string;
  role: string;
  industry: string;
  tags: string[];
  summary: string;
};

export type StackGroup = { label: string; items: string[] };

export type ContactLine = [label: string, value: string, href: string];

export type Copy = {
  meta: { title: string; description: string };
  nav: { about: string; work: string; stack: string; contact: string };
  status: { current: string; location: string };
  hero: {
    role: string;
    tagline_lines: [string, string, string];
    principles: string[];
    cta_primary: string;
    cta_secondary: string;
  };
  about: {
    kicker: string;
    title: string;
    body: string[];
    stats: [string, string][];
  };
  work: { kicker: string; title: string; jobs: Job[] };
  stack: { kicker: string; title: string; note: string; groups: StackGroup[] };
  contact: {
    kicker: string;
    title: string;
    body: string[];
    lines: ContactLine[];
    prompt: string;
    note: string;
  };
  terminal: {
    boot: { kind: "out" | "dim" | "acc" | "err"; text: string }[];
    helpHeader: string;
    helpRows: [string, string][];
    notFound: (cmd: string) => string;
    whoami: string[];
    trajectoryHead: string;
    stackHead: string;
    contactHead: string;
    now: string[];
    cv: string;
    exit: string;
  };
  foot: { built: string; year: string };
  langSwitch: { es: string; en: string };
  sysSpecs: [label: string, value: string][];
  log: [time: string, msg: string][];
};

const SHARED_LINES: ContactLine[] = [
  ["linkedin", "marc-archer-ciscar", "https://www.linkedin.com/in/marc-archer-ciscar/"],
  ["github", "MarcArcherCiscar", "https://github.com/MarcArcherCiscar"],
  ["email", "marcarcher1999@gmail.com", "mailto:marcarcher1999@gmail.com"],
];

export const COPY: Record<Lang, Copy> = {
  es: {
    meta: {
      title: "Marc Archer Ciscar — Full Stack Engineer · Valencia",
      description:
        "Marc Archer Ciscar — Tech Lead y Full Stack Engineer en Valencia. 7 años construyendo e-commerce, SaaS, software a medida y herramientas internas. Astro, Svelte, Rust, TypeScript, Vue, Flutter.",
    },
    nav: { about: "sobre", work: "trabajo", stack: "stack", contact: "contacto" },
    status: { current: "@ farmavázquez", location: "valencia, españa" },
    hero: {
      role: "full_stack_engineer",
      tagline_lines: [
        "La tecnología, al servicio del problema.",
        "No la herramienta que más me gusta —",
        "la que mejor resuelve lo que hay que resolver.",
      ],
      principles: [
        "El contexto manda sobre la opinión",
        "Código que se borra > código que se escribe",
        "Lo simple escala. Lo listo no.",
        "Un problema bien planteado está medio resuelto",
        "Elegir la herramienta correcta no es una preferencia, es un criterio",
      ],
      cta_primary: "leer_más",
      cta_secondary: "contactar",
    },
    about: {
      kicker: "// sobre",
      title: "criterio sobre preferencia.",
      body: [
        "Llevo años trabajando en entornos muy diversos — ERP, software a medida, telco/SaaS y e-commerce en una farmacéutica. Esta variedad me ha aportado el criterio para saber discernir entre una solución sólida y una que solo lo aparenta.",
        "Cada proyecto tiene su propio contexto y sus propias necesidades. Mi aproximación siempre pasa por entender ese contexto antes de plantear cualquier solución.",
        "Actualmente, mi puesto como Tech Lead en Farmavázquez se basa en aplicar esta misma filosofía en el día a día.",
      ],
      stats: [
        ["7", "años de experiencia"],
        ["4", "industrias"],
        ["1", "filosofía"],
      ],
    },
    work: {
      kicker: "// trayectoria",
      title: "donde he estado.",
      jobs: [
        {
          period: "2026 →",
          company: "Farmavázquez",
          role: "Tech Lead / Full Stack Engineer",
          industry: "farmacia · parafarmacia",
          tags: ["astro", "svelte", "vue 3", "flutter", "rust"],
          summary:
            "Lidero el equipo técnico mientras construimos el e-commerce de farmacia y parafarmacia. Además, estoy diseñando Dafne: la plataforma única que va a unificar lo que hoy vive disperso entre varios sistemas — una sola fuente de verdad para toda la operativa.",
        },
        {
          period: "2021 — 2026",
          company: "B2com",
          role: "Tech Lead / Full Stack Engineer",
          industry: "telco · saas",
          tags: ["vue 2/3", "symfony", "nestjs", "node", "rust", "flutter", "mongo", "mysql", "ia"],
          summary:
            "Cinco años en el corazón del SaaS de telefonía que utilizan operadoras y empresas con infraestructura de llamadas para gestionar sus servicios. Concebí y lideré Shara: la nueva plataforma de B2com, pensada como única fuente de verdad de toda la operativa y, a la vez, como canal oficial de los distribuidores del grupo B2GROUP. En paralelo: las webs de cliente, las herramientas internas, las apps móviles y los proyectos de IA.",
        },
        {
          period: "2020 — 2021",
          company: "NEURATUM",
          role: "Web & App Developer",
          industry: "software a medida",
          tags: ["ionic", "laravel", "yii2", "php", "mysql"],
          summary:
            "Apps híbridas y backends para clientes B2B. El año en el que aprendí a trabajar con tickets reales.",
        },
        {
          period: "2019 — 2020",
          company: "d4bsolutions",
          role: "Programador Técnico",
          industry: "consultoría ERP",
          tags: ["navision", "microsoft dynamics"],
          summary:
            "Primer trabajo. Navision en producción y el shock saludable de ver código empresarial de verdad.",
        },
      ],
    },
    stack: {
      kicker: "// stack",
      title: "lo que uso.",
      note: "// Orden alfabético, no de preferencia. La preferencia depende del problema.",
      groups: [
        { label: "lenguajes", items: ["dart", "javascript", "php", "rust", "typescript"] },
        { label: "frontend", items: ["astro", "svelte", "vue 2", "vue 3"] },
        { label: "móvil", items: ["flutter", "ionic"] },
        { label: "backend", items: ["laravel", "nestjs", "node.js", "symfony", "yii2"] },
        { label: "datos", items: ["mongodb", "mysql"] },
        { label: "otros", items: ["docker", "git", "linux", "llms / ia", "navision"] },
      ],
    },
    contact: {
      kicker: "// ping",
      title: "¿hablamos?",
      body: [
        "Si tienes un problema interesante — técnico, ambiguo, mal definido — quiero escucharlo.",
      ],
      lines: SHARED_LINES,
      prompt: "prueba escribir 'help'",
      note: "↑ o usa la terminal de aquí al lado.",
    },
    terminal: {
      boot: [
        { kind: "out", text: "marcOS v7.0.1 booting…" },
        { kind: "dim", text: "[ok] criterio.service" },
        { kind: "dim", text: "[ok] curiosidad.service" },
        { kind: "dim", text: "[ok] cafetera.service" },
        { kind: "out", text: "" },
        { kind: "acc", text: "› bienvenido. escribe 'help' para ver comandos." },
      ],
      helpHeader: "comandos disponibles:",
      helpRows: [
        ["help", "muestra esta lista"],
        ["whoami", "sobre mí"],
        ["work", "experiencia"],
        ["stack", "tecnologías"],
        ["contact", "vías de contacto"],
        ["cv", "descargar CV (próximamente)"],
        ["social", "redes"],
        ["now", "en qué estoy ahora"],
        ["date", "fecha del sistema"],
        ["echo <txt>", "repite el texto"],
        ["clear", "limpia la pantalla"],
        ["exit", "cerrar sesión (it's a joke)"],
      ],
      notFound: (c) => `comando no encontrado: ${c}. prueba 'help'.`,
      whoami: [
        "Marc Archer Ciscar — Full Stack Engineer",
        "Valencia, España. 7 años de experiencia. 4 industrias.",
        "Filosofía: la tecnología, al servicio del problema.",
      ],
      trajectoryHead: "trayectoria:",
      stackHead: "stack:",
      contactHead: "contacto:",
      now: [
        "[2026] Tech Lead en Farmavázquez. E-commerce, equipo y diseñando Dafne — la plataforma única sobre la que va a vivir toda la operativa.",
        "Aprendiendo: Rust async, Postgres internals, devops menos doloroso.",
      ],
      cv: "// El CV estará disponible pronto. Mientras tanto: LinkedIn.",
      exit: "No puedes escapar.",
    },
    foot: {
      built: "Construido a mano · sin trackers · sin cookies",
      year: "valencia · 2026",
    },
    langSwitch: { es: "ES", en: "EN" },
    sysSpecs: [
      ["name", "marc archer"],
      ["role", "full stack"],
      ["level", "tech lead"],
      ["loc", "valencia, es"],
      ["lang", "es · en · ts"],
      ["uptime", "7y in prod"],
      ["focus", "e-commerce"],
      ["shell", "zsh / nvim"],
      ["status", "online"],
    ],
    log: [
      ["14:32", "git push origin dafne/auth-flow"],
      ["13:47", "deploy: shop.farmavazquez prod ✓"],
      ["12:18", "review pr #234 — merged"],
      ["11:05", "spike: rust → wasm pipeline"],
      ["09:30", "coffee.service: started"],
    ],
  },
  en: {
    meta: {
      title: "Marc Archer Ciscar — Full Stack Engineer · Valencia",
      description:
        "Marc Archer Ciscar — Tech Lead and Full Stack Engineer in Valencia, Spain. 7 years shipping e-commerce, SaaS, custom software and internal tools. Astro, Svelte, Rust, TypeScript, Vue, Flutter.",
    },
    nav: { about: "about", work: "work", stack: "stack", contact: "contact" },
    status: { current: "@ farmavázquez", location: "valencia, spain" },
    hero: {
      role: "full_stack_engineer",
      tagline_lines: [
        "Technology in service of the problem.",
        "Not the tool I like most —",
        "the one that best solves what needs solving.",
      ],
      principles: [
        "Context outranks opinion",
        "Code that gets deleted > code that gets written",
        "Simple scales. Clever doesn't.",
        "A well-framed problem is half-solved",
        "Picking the right tool isn't a preference, it's a judgment",
      ],
      cta_primary: "read_more",
      cta_secondary: "get_in_touch",
    },
    about: {
      kicker: "// about",
      title: "judgment over preference.",
      body: [
        "I've spent years working in very different environments — ERP, custom software, telco/SaaS and pharmacy e-commerce. This variety has given me the judgment to tell a solid solution apart from one that only looks like one.",
        "Every project has its own context and its own needs. My approach always starts by understanding that context before proposing any solution.",
        "Currently, my role as Tech Lead at Farmavázquez is built on applying that same philosophy day to day.",
      ],
      stats: [
        ["7", "years of experience"],
        ["4", "industries"],
        ["1", "philosophy"],
      ],
    },
    work: {
      kicker: "// trajectory",
      title: "where I've been.",
      jobs: [
        {
          period: "2026 →",
          company: "Farmavázquez",
          role: "Tech Lead / Full Stack Engineer",
          industry: "pharmacy · parapharmacy",
          tags: ["astro", "svelte", "vue 3", "flutter", "rust"],
          summary:
            "I lead the technical team while we build the pharmacy and parapharmacy e-commerce. I'm also designing Dafne: the single platform that will consolidate what today lives scattered across several systems — a single source of truth for the entire operation.",
        },
        {
          period: "2021 — 2026",
          company: "B2com",
          role: "Tech Lead / Full Stack Engineer",
          industry: "telco · saas",
          tags: ["vue 2/3", "symfony", "nestjs", "node", "rust", "flutter", "mongo", "mysql", "ai"],
          summary:
            "Five years at the heart of the telephony SaaS used by carriers and any business that runs on call infrastructure to manage their services. I conceived and led Shara: B2com's new platform, designed as the single source of truth for the entire operation and, at the same time, the official channel for B2GROUP distributors. In parallel: the client-facing websites, the internal tools, the mobile apps and the AI projects.",
        },
        {
          period: "2020 — 2021",
          company: "NEURATUM",
          role: "Web & App Developer",
          industry: "custom software",
          tags: ["ionic", "laravel", "yii2", "php", "mysql"],
          summary:
            "Hybrid apps and backends for B2B clients. The year I learned to work with real tickets.",
        },
        {
          period: "2019 — 2020",
          company: "d4bsolutions",
          role: "Technical Programmer",
          industry: "ERP consulting",
          tags: ["navision", "microsoft dynamics"],
          summary:
            "First job. Navision in production and the healthy shock of seeing real enterprise code.",
        },
      ],
    },
    stack: {
      kicker: "// stack",
      title: "what I use.",
      note: "// Alphabetical, not by preference. Preference depends on the problem.",
      groups: [
        { label: "languages", items: ["dart", "javascript", "php", "rust", "typescript"] },
        { label: "frontend", items: ["astro", "svelte", "vue 2", "vue 3"] },
        { label: "mobile", items: ["flutter", "ionic"] },
        { label: "backend", items: ["laravel", "nestjs", "node.js", "symfony", "yii2"] },
        { label: "data", items: ["mongodb", "mysql"] },
        { label: "other", items: ["docker", "git", "linux", "llms / ai", "navision"] },
      ],
    },
    contact: {
      kicker: "// ping",
      title: "let's talk.",
      body: [
        "If you have an interesting problem — technical, ambiguous, ill-defined — I want to hear it.",
      ],
      lines: SHARED_LINES,
      prompt: "try typing 'help'",
      note: "↑ or use the terminal next to this.",
    },
    terminal: {
      boot: [
        { kind: "out", text: "marcOS v7.0.1 booting…" },
        { kind: "dim", text: "[ok] judgment.service" },
        { kind: "dim", text: "[ok] curiosity.service" },
        { kind: "dim", text: "[ok] coffeemaker.service" },
        { kind: "out", text: "" },
        { kind: "acc", text: "› welcome. type 'help' for available commands." },
      ],
      helpHeader: "available commands:",
      helpRows: [
        ["help", "show this list"],
        ["whoami", "about me"],
        ["work", "work history"],
        ["stack", "technologies"],
        ["contact", "ways to reach me"],
        ["cv", "download CV (soon)"],
        ["social", "social links"],
        ["now", "what I'm up to"],
        ["date", "system date"],
        ["echo <txt>", "echo text"],
        ["clear", "clear screen"],
        ["exit", "log out (it's a joke)"],
      ],
      notFound: (c) => `command not found: ${c}. try 'help'.`,
      whoami: [
        "Marc Archer Ciscar — Full Stack Engineer",
        "Valencia, Spain. 7 years experience. 4 industries.",
        "Philosophy: technology in service of the problem.",
      ],
      trajectoryHead: "trajectory:",
      stackHead: "stack:",
      contactHead: "contact:",
      now: [
        "[2026] Tech Lead at Farmavázquez. E-commerce, team and designing Dafne — the single platform the whole operation will run on.",
        "Learning: Rust async, Postgres internals, less painful devops.",
      ],
      cv: "// CV coming soon. For now: LinkedIn.",
      exit: "You can't escape.",
    },
    foot: {
      built: "Hand-built · no trackers · no cookies",
      year: "valencia · 2026",
    },
    langSwitch: { es: "ES", en: "EN" },
    sysSpecs: [
      ["name", "marc archer"],
      ["role", "full stack"],
      ["level", "tech lead"],
      ["loc", "valencia, es"],
      ["lang", "es · en · ts"],
      ["uptime", "7y in prod"],
      ["focus", "e-commerce"],
      ["shell", "zsh / nvim"],
      ["status", "online"],
    ],
    log: [
      ["14:32", "git push origin dafne/auth-flow"],
      ["13:47", "deploy: shop.farmavazquez prod ✓"],
      ["12:18", "review pr #234 — merged"],
      ["11:05", "spike: rust → wasm pipeline"],
      ["09:30", "coffee.service: started"],
    ],
  },
};
