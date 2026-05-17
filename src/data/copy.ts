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

export type StackChoice = {
  when: string;
  picks: string;
  why: string;
};

export type ContactLine = [label: string, value: string, href: string];

export type Copy = {
  meta: { title: string; description: string };
  nav: { about: string; work: string; stack: string; contact: string };
  status: { current: string; location: string };
  hero: {
    level: string;
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
  stack: {
    kicker: string;
    title: string;
    note: string;
    choices: StackChoice[];
    breadthLabel: string;
    breadth: string[];
  };
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
      title: "Marc Archer Ciscar — Tech Lead & Full Stack Engineer · Valencia",
      description:
        "Marc Archer Ciscar — Tech Lead y Full Stack Engineer en Valencia. 7 años construyendo e-commerce, SaaS, software a medida y herramientas internas. Astro, Svelte, Rust, TypeScript, Vue, Flutter.",
    },
    nav: { about: "sobre", work: "trabajo", stack: "stack", contact: "contacto" },
    status: { current: "@ farmavázquez", location: "valencia, españa" },
    hero: {
      level: "tech_lead",
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
            "Como Tech Lead, llevo la dirección técnica del nuevo e-commerce de farmacia y parafarmacia y diseño la nueva plataforma única de operativa — la que va a unificar el negocio sobre una sola fuente de verdad.",
        },
        {
          period: "2021 — 2026",
          company: "B2com",
          role: "Full Stack Engineer → Tech Lead",
          industry: "telco · saas",
          tags: ["vue 2/3", "symfony", "nestjs", "node", "rust", "flutter", "mongo", "mysql", "ia"],
          summary:
            "Cinco años construyendo Shara, el SaaS de telefonía que utilizan operadoras y empresas con infraestructura de llamadas para gestionar sus servicios. Shara funciona como única fuente de verdad de la operativa de B2com y como canal oficial de los distribuidores del grupo B2GROUP. Asumí el rol de Tech Lead del producto en el último año. En paralelo: las webs de cliente, las herramientas internas, las apps móviles y los proyectos de IA.",
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
      title: "qué elijo cuando.",
      note: "// El stack correcto no es el que más me gusta, es el que mejor encaja con el contexto. Esto es lo que elijo, y por qué.",
      choices: [
        {
          when: "Cuando el SEO y el rendimiento son negociables — un e-commerce, un sitio público.",
          picks: "Astro + Svelte",
          why: "Astro da SSR estático e hidratación selectiva por isla; Svelte mantiene la parte interactiva ligera. SEO completo por defecto, no como remiendo. Es lo que estamos eligiendo para el nuevo e-commerce de Farmavázquez.",
        },
        {
          when: "Cuando el equipo viene de JavaScript y el producto va a vivir años.",
          picks: "NestJS + Vue",
          why: "Continuidad antes que novedad. Cinco años con esta combinación en B2com construyendo Shara: estructura modular, curva plana para el equipo, ningún momento en que la productividad se hundiera por la herramienta.",
        },
        {
          when: "Cuando la prioridad es robustez, concurrencia y \"se escribe una vez y se queda corriendo\".",
          picks: "Rust",
          why: "Es lo que estamos eligiendo en Farmavázquez para la nueva plataforma de operativa. Asume que el equipo invierte en Rust como activo a largo plazo. El coste inicial de aprender se amortiza años después con garantías de memoria y un techo de performance al que un GC no llega.",
        },
        {
          when: "Cuando los datos no tienen un esquema cerrado.",
          picks: "MongoDB",
          why: "Lo elegí para Shara: cada operadora y cada distribuidor traían sus particularidades. Un schema rígido habría sido fricción permanente. Mongo permitió iterar el modelo sin migraciones lentas, con validación estricta en la capa de aplicación.",
        },
        {
          when: "Cuando hay una app móvil de cliente y no hay equipo iOS/Android dedicado.",
          picks: "Flutter / Ionic",
          why: "Una sola base de código, dos stores. La elección entre los dos depende de cuánta interfaz nativa esperamos y de la curva del equipo, no de una preferencia abstracta.",
        },
      ],
      breadthLabel: "También he trabajado con",
      breadth: [
        "TypeScript",
        "PHP",
        "Dart",
        "Laravel",
        "Symfony",
        "Node.js",
        "Yii2",
        "Vue 2",
        "MySQL",
        "Docker",
        "Linux",
        "Navision / Microsoft Dynamics",
        "LLMs e integración de IA",
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
        "[2026] Tech Lead en Farmavázquez. Construyendo el nuevo e-commerce y diseñando la plataforma única de operativa.",
        "Aprendiendo: Rust async, Postgres internals, devops menos doloroso.",
      ],
      cv: "// El CV estará disponible pronto. Mientras tanto: LinkedIn.",
      exit: "No puedes escapar.",
    },
    foot: {
      built: "Construido a mano · Sin trackers · Sin cookies",
      year: "valencia · 2026",
    },
    langSwitch: { es: "ES", en: "EN" },
    sysSpecs: [
      ["name", "Marc Archer"],
      ["role", "Full Stack"],
      ["level", "Tech Lead"],
      ["loc", "Valencia, ES"],
      ["lang", "es · en · ts"],
      ["uptime", "7y in prod"],
      ["focus", "e-commerce"],
      ["shell", "zsh / nvim"],
      ["status", "online"],
    ],
    log: [
      ["14:32", "git push origin feat/auth-flow"],
      ["13:47", "deploy: shop.farmavazquez prod ✓"],
      ["12:18", "review pr #234 — merged"],
      ["11:05", "spike: rust → wasm pipeline"],
      ["09:30", "coffee.service: started"],
    ],
  },
  en: {
    meta: {
      title: "Marc Archer Ciscar — Tech Lead & Full Stack Engineer · Valencia",
      description:
        "Marc Archer Ciscar — Tech Lead and Full Stack Engineer in Valencia, Spain. 7 years shipping e-commerce, SaaS, custom software and internal tools. Astro, Svelte, Rust, TypeScript, Vue, Flutter.",
    },
    nav: { about: "about", work: "work", stack: "stack", contact: "contact" },
    status: { current: "@ farmavázquez", location: "valencia, spain" },
    hero: {
      level: "tech_lead",
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
            "As Tech Lead, I drive the technical direction of the new pharmacy and parapharmacy e-commerce and design the new single operations platform — the one that will unify the business on a single source of truth.",
        },
        {
          period: "2021 — 2026",
          company: "B2com",
          role: "Full Stack Engineer → Tech Lead",
          industry: "telco · saas",
          tags: ["vue 2/3", "symfony", "nestjs", "node", "rust", "flutter", "mongo", "mysql", "ai"],
          summary:
            "Five years building Shara, the telephony SaaS used by carriers and any business that runs on call infrastructure to manage their services. Shara works as the single source of truth for B2com's operations and as the official channel for B2GROUP distributors. I took the Tech Lead position for the product in the last year. In parallel: the client-facing websites, the internal tools, the mobile apps and the AI projects.",
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
      title: "what I pick when.",
      note: "// The right stack isn't the one I like most, it's the one that fits the context. Here's what I pick, and why.",
      choices: [
        {
          when: "When SEO and performance are non-negotiable — an e-commerce, a public site.",
          picks: "Astro + Svelte",
          why: "Astro gives static SSR and per-island hydration; Svelte keeps the interactive part light. Full SEO by default, not as an afterthought. It's what we're choosing for the new Farmavázquez e-commerce.",
        },
        {
          when: "When the team comes from JavaScript and the product is going to live for years.",
          picks: "NestJS + Vue",
          why: "Continuity over novelty. Five years with this combo at B2com building Shara: modular structure, flat learning curve for the team, no moment where productivity tanked because of the tool.",
        },
        {
          when: "When the priority is robustness, concurrency and \"write once, keep running\".",
          picks: "Rust",
          why: "It's what we're picking at Farmavázquez for the new operations platform. Assumes the team invests in Rust as a long-term asset. The upfront learning cost pays back years later in memory guarantees and a performance ceiling a GC can't reach.",
        },
        {
          when: "When the data doesn't have a closed schema.",
          picks: "MongoDB",
          why: "I picked it for Shara: every carrier and every distributor brought their own particularities. A rigid schema would have been permanent friction. Mongo let us iterate the model without slow migrations, with strict validation at the application layer.",
        },
        {
          when: "When there's a client mobile app and no dedicated iOS/Android team.",
          picks: "Flutter / Ionic",
          why: "One codebase, two stores. The choice between the two depends on how much native interface we expect and the team's curve, not on an abstract preference.",
        },
      ],
      breadthLabel: "Also worked with",
      breadth: [
        "TypeScript",
        "PHP",
        "Dart",
        "Laravel",
        "Symfony",
        "Node.js",
        "Yii2",
        "Vue 2",
        "MySQL",
        "Docker",
        "Linux",
        "Navision / Microsoft Dynamics",
        "LLMs and AI integration",
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
        "[2026] Tech Lead at Farmavázquez. Building the new e-commerce and designing the single operations platform.",
        "Learning: Rust async, Postgres internals, less painful devops.",
      ],
      cv: "// CV coming soon. For now: LinkedIn.",
      exit: "You can't escape.",
    },
    foot: {
      built: "Hand-built · No trackers · No cookies",
      year: "valencia · 2026",
    },
    langSwitch: { es: "ES", en: "EN" },
    sysSpecs: [
      ["name", "Marc Archer"],
      ["role", "Full Stack"],
      ["level", "Tech Lead"],
      ["loc", "Valencia, ES"],
      ["lang", "es · en · ts"],
      ["uptime", "7y in prod"],
      ["focus", "e-commerce"],
      ["shell", "zsh / nvim"],
      ["status", "online"],
    ],
    log: [
      ["14:32", "git push origin feat/auth-flow"],
      ["13:47", "deploy: shop.farmavazquez prod ✓"],
      ["12:18", "review pr #234 — merged"],
      ["11:05", "spike: rust → wasm pipeline"],
      ["09:30", "coffee.service: started"],
    ],
  },
};
