import {
  Blocks,
  BrainCircuit,
  CircleGauge,
  CloudCog,
  CloudUpload,
  Network,
  ShieldCheck,
  SquareDashedBottomCode,
  Waypoints,
  Workflow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/types/locale";

export type ServiceItem = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  /** Plain-text label (e.g. AWS). Not an official partner logo asset. */
  partnerLabel?: string;
};

type Dictionary = {
  localeLabel: string;
  brandTagline: string;
  meta: Record<
    "home" | "services" | "about" | "contact",
    { title: string; description: string }
  >;
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    consultation: string;
    switchLanguage: string;
    openMenu: string;
    closeMenu: string;
    mainNavigation: string;
    privacy: string;
    terms: string;
  };
  home: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    highlightsTitle: string;
    highlights: string[];
    heroCardLead: string;
    valueEyebrow: string;
    valueTitle: string;
    valueDescription: string;
    valueItems: Array<{ title: string; description: string }>;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesDescription: string;
    featuredServiceSlugs: string[];
    servicesViewAllCta: string;
    whyEyebrow: string;
    whyTitle: string;
    whyDescription: string;
    processEyebrow: string;
    processTitle: string;
    processDescription: string;
    finalEyebrow: string;
    finalTitle: string;
    finalDescription: string;
    finalPrimary: string;
    finalSecondary: string;
    capabilityStrip: string;
    heroDiagram: {
      band: string;
      col1Title: string;
      col1Sub: string;
      col2Title: string;
      col2Sub: string;
      col3Title: string;
      col3Sub: string;
    };
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    description: string;
    sideTitle: string;
    sideDescription: string;
    catalogTitle: string;
    catalogDescription: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    description: string;
    storyTitle: string;
    storyParagraphs: string[];
    principlesTitle: string;
    principles: Array<{ title: string; description: string }>;
    fitTitle: string;
    fitItems: string[];
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    detailsTitle: string;
    detailsDescription: string;
    emailLabel: string;
    calendarLabel: string;
    calendarValue: string;
    availabilityLabel: string;
    availabilityValue: string;
  };
  form: {
    name: string;
    email: string;
    company: string;
    service: string;
    message: string;
    submit: string;
    placeholders: {
      name: string;
      email: string;
      company: string;
      service: string;
      message: string;
    };
    success: string;
    error: string;
    acceptPrivacyBefore: string;
    privacyPolicyName: string;
    acceptPrivacyAfter: string;
    acceptPrivacyError: string;
  };
  legal: {
    privacyEyebrow: string;
    privacyTitle: string;
    termsEyebrow: string;
    termsTitle: string;
  };
  footer: {
    focusLabel: string;
    coverageLabel: string;
    contactLabel: string;
    description: string;
    basedIn: string;
    responseTime: string;
  };
  process: Array<{ step: string; title: string; description: string }>;
  why: Array<{ icon: LucideIcon; title: string; description: string }>;
  services: ServiceItem[];
};

const sharedServices = {
  awsConsulting: CloudCog,
  devopsPlatformEngineering: Workflow,
  infrastructureAsCode: SquareDashedBottomCode,
  cicdAutomation: Waypoints,
  cloudSecurityFoundations: ShieldCheck,
  costOptimization: CircleGauge,
  cloudModernization: CloudUpload,
  aiReadyInfrastructure: BrainCircuit
} as const;

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    localeLabel: "ES",
    brandTagline: "Platform · DevOps · MLOps",
    meta: {
      home: {
        title: "GuatCloud | Plataforma cloud, DevOps y MLOps",
        description:
          "DevOps, MLOps, IaC y networking en nubes públicas. Patrones cloud-agnostic donde aportan; mayor profundidad hands-on en AWS (landing zones, Terraform, CI/CD)."
      },
      services: {
        title: "GuatCloud | Plataforma cloud, IaC y CI/CD",
        description:
          "Implementación fuerte en plataforma, redes, Terraform y pipelines, cost/security hygiene y modernization. La mayor parte del delivery profundo hoy es en AWS; abrimos conversación si tu stack es otro."
      },
      about: {
        title: "Sobre GuatCloud",
        description:
          "Shop cloud desde Guatemala: plataforma, automation y runbooks que tu equipo puede own. Pensamos vendor-neutral donde tiene sentido; el expertise más profundo está en AWS."
      },
      contact: {
        title: "Contacto GuatCloud",
        description:
          "Plataforma cloud, Terraform, CI/CD, ML/MLOps infra: comparte contexto (AWS u otra nube). Respondemos con fit honesto, prioridades y qué sería un buen outcome."
      }
    },
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Sobre nosotros",
      contact: "Contacto",
      consultation: "Agendar consulta",
      switchLanguage: "Cambiar idioma",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      mainNavigation: "Navegación principal",
      privacy: "Privacidad",
      terms: "Términos"
    },
    home: {
      eyebrow: "Cloud platform · IaC · CI/CD",
      title: "Plataforma cloud que tu equipo puede correr cuando ya no estemos.",
      description:
        "Diseñamos entornos, networking y delivery pipelines en nubes públicas para equipos que ya outgrowearon el duct tape. Menos sorpresas en prod, releases más limpias, tradeoffs claros. Donde más profundizamos hoy es AWS; el enfoque de arquitectura es cloud-agnostic donde tiene sentido.",
      primaryCta: "Agendar consulta",
      secondaryCta: "Ver servicios",
      highlightsTitle: "Tiene sentido si",
      highlights: [
        "Quieres arquitectura y automation alineadas a cómo tus engineers realmente shippean",
        "Terraform y CI/CD tienen que seguir legibles a los seis meses, no solo el día uno",
        "Necesitas respuestas directas en security, spend y reliability, no otro memo de “cloud strategy” genérico"
      ],
      heroCardLead: "Tres razones por las que nos meten en proyectos.",
      valueEyebrow: "Cómo laburamos",
      valueTitle: "Shipping a prod, no a un PDF.",
      valueDescription:
        "Estamos en accounts, VPCs, pipelines y lo que pasa en on-call: la capa que define si tus releases son boring en el buen sentido.",
      valueItems: [
        {
          title: "Cloud con chip de ops (deep en AWS)",
          description:
            "Landing zones, connectivity y servicios alineados a cómo se mueven app y datos, no solo a un diagrama bonito. La mayor parte de nuestro delivery hands-on hoy es AWS; los mismos principios aplican en otras nubes serias."
        },
        {
          title: "Automation que no te va a dar vergüenza",
          description:
            "Terraform y CI/CD ordenados para que el próximo engineer los pueda tocar sin un archaeology project."
        },
        {
          title: "Juicio técnico sin marketing speak",
          description:
            "Te dejamos claros los tradeoffs de costo, riesgo y velocity para que tus leads decidan con contexto y números."
        }
      ],
      servicesEyebrow: "Servicios",
      servicesTitle: "Donde más metemos mano",
      servicesDescription:
        "Alto impacto en platform glue, IaC y delivery automation; AWS es donde más horas metemos y donde está el catálogo más detallado. Abajo: security, FinOps, modernization, infra para ML y consulting AWS explícito.",
      featuredServiceSlugs: [
        "aws-consulting",
        "devops-platform-engineering",
        "infrastructure-as-code",
        "cicd-automation"
      ],
      servicesViewAllCta: "Ver catálogo de servicios",
      whyEyebrow: "Por qué GuatCloud",
      whyTitle: "Senior engineers en el barro contigo.",
      whyDescription:
        "Entramos a tu cloud org (en la práctica, mucho en AWS) con standards claros y artifacts tuyos: repos, modules, pipelines y docs que matchean la realidad.",
      processEyebrow: "Proceso",
      processTitle: "Cómo se mueven los engagements",
      processDescription:
        "Mapeamos estado actual, priorizamos por riesgo y leverage, buildamos con tus engineers en el loop, después estabilizamos y handoff.",
      finalEyebrow: "Siguiente paso",
      finalTitle: "¿Le damos una vuelta a tu plataforma cloud?",
      finalDescription:
        "Cuéntanos qué está on fire, lento o undefined. Si el fit es mutuo, alineamos scope, sequencing y ownership antes de tocar prod.",
      finalPrimary: "Agendar consulta",
      finalSecondary: "Ver servicios",
      capabilityStrip: "DevOps · MLOps · Networking",
      heroDiagram: {
        band: "PLATFORM",
        col1Title: "DEVOPS",
        col1Sub: "CI/CD · IaC",
        col2Title: "MLOPS",
        col2Sub: "data · models",
        col3Title: "NETWORK",
        col3Sub: "VPC · hybrid"
      }
    },
    servicesPage: {
      eyebrow: "Servicios",
      title: "Infrastructure y delivery engineering en la nube.",
      description:
        "Terraform, pipelines, networking y security baselines con bias fuerte a implementation. Pickeamos batallas que desbloquean shipping y bajan operational debt. AWS es nuestro expertise principal; hablamos si tu landing zone es otra nube.",
      sideTitle: "Qué optimizamos",
      sideDescription:
        "La mayoría no necesita greenfield platform. Necesitan menos footguns en prod, environments claros y automation que alguien interno pueda own.",
      catalogTitle: "Capability map",
      catalogDescription:
        "De accounts y connectivity a IaC, CI/CD, FinOps-style discipline y foundations listas para ML/MLOps: el technical work que evita que el cloud sea bottleneck. Oferta detallada orientada a AWS; mismo criterio aplicable en otras nubes donde encaje."
    },
    aboutPage: {
      eyebrow: "Sobre nosotros",
      title: "Buildamos. No nos quedamos en recommendations.",
      description:
        "GuatCloud labura con equipos en nube pública que necesitan environments más claros, defaults más sanos y delivery tooling para la próxima etapa de growth. No nos casamos con un vendor en el discurso; el expertise más profundo hoy es AWS.",
      storyTitle: "The practice",
      storyParagraphs: [
        "Somos un shop chico y senior, no slide factory. El core son accounts en nube, network paths, Terraform, CI/CD y el operational detail que manda si tus releases quedan predictables (hoy la mayoría del tiempo es AWS).",
        "HQ en Guatemala, remote en las Américas. Docs claros, tradeoffs explícitos y handoff pensado para que no dependas de un solo contractor para mantener uptime."
      ],
      principlesTitle: "Principios",
      principles: [
        {
          title: "Engineering over theater",
          description:
            "Advice tiene que ser buildable, testeable y supportable. Si no sobrevive prod, no lo shippeamos."
        },
        {
          title: "No buzzword fog",
          description:
            "Decimos tools, boundaries y riesgos con nombre. Architecture y scope tienen que ser entendibles por quien opera."
        },
        {
          title: "Sustainable después del ramp-down",
          description:
            "Platform y automation deberían dar velocity el próximo quarter, no un cleanup project al año siguiente."
        }
      ],
      fitTitle: "Más leverage si",
      fitItems: [
        "Tu startup necesita senior AWS y platform help antes de hirear un platform org completo.",
        "Tu SMB está modernizando cómo encajan cloud, deployments e infra ownership.",
        "Tu product org necesita hardening, docs y alignment de la cloud layer con cómo shippean los engineers.",
        "Estás en Guatemala o CA y quieres partner regional bilingüe con bar de ingeniería tipo top-tier remote team."
      ]
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Cuéntanos qué está on fire, slow o todavía undefined.",
      description:
        "AWS, Terraform, CI/CD, platform engineering o infra ML/MLOps: comparte contexto y respondemos con fit honesto, rough sequencing y qué sería good.",
      detailsTitle: "Direct lines",
      detailsDescription:
        "Form para first touch, o mail si ya tienes scope, SOW o RFP armado.",
      emailLabel: "Correo",
      calendarLabel: "Scheduling",
      calendarValue: "Coordinamos por mail; deja unas time windows en el mensaje.",
      availabilityLabel: "Availability",
      availabilityValue:
        "Fixed-scope projects y ongoing support. Home TZ Guatemala (UTC-6), flexible para US y otras Americas hours."
    },
    form: {
      name: "Nombre",
      email: "Correo de trabajo",
      company: "Empresa",
      service: "¿Dónde metemos mano?",
      message: "Contexto del proyecto",
      submit: "Mandar mensaje",
      placeholders: {
        name: "Tu nombre",
        email: "tu@empresa.com",
        company: "Company o team",
        service:
          "ej. multi-account AWS, Terraform refactor, GitHub Actions, ML training pipelines...",
        message:
          "Stack hoy, qué está broken o slow, timelines y cómo medirías success."
      },
      success: "Mensaje recibido. Te respondemos pronto.",
      error: "Algo falló. Reintenta o escríbenos por mail.",
      acceptPrivacyBefore: "He leído la",
      privacyPolicyName: "política de privacidad",
      acceptPrivacyAfter: "y acepto el tratamiento de mis datos personales para que GuatCloud responda a esta consulta.",
      acceptPrivacyError: "Debes aceptar la política de privacidad para enviar el formulario."
    },
    legal: {
      privacyEyebrow: "Legal",
      privacyTitle: "Política de privacidad",
      termsEyebrow: "Legal",
      termsTitle: "Términos de uso"
    },
    footer: {
      focusLabel: "Qué hacemos",
      coverageLabel: "Coverage",
      contactLabel: "Contacto",
      description:
        "Platform engineering, Terraform, CI/CD y landing zones (fuerte en AWS) para equipos que quieren operar cloud con confianza.",
      basedIn:
        "Guatemala · Remote en Centroamérica y Norteamérica.",
      responseTime: "Reply típico en ~1 business day."
    },
    process: [
      {
        step: "01",
        title: "Discover",
        description: "Map del cloud estate (mucho AWS hoy), pain points y qué es “better” para tu team."
      },
      {
        step: "02",
        title: "Plan",
        description: "Sequence por risk y leverage: qué fixea más con menos thrash."
      },
      {
        step: "03",
        title: "Ship",
        description: "Build en tus repos y accounts, con reviews donde tus engineers participan."
      },
      {
        step: "04",
        title: "Stabilize",
        description: "Harden, documentar y transferir ownership para que day-two ops sea boring on purpose."
      }
    ],
    why: [
      {
        icon: Waypoints,
        title: "Delivery, no decks",
        description:
          "La semana vive en git, pipelines y console. Un recommendation sin owner en prod no es deliverable."
      },
      {
        icon: Network,
        title: "Americas-friendly, sin bajar el bar",
        description:
          "Base Ciudad de Guatemala; technical English o español; UTC-6 alinea con US business hours. Misma rigurosidad que un senior platform group."
      },
      {
        icon: Blocks,
        title: "Handoffs que aguantan reality",
        description:
          "Runbooks, IaC ownership patterns y knowledge transfer para que tus engineers sigan cuando hacemos ramp-down."
      }
    ],
    services: [
      {
        slug: "aws-consulting",
        icon: sharedServices.awsConsulting,
        partnerLabel: "AWS",
        title: "AWS consulting",
        description:
          "Landing zones, connectivity y core services para AWS estates que tienen que scalear sin volverse tribal knowledge.",
        bullets: [
          "Multi-account layout y patterns por environment",
          "Networking, IAM y servicios base wired a tus workloads",
          "Adoption y migrations con steps rollback-friendly"
        ]
      },
      {
        slug: "devops-platform-engineering",
        icon: sharedServices.devopsPlatformEngineering,
        title: "DevOps & platform engineering",
        description:
          "Internal developer platforms y delivery rails que speed up shipping sin el fantasy del “platform team de diez personas”.",
        bullets: [
          "Deployment workflows, guardrails y golden paths que devs sí usan",
          "Consistency dev / staging / prod sin drift por copy-paste",
          "Shared tooling y standards para cloud delivery"
        ]
      },
      {
        slug: "infrastructure-as-code",
        icon: sharedServices.infrastructureAsCode,
        title: "Infrastructure as code",
        description:
          "Terraform que lee como software: modules, state discipline y review flow para que infra changes sean boring y auditables.",
        bullets: [
          "Module layout, remote state, environment composition",
          "Rescue o refactor de click-ops y one-off scripts",
          "Governance via PR: quién aprueba qué y cómo atrapar drift antes de que duela"
        ]
      },
      {
        slug: "cicd-automation",
        icon: sharedServices.cicdAutomation,
        title: "CI/CD automation",
        description:
          "Pipelines que hacen releases routine: fast feedback, safe promotions y rollback paths en los que el team confía.",
        bullets: [
          "Build / test / deploy pipelines tuned a tu stack",
          "Release automation, canaries y rollback readiness",
          "Hardening: secrets, least privilege, flaky test triage"
        ]
      },
      {
        slug: "cloud-security-foundations",
        icon: sharedServices.cloudSecurityFoundations,
        title: "Cloud security foundations",
        description:
          "Baseline controls para teams que se mueven rápido: strong identity, observable config, menos sharp edges en prod.",
        bullets: [
          "IAM layout, least privilege, access review periódico",
          "Secrets, logging, configuration hygiene",
          "Guardrails que achican blast radius sin bloquear delivery"
        ]
      },
      {
        slug: "cost-optimization",
        icon: sharedServices.costOptimization,
        title: "Cost optimization",
        description:
          "Spend visibility y tuning sin matar latency ni reliability por una línea linda en el bill.",
        bullets: [
          "Usage y reservations review con engineering context",
          "Right-sizing y cleanup de environments (no solo instances más chicas)",
          "Budget signals alineados a cómo el team planea capacity"
        ]
      },
      {
        slug: "cloud-modernization",
        icon: sharedServices.cloudModernization,
        title: "Cloud modernization",
        description:
          "Incremental refactors para teams stuck en brittle patterns, manual runbooks o “deploy cuando alguien tiene huevos”.",
        bullets: [
          "Untangle legacy environments y unclear ownership",
          "Migration planning con cutover y validation realistas",
          "Standardize ops para que on-call deje de ser hero sport"
        ]
      },
      {
        slug: "ai-ready-infrastructure",
        icon: sharedServices.aiReadyInfrastructure,
        title: "ML & MLOps infrastructure",
        description:
          "AWS foundations para data science y ML: secure data paths, repeatable training/deploy pipelines y serving stacks que tu platform team puede operar.",
        bullets: [
          "Network e IAM boundaries para data, notebooks, model artifacts",
          "CI/CD patterns para training jobs, container images, model promotion",
          "Hooks para experiment tracking, registries, inference endpoints sin mystery boxes"
        ]
      }
    ]
  },
  en: {
    localeLabel: "EN",
    brandTagline: "Platform · DevOps · MLOps",
    meta: {
      home: {
        title: "GuatCloud | Cloud platform, DevOps & MLOps",
        description:
          "DevOps, MLOps, IaC, and networking for public cloud teams. Vendor-neutral patterns where they help; deepest hands-on delivery on AWS (landing zones, Terraform, CI/CD)."
      },
      services: {
        title: "GuatCloud | Cloud platform, IaC & CI/CD",
        description:
          "Heavy implementation across platform, networking, Terraform, pipelines, cost and security hygiene, plus modernization. Most deep delivery today is on AWS; we are happy to talk if your stack is different."
      },
      about: {
        title: "About GuatCloud",
        description:
          "A Guatemala-based cloud practice: platform work, automation, and runbooks your team can own. Vendor-neutral framing where it makes sense; strongest depth on AWS."
      },
      contact: {
        title: "Contact GuatCloud",
        description:
          "Cloud platform, Terraform, CI/CD, ML/MLOps infrastructure: share context (AWS or another cloud). We reply with fit, priorities, and what good would look like."
      }
    },
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      consultation: "Book a consultation",
      switchLanguage: "Switch language",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      mainNavigation: "Main navigation",
      privacy: "Privacy",
      terms: "Terms"
    },
    home: {
      eyebrow: "Cloud platform · IaC · CI/CD",
      title: "Cloud infrastructure your team can run after we leave.",
      description:
        "We design environments, networking, and delivery pipelines on public clouds for teams that have outgrown ad-hoc setups. Fewer surprises in prod, cleaner releases, honest tradeoffs. Our deepest hands-on work today is AWS; architecture thinking stays cloud-agnostic where it should.",
      primaryCta: "Book a consultation",
      secondaryCta: "View services",
      highlightsTitle: "A strong match when",
      highlights: [
        "You want architecture and automation shaped around how your engineers actually ship",
        "Terraform and CI/CD have to stay readable six months from now, not just on day one",
        "You need direct answers on security, spend, and reliability, not another generic cloud strategy memo"
      ],
      heroCardLead: "Three reasons teams bring us in.",
      valueEyebrow: "How we work",
      valueTitle: "Work that ships to prod, not a PDF.",
      valueDescription:
        "We spend time in accounts, VPCs, pipelines, and on-call realities: the layer that decides whether releases stay boring in the right way.",
      valueItems: [
        {
          title: "Cloud with an operator’s mindset (deep on AWS)",
          description:
            "Landing zones, connectivity, and services aligned to how your app and data actually move, not a pretty reference diagram alone. Most of our hands-on delivery is AWS today; the same principles apply on other serious clouds."
        },
        {
          title: "Automation you will not regret",
          description:
            "Terraform and CI/CD structured so the next engineer can change them without a archaeology project."
        },
        {
          title: "Plain-spoken technical judgment",
          description:
            "We spell out cost, risk, and velocity tradeoffs so your leads can decide with numbers and context, not slogans."
        }
      ],
      servicesEyebrow: "Services",
      servicesTitle: "What we do most often",
      servicesDescription:
        "High-impact platform glue, IaC, and delivery automation; AWS is where we log the most hours and where the catalog is most specific. Below: security, cost, modernization, ML-ready infrastructure, and explicit AWS consulting.",
      featuredServiceSlugs: [
        "aws-consulting",
        "devops-platform-engineering",
        "infrastructure-as-code",
        "cicd-automation"
      ],
      servicesViewAllCta: "See full service catalog",
      whyEyebrow: "Why GuatCloud",
      whyTitle: "Senior engineers beside you in the weeds.",
      whyDescription:
        "We embed in your cloud org (in practice, often AWS) with explicit standards and artifacts your team owns: repos, modules, pipelines, and docs that match reality.",
      processEyebrow: "Process",
      processTitle: "How engagements run",
      processDescription:
        "We map the current state, sequence the riskiest gaps first, implement with your engineers in the loop, then stabilize and hand off.",
      finalEyebrow: "Next step",
      finalTitle: "Ready to tighten up your cloud platform?",
      finalDescription:
        "Tell us what is breaking, slow, or scary. If the work is a good mutual fit, we align on scope, sequencing, and ownership before touching production.",
      finalPrimary: "Book a consultation",
      finalSecondary: "Browse services",
      capabilityStrip: "DevOps · MLOps · Network engineering",
      heroDiagram: {
        band: "PLATFORM LAYER",
        col1Title: "DEVOPS",
        col1Sub: "CI/CD · IaC",
        col2Title: "MLOPS",
        col2Sub: "data · models",
        col3Title: "NETWORK",
        col3Sub: "VPC · hybrid"
      }
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Infrastructure and delivery engineering in the cloud.",
      description:
        "Terraform, pipelines, networking, and security baselines with a bias toward implementation. We pick battles that unblock delivery and reduce operational debt. AWS is our primary expertise; reach out if your landing zone is elsewhere.",
      sideTitle: "What we optimize for",
      sideDescription:
        "Most teams do not need a greenfield platform. They need fewer footguns in prod, clearer environments, and automation that someone internal can maintain.",
      catalogTitle: "Capability map",
      catalogDescription:
        "From accounts and connectivity to IaC, CI/CD, FinOps-style discipline, and ML/MLOps-ready foundations: the technical work that keeps cloud from becoming a bottleneck. Service detail is AWS-oriented; the same judgment applies on other clouds when there is a fit."
    },
    aboutPage: {
      eyebrow: "About",
      title: "We build. We do not stop at recommendations.",
      description:
        "GuatCloud partners with public cloud teams that need sharper environments, safer defaults, and delivery tooling they can own for the next growth phase. We do not anchor the practice to one vendor in principle; our deepest bench strength is AWS.",
      storyTitle: "The practice",
      storyParagraphs: [
        "This is a small, senior-led consulting practice, not a deck mill. Engagements center on cloud accounts, network paths, Terraform, CI/CD, and the operational detail that determines whether releases stay predictable (most client time today is AWS).",
        "Headquartered in Guatemala, we work remotely across the Americas. Expect crisp documentation, explicit tradeoffs, and handoffs structured so you are not dependent on one external name to keep the lights on."
      ],
      principlesTitle: "Principles",
      principles: [
        {
          title: "Engineering over theater",
          description:
            "Advice has to be buildable, testable, and supportable. If it cannot survive production, it does not ship from us."
        },
        {
          title: "No buzzword fog",
          description:
            "We name tools, boundaries, and risks directly. Architecture and scope stay understandable to the people who will operate them."
        },
        {
          title: "Sustainable after we step back",
          description:
            "Platform and automation choices should speed the team up next quarter, not create a cleanup project next year."
        }
      ],
      fitTitle: "You will get the most leverage if",
      fitItems: [
        "You are a startup that needs senior AWS and platform help before hiring a full internal platform org.",
        "You are an SMB modernizing how cloud, deployments, and infrastructure ownership work together.",
        "You are a product org that needs the cloud layer hardened, documented, and aligned with how engineers ship.",
        "You are in Guatemala or Central America and want a bilingual partner in-region with engineering standards you would expect from a top-tier remote team."
      ]
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Tell us what is on fire, slow, or undefined.",
      description:
        "AWS, Terraform, CI/CD, platform engineering, or ML/MLOps infrastructure: share context and we will respond with honest fit, rough sequencing, and what good would look like.",
      detailsTitle: "Direct lines",
      detailsDescription:
        "Use the form for a first conversation, or email if you already have a statement of work or RFP in mind.",
      emailLabel: "Email",
      calendarLabel: "Scheduling",
      calendarValue: "We coordinate by email; drop a few windows that work for you in the message.",
      availabilityLabel: "Availability",
      availabilityValue:
        "Fixed-scope projects and ongoing support. Home time zone: Guatemala (UTC-6), flexible for U.S. and other Americas hours."
    },
    form: {
      name: "Name",
      email: "Work email",
      company: "Company",
      service: "What should we focus on?",
      message: "Project details",
      submit: "Send message",
      placeholders: {
        name: "Your name",
        email: "you@company.com",
        company: "Company or team name",
        service:
          "e.g. multi-account AWS, Terraform refactor, GitHub Actions, ML training pipelines...",
        message:
          "Current stack, what is broken or slow, timelines, and how you would measure success."
      },
      success: "Message received. We will get back to you shortly.",
      error: "Something went wrong. Please try again or email us directly.",
      acceptPrivacyBefore: "I have read the",
      privacyPolicyName: "Privacy Policy",
      acceptPrivacyAfter:
        "and I agree to the processing of my personal data so GuatCloud can respond to this inquiry.",
      acceptPrivacyError: "Please accept the Privacy Policy to submit the form."
    },
    legal: {
      privacyEyebrow: "Legal",
      privacyTitle: "Privacy Policy",
      termsEyebrow: "Legal",
      termsTitle: "Terms of Use"
    },
    footer: {
      focusLabel: "Practice",
      coverageLabel: "Coverage",
      contactLabel: "Contact",
      description:
        "Platform engineering, Terraform, CI/CD, and landing zones (strong on AWS) for teams that want cloud they can operate with confidence.",
      basedIn: "Guatemala · Remote across Central and North America.",
      responseTime: "We usually reply within one business day."
    },
    process: [
      {
        step: "01",
        title: "Discover",
        description: "Map the cloud estate (often AWS today), pain points, and what “better” means for your team."
      },
      {
        step: "02",
        title: "Plan",
        description: "Sequence work by risk and leverage: what fixes the most with the least thrash."
      },
      {
        step: "03",
        title: "Ship",
        description: "Implement in your repos and accounts, with reviews your engineers participate in."
      },
      {
        step: "04",
        title: "Stabilize",
        description: "Harden, document, and transfer ownership so day-two operations are boring on purpose."
      }
    ],
    why: [
      {
        icon: Waypoints,
        title: "Delivery, not decks",
        description:
          "Our week lives in git, pipelines, and the console. A recommendation with no owner in production is not a deliverable."
      },
      {
        icon: Network,
        title: "Americas-friendly, no compromise on rigor",
        description:
          "Based in Guatemala City; fluent technical English or Spanish; UTC-6 lines up with U.S. business hours. Expect the same discipline you would from a senior platform group."
      },
      {
        icon: Blocks,
        title: "Handoffs that survive contact with reality",
        description:
          "Runbooks, IaC ownership patterns, and knowledge transfer so your engineers are unblocked when we ramp down."
      }
    ],
    services: [
      {
        slug: "aws-consulting",
        icon: sharedServices.awsConsulting,
        partnerLabel: "AWS",
        title: "AWS Consulting",
        description:
          "Landing-zone thinking, connectivity, and service configuration for AWS estates that have to scale without turning into tribal knowledge.",
        bullets: [
          "Multi-account structure and environment patterns",
          "Networking, IAM, and core services wired for your workloads",
          "Migration and adoption support with rollback-friendly steps"
        ]
      },
      {
        slug: "devops-platform-engineering",
        icon: sharedServices.devopsPlatformEngineering,
        title: "DevOps & Platform Engineering",
        description:
          "Internal developer platforms and delivery rails that speed up shipping without inventing a heavyweight “platform team of ten” fantasy.",
        bullets: [
          "Deployment workflows, guardrails, and golden paths developers actually use",
          "Consistency across dev, staging, and prod without copy-paste drift",
          "Shared tooling and standards for cloud delivery"
        ]
      },
      {
        slug: "infrastructure-as-code",
        icon: sharedServices.infrastructureAsCode,
        title: "Infrastructure as Code",
        description:
          "Terraform that reads like software: modules, state discipline, and review flows so infra changes are boring and auditable.",
        bullets: [
          "Module layout, remote state, and environment composition",
          "Rescuing or refactoring click-ops and one-off scripts",
          "PR-based governance: who approves what, and how drift gets caught"
        ]
      },
      {
        slug: "cicd-automation",
        icon: sharedServices.cicdAutomation,
        title: "CI/CD Automation",
        description:
          "Pipelines that make releases routine: fast feedback, safe promotions, and rollback paths people trust enough to use.",
        bullets: [
          "Build, test, and deploy pipelines tuned to your stack",
          "Release automation, canaries, and rollback readiness",
          "Hardening: secrets, least privilege, and flaky-test triage"
        ]
      },
      {
        slug: "cloud-security-foundations",
        icon: sharedServices.cloudSecurityFoundations,
        title: "Cloud Security Foundations",
        description:
          "Baseline controls that match how fast-moving teams work: strong identity, observable configs, and fewer sharp edges in prod.",
        bullets: [
          "IAM layout, least privilege, and periodic access review",
          "Secrets, logging, and configuration hygiene",
          "Guardrails that reduce accident blast radius without blocking delivery"
        ]
      },
      {
        slug: "cost-optimization",
        icon: sharedServices.costOptimization,
        title: "Cost Optimization",
        description:
          "Spend visibility and tuning that does not sacrifice latency or reliability for a short-term line on the bill.",
        bullets: [
          "Usage and reservation review with engineering context",
          "Right-sizing and environment hygiene (not just smaller instances)",
          "Budget signals wired into how teams plan capacity"
        ]
      },
      {
        slug: "cloud-modernization",
        icon: sharedServices.cloudModernization,
        title: "Cloud Modernization",
        description:
          "Incremental refactors for teams stuck on brittle patterns, manual runbooks, or “we deploy when someone is brave enough.”",
        bullets: [
          "Untangling legacy environments and unclear ownership",
          "Migration planning with realistic cutover and validation",
          "Standardizing operations so on-call stops being a hero sport"
        ]
      },
      {
        slug: "ai-ready-infrastructure",
        icon: sharedServices.aiReadyInfrastructure,
        title: "ML & MLOps Infrastructure",
        description:
          "AWS foundations for data science and ML: secure data paths, repeatable training and deployment pipelines, and serving stacks your platform team can operate.",
        bullets: [
          "Network and IAM boundaries for data, notebooks, and model artifacts",
          "CI/CD patterns for training jobs, container images, and model promotion",
          "Integration points for experiment tracking, registries, and inference endpoints without bolting on mystery boxes"
        ]
      }
    ]
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
