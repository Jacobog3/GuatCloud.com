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
          "DevOps, MLOps, infraestructura como código y redes en nube pública. Patrones multi‑nube donde aportan; mayor profundidad práctica en AWS (zonas de aterrizaje, Terraform, CI/CD)."
      },
      services: {
        title: "GuatCloud | Plataforma cloud, IaC y CI/CD",
        description:
          "Implementación sólida en plataforma, redes, Terraform y pipelines, higiene de costos y seguridad, y modernización. La mayor parte del trabajo profundo hoy es en AWS; conversemos si tu entorno es otro."
      },
      about: {
        title: "Sobre GuatCloud",
        description:
          "Consultoría cloud desde Guatemala: plataforma, automatización y guías de operación que tu equipo puede mantener solo. Somos neutrales respecto al proveedor cuando aplica; donde más profundizamos hoy es en AWS."
      },
      contact: {
        title: "Contacto GuatCloud",
        description:
          "Plataforma cloud, Terraform, CI/CD, infraestructura para ML/MLOps: cuéntanos tu contexto (AWS u otra nube). Respondemos con sinceridad sobre si encajamos, por dónde empezar y qué resultado razonable esperar."
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
      eyebrow: "Plataforma cloud · IaC · CI/CD",
      title: "Plataforma cloud que tu equipo puede operar cuando ya no estemos.",
      description:
        "Diseñamos entornos, redes y pipelines de entrega en nube pública para equipos que ya no pueden seguir a pura improvisación. Menos sorpresas en producción, publicaciones más ordenadas y decisiones con costos y riesgos claros. Donde más profundizamos hoy es AWS; el criterio de arquitectura sigue siendo multi‑nube cuando corresponde.",
      primaryCta: "Agendar consulta",
      secondaryCta: "Ver servicios",
      highlightsTitle: "Tiene sentido si",
      highlights: [
        "Quieres arquitectura y automatización alineadas a cómo tus ingenieros publican en producción",
        "Terraform y CI/CD tienen que seguir entendibles a los seis meses, no solo el primer día",
        "Necesitas respuestas claras en seguridad, gasto y confiabilidad, no otro documento genérico de “estrategia cloud”"
      ],
      heroCardLead: "Tres razones por las que nos contratan en proyectos.",
      valueEyebrow: "Cómo trabajamos",
      valueTitle: "Cambios hasta producción, no hasta un PDF.",
      valueDescription:
        "Trabajamos en cuentas, VPC, pipelines y lo que ocurre cuando hay guardia: la capa que define si tus publicaciones son predecibles (en el buen sentido).",
      valueItems: [
        {
          title: "Nube con mentalidad de operaciones (profundidad en AWS)",
          description:
            "Zonas de aterrizaje, conectividad y servicios alineados a cómo se mueven aplicaciones y datos, no solo a un diagrama bonito. La mayor parte de nuestro trabajo práctico hoy es en AWS; los mismos principios aplican en otras nubes serias."
        },
        {
          title: "Automatización de la que no te vas a arrepentir",
          description:
            "Terraform y CI/CD ordenados para que el próximo ingeniero pueda cambiarlos sin tener que investigar durante semanas."
        },
        {
          title: "Criterio técnico sin discurso de marketing",
          description:
            "Te explicamos con claridad los equilibrios entre costo, riesgo y velocidad para que tus líderes decidan con contexto y números."
        }
      ],
      servicesEyebrow: "Servicios",
      servicesTitle: "Donde más metemos mano",
      servicesDescription:
        "Alto impacto en capa de plataforma, infraestructura como código y automatización de entregas; AWS es donde más horas invertimos y donde el catálogo es más detallado. Más abajo: seguridad, costos, modernización, infraestructura para ML y consultoría AWS explícita.",
      featuredServiceSlugs: [
        "aws-consulting",
        "devops-platform-engineering",
        "infrastructure-as-code",
        "cicd-automation"
      ],
      servicesViewAllCta: "Ver catálogo de servicios",
      whyEyebrow: "Por qué GuatCloud",
      whyTitle: "Tres promesas simples.",
      whyDescription:
        "Hacemos el trabajo técnico en tus cuentas y repositorios (hoy suele ser mucho AWS). Tu equipo puede reunirse en horario cercano al de EE. UU. y en inglés o español. Al cerrar el proyecto, puede seguir operando sin depender de nosotros.",
      processEyebrow: "Proceso",
      processTitle: "Cómo avanzamos en cada proyecto",
      processDescription:
        "Revisamos el estado actual, priorizamos por riesgo e impacto, implementamos con tus ingenieros al tanto, y al final estabilizamos y traspasamos responsabilidades.",
      finalEyebrow: "Siguiente paso",
      finalTitle: "¿Revisamos tu plataforma en la nube?",
      finalDescription:
        "Cuéntanos qué está fallando, qué va lento o qué aún no está definido. Si el encaje es mutuo, alineamos alcance, orden de trabajo y responsables antes de tocar producción.",
      finalPrimary: "Agendar consulta",
      finalSecondary: "Ver servicios",
      capabilityStrip: "DevOps · MLOps · Redes",
      heroDiagram: {
        band: "PLATAFORMA",
        col1Title: "DEVOPS",
        col1Sub: "CI/CD · IaC",
        col2Title: "MLOPS",
        col2Sub: "datos · modelos",
        col3Title: "REDES",
        col3Sub: "VPC · híbrido"
      }
    },
    servicesPage: {
      eyebrow: "Servicios",
      title: "Infraestructura e ingeniería de entrega en la nube.",
      description:
        "Terraform, pipelines, redes y bases de seguridad con énfasis en implementación real. Elegimos prioridades que desbloquean publicaciones y reducen deuda operativa. AWS es nuestra especialidad principal; conversemos si tu entorno principal es otra nube.",
      sideTitle: "Qué optimizamos",
      sideDescription:
        "La mayoría no necesita una plataforma nueva desde cero. Necesita menos errores costosos en producción, entornos claros y automatización que alguien de tu equipo pueda mantener.",
      catalogTitle: "Mapa de capacidades",
      catalogDescription:
        "De cuentas y conectividad a infraestructura como código, CI/CD, disciplina de costos y bases listas para ML/MLOps: el trabajo técnico que evita que la nube sea un cuello de botella. Detalle orientado a AWS; el mismo criterio aplica en otras nubes donde encaje."
    },
    aboutPage: {
      eyebrow: "Sobre nosotros",
      title: "Implementamos. No nos quedamos solo en recomendaciones.",
      description:
        "GuatCloud trabaja con equipos en nube pública que necesitan entornos más claros, configuraciones base más sanas y herramientas de entrega para la siguiente etapa de crecimiento. No nos amarramos a un proveedor en el discurso; donde más profundizamos hoy es en AWS.",
      storyTitle: "Nuestra forma de trabajar",
      storyParagraphs: [
        "Somos un equipo pequeño y senior, no una fábrica de diapositivas. Lo central son cuentas en la nube, rutas de red, Terraform, CI/CD y el detalle operativo que define si tus publicaciones son predecibles (hoy la mayor parte del tiempo es AWS).",
        "Sede en Guatemala; trabajo remoto en las Américas. Documentación clara, pros y contras explícitos y traspaso pensado para que no dependas de un solo contratista para mantener el servicio arriba."
      ],
      principlesTitle: "Principios",
      principles: [
        {
          title: "Ingeniería, no teatro",
          description:
            "El consejo tiene que poder construirse, probarse y mantenerse. Si no aguanta producción, no lo damos por entregado."
        },
        {
          title: "Sin niebla de modas",
          description:
            "Nombramos herramientas, límites y riesgos con claridad. La arquitectura y el alcance tienen que ser claros para quien opera el sistema."
        },
        {
          title: "Sostenible después de irnos",
          description:
            "La plataforma y la automatización deberían dar velocidad el próximo trimestre, no un proyecto de limpieza al año siguiente."
        }
      ],
      fitTitle: "Encaja mejor si",
      fitItems: [
        "Tu empresa necesita experiencia senior en AWS y plataforma antes de contratar un equipo de plataforma completo.",
        "Tu negocio está ordenando cómo encajan la nube, los despliegues y quién es dueño de la infraestructura.",
        "Tu área de producto necesita endurecimiento, documentación y alineación de la capa cloud con cómo publican los ingenieros.",
        "Estás en Guatemala o Centroamérica y quieres un aliado regional bilingüe con el listón de ingeniería de un equipo remoto de primer nivel."
      ]
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Cuéntanos qué está fallando, qué va lento o qué falta por definir.",
      description:
        "AWS, Terraform, CI/CD, ingeniería de plataforma o infraestructura para ML/MLOps: comparte contexto y te respondemos con sinceridad sobre encaje, orden aproximado de trabajo y un resultado razonable.",
      detailsTitle: "Canales directos",
      detailsDescription:
        "Formulario para el primer contacto, o correo si ya tienes alcance, propuesta o requisitos armados.",
      emailLabel: "Correo",
      calendarLabel: "Agenda",
      calendarValue: "Coordinamos por correo; indica en el mensaje algunas franjas horarias que te funcionen.",
      availabilityLabel: "Disponibilidad",
      availabilityValue:
        "Proyectos de alcance fijo y acompañamiento continuo. Zona horaria base Guatemala (UTC-6), con flexibilidad para horarios de EE. UU. y otras Américas."
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
        company: "Empresa o equipo",
        service:
          "ej. varias cuentas en AWS, refactor de Terraform, GitHub Actions, pipelines de entrenamiento de modelos...",
        message:
          "Tecnologías actuales, qué falla o va lento, plazos y cómo medirías el éxito."
      },
      success: "Mensaje recibido. Te respondemos pronto.",
      error: "Algo falló. Intenta de nuevo o escríbenos por correo.",
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
      coverageLabel: "Alcance",
      contactLabel: "Contacto",
      description:
        "Ingeniería de plataforma, Terraform, CI/CD y zonas de aterrizaje (con fuerte foco en AWS) para equipos que quieren operar la nube con confianza.",
      basedIn:
        "Guatemala · Remoto en Centroamérica y Norteamérica.",
      responseTime: "Por lo general respondemos en ~1 día hábil."
    },
    process: [
      {
        step: "01",
        title: "Descubrir",
        description:
          "Levantamos tu estado en la nube (hoy suele ser mucho AWS), dolores concretos y qué sería “mejor” para tu equipo."
      },
      {
        step: "02",
        title: "Planificar",
        description:
          "Ordenamos el trabajo por riesgo e impacto: qué corrige más con menos vaivén."
      },
      {
        step: "03",
        title: "Implementar",
        description:
          "Implementamos en tus repositorios y cuentas, con revisiones donde participan tus ingenieros."
      },
      {
        step: "04",
        title: "Estabilizar",
        description:
          "Endurecemos, documentamos y traspasamos responsabilidad para que el día a día en operaciones sea aburrido a propósito."
      }
    ],
    why: [
      {
        icon: Waypoints,
        title: "Construimos en tu código y en la nube, no solo aconsejamos",
        description:
          "Los cambios llegan como pull requests, pipelines y recursos reales. Si algo no tiene dueño claro en producción, no lo damos por terminado."
      },
      {
        icon: Network,
        title: "Reuniones en horario de EE. UU.; idioma el que prefiera el equipo",
        description:
          "Estamos en Ciudad de Guatemala (UTC-6), así que suele encajar con equipos en Estados Unidos. El nivel de trabajo es el de consultoría senior en plataforma e infraestructura, no entregas genéricas."
      },
      {
        icon: Blocks,
        title: "Al terminar, tu equipo sabe mantener lo desplegado",
        description:
          "Dejamos procedimientos por escrito, aclaramos quién es responsable de cada parte de la infraestructura automatizada y hacemos traspaso para que puedan operar solos el día siguiente."
      }
    ],
    services: [
      {
        slug: "aws-consulting",
        icon: sharedServices.awsConsulting,
        partnerLabel: "AWS",
        title: "Consultoría AWS",
        description:
          "Zonas de aterrizaje, conectividad y servicios base para entornos AWS que tienen que crecer sin depender del conocimiento en la cabeza de una sola persona.",
        bullets: [
          "Diseño multi‑cuenta y patrones por entorno",
          "Redes, IAM y servicios base conectados a tus cargas de trabajo",
          "Adopción y migraciones con pasos que permiten retroceder si hace falta"
        ]
      },
      {
        slug: "devops-platform-engineering",
        icon: sharedServices.devopsPlatformEngineering,
        title: "DevOps e ingeniería de plataforma",
        description:
          "Plataformas para desarrolladores y canales de entrega que aceleran publicaciones sin el cuento del “equipo de plataforma de diez personas”.",
        bullets: [
          "Flujos de despliegue, límites sanos y caminos preferidos que los desarrolladores sí usan",
          "Consistencia entre desarrollo, pruebas y producción sin copiar y pegar",
          "Herramientas compartidas y estándares para entregar en la nube"
        ]
      },
      {
        slug: "infrastructure-as-code",
        icon: sharedServices.infrastructureAsCode,
        title: "Infraestructura como código",
        description:
          "Terraform que se lee como software: módulos, disciplina de estado y revisiones para que los cambios de infraestructura sean predecibles y auditables.",
        bullets: [
          "Estructura de módulos, estado remoto y composición por entorno",
          "Rescate o refactor de operación a clics y scripts sueltos",
          "Gobierno vía pull requests: quién aprueba qué y cómo detectar desvíos antes de que duela"
        ]
      },
      {
        slug: "cicd-automation",
        icon: sharedServices.cicdAutomation,
        title: "Automatización CI/CD",
        description:
          "Pipelines que vuelven rutinarias las publicaciones: retroalimentación rápida, promociones seguras y caminos de reversión en los que el equipo confía.",
        bullets: [
          "Pipelines de compilación, prueba y despliegue ajustados a tus tecnologías",
          "Automatización de publicaciones, despliegues canario y preparación para reversión",
          "Endurecimiento: secretos, mínimo privilegio y manejo de pruebas inestables"
        ]
      },
      {
        slug: "cloud-security-foundations",
        icon: sharedServices.cloudSecurityFoundations,
        title: "Bases de seguridad en la nube",
        description:
          "Controles base para equipos que van rápido: identidad sólida, configuración observable y menos aristas filosas en producción.",
        bullets: [
          "Diseño de IAM, mínimo privilegio y revisiones periódicas de acceso",
          "Secretos, registros e higiene de configuración",
          "Límites que reducen el radio de daño sin frenar las entregas"
        ]
      },
      {
        slug: "cost-optimization",
        icon: sharedServices.costOptimization,
        title: "Optimización de costos",
        description:
          "Visibilidad del gasto y ajustes sin sacrificar latencia ni confiabilidad por una factura que solo se ve bonita en el papel.",
        bullets: [
          "Revisión de uso y reservas con contexto de ingeniería",
          "Tamaño adecuado y limpieza de entornos (no solo máquinas más pequeñas)",
          "Señales de presupuesto alineadas a cómo el equipo planea capacidad"
        ]
      },
      {
        slug: "cloud-modernization",
        icon: sharedServices.cloudModernization,
        title: "Modernización cloud",
        description:
          "Refactorizaciones graduales para equipos atrapados en patrones frágiles, guías manuales o despliegues que dependen de un héroe del momento.",
        bullets: [
          "Ordenar entornos heredados y responsabilidades poco claras",
          "Plan de migración con cortes y validaciones realistas",
          "Operación más estándar para que la guardia deje de ser deporte de riesgo"
        ]
      },
      {
        slug: "ai-ready-infrastructure",
        icon: sharedServices.aiReadyInfrastructure,
        title: "Infraestructura para ML y MLOps",
        description:
          "Bases en AWS para ciencia de datos y ML: rutas de datos seguras, pipelines repetibles de entrenamiento y despliegue, y servicio de modelos que tu equipo de plataforma puede operar.",
        bullets: [
          "Límites de red e IAM para datos, notebooks y artefactos de modelos",
          "Patrones de CI/CD para trabajos de entrenamiento, imágenes y promoción de modelos",
          "Integración con seguimiento de experimentos, registros y endpoints de inferencia sin cajas negras"
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
      whyTitle: "Three straightforward commitments.",
      whyDescription:
        "We do the hands-on work in your accounts and repositories (often AWS-heavy today). You can meet in hours that work for U.S. teams, in English or Spanish. When the engagement ends, your engineers can keep operating what we built without us.",
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
        title: "We build in your repos and cloud, not just advise",
        description:
          "Changes land as real pull requests, pipelines, and infrastructure. If nothing in production has a clear owner, we do not call the work done."
      },
      {
        icon: Network,
        title: "U.S.-friendly meeting hours; language your team prefers",
        description:
          "We are in Guatemala City (UTC-6), which usually lines up with U.S. business hours. Expect senior platform and infrastructure consulting quality—not vague slide decks."
      },
      {
        icon: Blocks,
        title: "When we leave, your team can run what we shipped",
        description:
          "We leave written runbooks, spell out who owns each part of the automated infrastructure, and transfer knowledge so you can operate on your own the next day."
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
