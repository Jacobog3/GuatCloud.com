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
    companyLabel: string;
    contactLabel: string;
    basedIn: string;
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
    brandTagline: "Infraestructura cloud · DevOps",
    meta: {
      home: {
        title: "GuatCloud | Infraestructura cloud, DevOps y automatización",
        description:
          "Consultoría de infraestructura cloud, DevOps y automatización para equipos que necesitan una base más clara, segura y mantenible, con profundidad fuerte en AWS, Terraform y CI/CD."
      },
      services: {
        title: "GuatCloud | Servicios de infraestructura cloud, AWS y DevOps",
        description:
          "Servicios de infraestructura cloud, AWS, Terraform, CI/CD, seguridad y modernización con foco en implementación real dentro de cuentas, repositorios y pipelines."
      },
      about: {
        title: "Sobre GuatCloud | Infraestructura cloud y DevOps",
        description:
          "Firma boutique de infraestructura cloud y DevOps con práctica fuerte en AWS, enfocada en implementación, automatización y entornos que tu equipo puede operar sin depender de terceros."
      },
      contact: {
        title: "Contacto GuatCloud",
        description:
          "Conversemos sobre infraestructura cloud, AWS, Terraform, CI/CD, seguridad, modernización o entornos listos para IA."
      }
    },
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
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
      eyebrow: "Infraestructura cloud · DevOps · Automatización",
      title: "Infraestructura cloud más clara, estable y operable.",
      description:
        "GuatCloud ayuda a startups, pymes y equipos de producto a diseñar, desplegar, asegurar y mejorar entornos cloud con trabajo real en infraestructura, automatización y operación.",
      primaryCta: "Agendar consulta",
      secondaryCta: "Explorar servicios",
      highlightsTitle: "Encaja mejor si",
      highlights: [
        "Tu entorno cloud creció más rápido que sus bases: accesos, entornos, despliegues y ownership ya no están claros",
        "Terraform, CI/CD o los flujos de entrega existen, pero hoy son frágiles, manuales o difíciles de mantener",
        "Necesitas ejecución técnica dentro de tu stack, no solo recomendaciones en un documento"
      ],
      heroCardLead: "Tres razones por las que nos contratan en proyectos.",
      valueEyebrow: "Cómo trabajamos",
      valueTitle: "Trabajo técnico en la base que sostiene la operación.",
      valueDescription:
        "Entramos donde normalmente se acumula la fricción: infraestructura, identidad, redes, Terraform, pipelines y estándares operativos. Cuando el entorno está en AWS, ahí es donde tenemos más profundidad.",
      valueItems: [
        {
          title: "Fundaciones cloud con mejor estructura",
          description:
            "Ordenamos cuentas, entornos, redes, accesos y ownership para que la plataforma crezca con menos excepciones manuales."
        },
        {
          title: "Terraform y automatización de entrega",
          description:
            "Construimos módulos reutilizables, pipelines y flujos de despliegue que el equipo pueda operar y evolucionar después."
        },
        {
          title: "Seguridad y operación con criterio",
          description:
            "Aterrizamos identidad, permisos, secretos, costos y mejoras operativas en decisiones claras y cambios reales."
        }
      ],
      servicesEyebrow: "Servicios",
      servicesTitle: "Capacidades principales",
      servicesDescription:
        "La práctica cubre infraestructura cloud, automatización, seguridad base y delivery. AWS es hoy la especialidad más profunda, junto con Terraform y CI/CD.",
      featuredServiceSlugs: [
        "aws-consulting",
        "devops-platform-engineering",
        "infrastructure-as-code",
        "cicd-automation"
      ],
      servicesViewAllCta: "Ver todos los servicios",
      whyEyebrow: "Por qué GuatCloud",
      whyTitle: "De una nube frágil a una base que el equipo puede operar mejor.",
      whyDescription:
        "GuatCloud combina trabajo hands-on en infraestructura, automatización y operación con profundidad real en AWS cuando el entorno lo requiere.",
      processEyebrow: "Proceso",
      processTitle: "Cómo avanzamos en cada proyecto",
      processDescription:
        "Empezamos por entender el entorno actual, priorizamos lo crítico, implementamos dentro de tu stack y cerramos con estabilización y traspaso.",
      finalEyebrow: "Siguiente paso",
      finalTitle: "¿Revisamos qué necesita hoy tu infraestructura cloud?",
      finalDescription:
        "Si hoy hay fricción en accesos, Terraform, CI/CD, despliegues, costos o bases cloud, conversemos. Revisamos contexto, prioridades y el siguiente paso técnico más razonable.",
      finalPrimary: "Agendar consulta",
      finalSecondary: "Explorar servicios",
      capabilityStrip: "Cloud foundations · Terraform · Delivery systems",
      heroDiagram: {
        band: "CAPA OPERATIVA",
        col1Title: "CLOUD",
        col1Sub: "red · identidad",
        col2Title: "IAC",
        col2Sub: "Terraform · módulos",
        col3Title: "DELIVERY",
        col3Sub: "build · deploy"
      }
    },
    servicesPage: {
      eyebrow: "Servicios",
      title: "Servicios de infraestructura cloud y DevOps, con especialidad fuerte en AWS.",
      description:
        "GuatCloud trabaja sobre plataformas cloud, Terraform, pipelines, seguridad, costos y modernización con foco en implementación real y mejoras que se sostienen.",
      sideTitle: "Qué resolvemos",
      sideDescription:
        "La mayoría no necesita rehacer todo. Necesita ordenar la base cloud, automatizar mejor y reducir errores costosos en producción.",
      catalogTitle: "Capacidades técnicas",
      catalogDescription:
        "De AWS Organizations y Control Tower a Terraform, CI/CD, IAM, VPC, ECS, EKS, Lambda e incorporación de cuentas: trabajo técnico que evita que la nube se vuelva un cuello de botella."
    },
    aboutPage: {
      eyebrow: "Nosotros",
      title: "Una firma boutique de infraestructura cloud y DevOps con profundidad real en AWS.",
      description:
        "GuatCloud es una consultora fundada por Jacobo Gonzalez para ayudar a equipos que necesitan ejecutar mejor en cloud, con especialidad fuerte en AWS y foco total en implementación.",
      storyTitle: "Nuestra forma de trabajar",
      storyParagraphs: [
        "GuatCloud es una firma liderada por su fundador, pero pensada para operar como empresa, no como portafolio personal. La práctica se enfoca en infraestructura cloud, Terraform, CI/CD, seguridad base y la capa operativa que sostiene entornos productivos; hoy, la mayor profundidad está en AWS.",
        "Desde Guatemala trabajamos remoto con equipos en la región y Norteamérica. El modelo es hands-on: cambios en cuentas, módulos, pipelines, permisos y configuración, con documentación y traspaso para que el cliente pueda seguir operando."
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
      fitTitle: "Donde generamos más valor",
      fitItems: [
        "Startups que necesitan experiencia senior en AWS y DevOps antes de formar un equipo interno de plataforma.",
        "Pymes y fintechs que están ordenando entornos multi-account, accesos, pipelines y responsabilidad de infraestructura.",
        "Equipos de producto que necesitan mejorar despliegues, seguridad cloud y mantenibilidad sin frenar entregas.",
        "Organizaciones que necesitan un partner técnico cercano a la región, con overlap hacia EE. UU. y trabajo real de implementación."
      ]
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Contanos que necesita hoy tu entorno cloud.",
      description:
        "Si necesitas apoyo en infraestructura cloud, AWS, Terraform, CI/CD, seguridad, modernización o incorporación de cuentas, revisamos contexto, encaje y siguiente paso.",
      detailsTitle: "Canales directos",
      detailsDescription:
        "Usa el formulario para una primera conversacion, o escribe por correo si ya tienes alcance, prioridades o requisitos definidos.",
      emailLabel: "Correo",
      calendarLabel: "Agenda",
      calendarValue: "Coordinamos por correo; indica en el mensaje algunas franjas horarias que te funcionen.",
      availabilityLabel: "Disponibilidad",
      availabilityValue:
        "Proyectos por alcance definido y acompañamiento continuo. Zona horaria base Guatemala (UTC-6), con flexibilidad para equipos en Centroamérica y Norteamérica."
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
      companyLabel: "Compañía",
      contactLabel: "Contacto",
      basedIn: "Guatemala · Remoto para Centroamérica y Norteamérica."
    },
    process: [
      {
        step: "01",
        title: "Descubrir",
        description:
          "Revisamos cuentas, red, IAM, Terraform, pipelines y dolores operativos para entender dónde está el mayor riesgo o desorden."
      },
      {
        step: "02",
        title: "Planificar",
        description:
          "Definimos un plan por fases con prioridades claras: bases cloud, automatización, seguridad, despliegues o modernización."
      },
      {
        step: "03",
        title: "Implementar",
        description:
          "Implementamos dentro de tus cuentas y repositorios con cambios reales en Terraform, IAM, pipelines, servicios y configuración."
      },
      {
        step: "04",
        title: "Estabilizar",
        description:
          "Cerramos con endurecimiento, documentación y handoff para que el equipo pueda operar con menos dependencia y menos sorpresas."
      }
    ],
    why: [
      {
        icon: Waypoints,
        title: "Profundidad real en bases cloud y AWS multi-account",
        description:
          "Trabajamos en entornos que ya necesitan estructura: cuentas, redes, IAM, guardrails y account onboarding; cuando es AWS, dominamos Organizations y Control Tower."
      },
      {
        icon: Network,
        title: "Automatización pensada para mantenerse",
        description:
          "Terraform, GitHub Actions, Bitbucket Pipelines, CodePipeline y CodeDeploy se implementan para reducir fricción sin dejar más deuda operativa."
      },
      {
        icon: Blocks,
        title: "Seguridad y operación con criterio de producción",
        description:
          "Desde OIDC, accesos cross-account y boundaries hasta costos, modernización y entornos listos para Bedrock, el enfoque siempre es concreto y operativo."
      }
    ],
    services: [
      {
        slug: "aws-consulting",
        icon: sharedServices.awsConsulting,
        partnerLabel: "AWS",
        title: "Consultoría AWS",
        description:
          "Diseno e implementacion de entornos AWS con estructura real: multi-account, Control Tower, Organizations, incorporacion de cuentas y servicios base listos para crecer.",
        bullets: [
          "Estrategia multi-account, account factory e incorporacion de nuevas cuentas",
          "Networking, IAM, VPC y servicios base conectados a tus cargas de trabajo",
          "Adopcion, migraciones y modernizacion con pasos controlados"
        ]
      },
      {
        slug: "devops-platform-engineering",
        icon: sharedServices.devopsPlatformEngineering,
        title: "DevOps e ingeniería de plataforma",
        description:
          "Mejoras de plataforma para que ingenieria publique con menos friccion y mas consistencia, sin sobrecargar al equipo con procesos innecesarios.",
        bullets: [
          "Estandares operativos, entornos consistentes y mejores caminos de despliegue",
          "Integracion entre infraestructura, entrega y experiencia del equipo",
          "Tooling compartido para operar AWS con menos deuda operativa"
        ]
      },
      {
        slug: "infrastructure-as-code",
        icon: sharedServices.infrastructureAsCode,
        title: "Infraestructura como código",
        description:
          "Terraform orientado a produccion: modulos reutilizables, composicion por entorno, control de cambios y una base que se pueda mantener de verdad.",
        bullets: [
          "Modulos reutilizables y estructuras por entorno",
          "Refactor de click-ops y scripts sueltos hacia IaC auditable",
          "Flujos de revision y control para cambios de infraestructura"
        ]
      },
      {
        slug: "cicd-automation",
        icon: sharedServices.cicdAutomation,
        title: "Automatización CI/CD",
        description:
          "Pipelines de build, test y deploy que reducen friccion, mejoran la confiabilidad de las publicaciones y dejan un proceso mas claro para el equipo.",
        bullets: [
          "GitHub Actions, Bitbucket Pipelines, CodePipeline y CodeDeploy",
          "Automatizacion de releases, promociones seguras y rollback readiness",
          "Integracion con secretos, permisos y controles operativos"
        ]
      },
      {
        slug: "cloud-security-foundations",
        icon: sharedServices.cloudSecurityFoundations,
        title: "Bases de seguridad en la nube",
        description:
          "Controles base de seguridad para AWS con foco en identidad, accesos, boundaries y configuraciones que reduzcan riesgo sin bloquear entregas.",
        bullets: [
          "IAM roles, boundaries, least privilege y revisiones de acceso",
          "OIDC federation, cross-account access y patrones de acceso seguros",
          "Secretos, observabilidad y guardrails fundamentales"
        ]
      },
      {
        slug: "cost-optimization",
        icon: sharedServices.costOptimization,
        title: "Optimización de costos",
        description:
          "Trabajo de costos con criterio operativo: reducir desperdicio, ordenar uso de recursos y mejorar visibilidad sin comprometer performance.",
        bullets: [
          "Revision de gasto con contexto tecnico y no solo financiero",
          "Right-sizing, limpieza de entornos y mejoras de arquitectura",
          "Mejor visibilidad para decisiones de capacidad y presupuesto"
        ]
      },
      {
        slug: "cloud-modernization",
        icon: sharedServices.cloudModernization,
        title: "Modernización cloud",
        description:
          "Modernizacion gradual para equipos atrapados en entornos fragiles, procesos manuales o workflows de despliegue que ya no escalan.",
        bullets: [
          "Limpieza de entornos heredados y responsabilidades confusas",
          "Migraciones y cambios por fases con validaciones realistas",
          "Estandarizacion operativa para reducir riesgo diario"
        ]
      },
      {
        slug: "ai-ready-infrastructure",
        icon: sharedServices.aiReadyInfrastructure,
        title: "Infraestructura para ML y MLOps",
        description:
          "Infraestructura en AWS preparada para cargas cercanas a IA: rutas de datos seguras, permisos claros y entornos listos para Bedrock y flujos de ML.",
        bullets: [
          "IAM, red y boundaries para datos, notebooks y artefactos de modelos",
          "Pipelines repetibles para entrenamiento, imagenes y promocion",
          "Bases listas para Bedrock y nuevos workloads de IA"
        ]
      }
    ]
  },
  en: {
    localeLabel: "EN",
    brandTagline: "Cloud Infrastructure · DevOps",
    meta: {
      home: {
        title: "GuatCloud | Cloud infrastructure, DevOps, and automation",
        description:
          "Cloud infrastructure, DevOps, and automation consulting for teams that need a clearer, safer, more maintainable foundation, with strong depth in AWS, Terraform, and CI/CD."
      },
      services: {
        title: "GuatCloud | Cloud infrastructure, AWS, and DevOps services",
        description:
          "Cloud infrastructure, AWS, Terraform, CI/CD, security, modernization, and AI-ready environments with a hands-on implementation focus."
      },
      about: {
        title: "About GuatCloud",
        description:
          "A boutique cloud infrastructure and DevOps consulting firm with strong AWS depth, focused on implementation, automation, and environments your team can keep operating."
      },
      contact: {
        title: "Contact GuatCloud",
        description:
          "Let’s talk about cloud infrastructure, AWS, Terraform, CI/CD, security, modernization, or AI-ready infrastructure."
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
      eyebrow: "Cloud Infrastructure · DevOps · Automation",
      title: "Clearer, more stable cloud infrastructure for growing teams.",
      description:
        "GuatCloud helps startups, SMBs, and product teams design, ship, secure, and improve cloud environments through real work in infrastructure, automation, and operations.",
      primaryCta: "Book a consultation",
      secondaryCta: "Explore services",
      highlightsTitle: "Best fit when",
      highlights: [
        "Your cloud environment grew faster than its foundations and access, environments, deployments, or ownership are no longer clear",
        "Terraform, CI/CD, or delivery systems exist, but they are brittle, manual, or difficult to maintain",
        "You want technical help working inside your stack, not advice trapped in a document"
      ],
      heroCardLead: "Three reasons teams bring us in.",
      valueEyebrow: "How we work",
      valueTitle: "Technical work in the layer that keeps operations moving.",
      valueDescription:
        "We work where friction usually accumulates: infrastructure, identity, networking, Terraform, pipelines, and operating standards. When the environment runs on AWS, that is where our deepest experience sits.",
      valueItems: [
        {
          title: "Cloud foundations with better structure",
          description:
            "We bring order to accounts, environments, networking, access, and ownership so the platform grows with fewer manual exceptions."
        },
        {
          title: "Maintainable Terraform and delivery",
          description:
            "We build reusable modules, pipelines, and deployment flows your team can keep operating and evolving after the engagement."
        },
        {
          title: "Security and operations with practical judgment",
          description:
            "We turn identity, permissions, secrets, cost, and operational improvements into clear decisions and real changes."
        }
      ],
      servicesEyebrow: "Services",
      servicesTitle: "Core capabilities",
      servicesDescription:
        "The practice spans cloud infrastructure, automation, baseline security, and delivery systems. AWS is the deepest specialization today, alongside Terraform and CI/CD.",
      featuredServiceSlugs: [
        "aws-consulting",
        "devops-platform-engineering",
        "infrastructure-as-code",
        "cicd-automation"
      ],
      servicesViewAllCta: "View all services",
      whyEyebrow: "Why GuatCloud",
      whyTitle: "From fragile cloud setups to environments your team can run with confidence.",
      whyDescription:
        "GuatCloud combines hands-on infrastructure, automation, and operations work with deep AWS experience where the environment calls for it.",
      processEyebrow: "Process",
      processTitle: "How engagements run",
      processDescription:
        "We start by understanding the current environment, prioritize what matters most, implement inside your stack, and close with stabilization and handoff.",
      finalEyebrow: "Next step",
      finalTitle: "Ready to review what your cloud environment needs now?",
      finalDescription:
        "If access, Terraform, CI/CD, deployments, cost, or core cloud foundations are creating friction, let’s talk. We can review context, priorities, and the next sensible technical step.",
      finalPrimary: "Book a consultation",
      finalSecondary: "Explore services",
      capabilityStrip: "Cloud foundations · Terraform · Delivery systems",
      heroDiagram: {
        band: "OPERATING LAYER",
        col1Title: "CLOUD",
        col1Sub: "network · identity",
        col2Title: "IAC",
        col2Sub: "Terraform · modules",
        col3Title: "DELIVERY",
        col3Sub: "build · deploy"
      }
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Cloud infrastructure and DevOps services, with strong AWS depth.",
      description:
        "GuatCloud works on cloud environments, Terraform, pipelines, security, cost, and modernization with a bias toward real implementation and durable improvement.",
      sideTitle: "What we solve",
      sideDescription:
        "Most teams do not need a full rebuild. They need better cloud foundations, stronger automation, and fewer costly mistakes in production.",
      catalogTitle: "Technical capabilities",
      catalogDescription:
        "From AWS Organizations and Control Tower to Terraform, CI/CD, IAM, VPC design, ECS, EKS, Lambda, and account onboarding: the technical work that keeps cloud from becoming a bottleneck."
    },
    aboutPage: {
      eyebrow: "About",
      title: "A boutique cloud infrastructure and DevOps firm with real AWS depth.",
      description:
        "GuatCloud was created by Jacobo Gonzalez to help teams execute better in cloud environments, with deep AWS specialization and a strong implementation bias.",
      storyTitle: "The practice",
      storyParagraphs: [
        "GuatCloud is founder-led, but built to operate as a real consulting company rather than a personal portfolio. The practice centers on cloud infrastructure, Terraform, CI/CD, baseline security, and the operating layer that keeps production environments stable; today, the deepest specialization is in AWS.",
        "Based in Guatemala, we work remotely with teams across the region and North America. The model is hands-on: changes in accounts, modules, pipelines, permissions, and configuration, with documentation and handoff so the client can keep operating."
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
      fitTitle: "Where we add the most value",
      fitItems: [
        "Startups that need senior AWS and DevOps experience before building a full internal platform team.",
        "SMBs and fintechs bringing order to multi-account AWS, access patterns, pipelines, and infrastructure ownership.",
        "Product teams that need better deployments, stronger cloud security, and more maintainable delivery systems without slowing engineering down.",
        "Organizations that want a regional technical partner with U.S. overlap and real implementation depth."
      ]
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Tell us what your cloud environment needs now.",
      description:
        "If you need help with cloud infrastructure, AWS, Terraform, CI/CD, security, modernization, or account onboarding, we can review context, fit, and the next sensible step.",
      detailsTitle: "Direct lines",
      detailsDescription:
        "Use the form for an initial conversation, or email directly if you already have scope, priorities, or requirements in mind.",
      emailLabel: "Email",
      calendarLabel: "Scheduling",
      calendarValue: "We coordinate by email; drop a few windows that work for you in the message.",
      availabilityLabel: "Availability",
      availabilityValue:
        "Fixed-scope projects and ongoing support. Base time zone: Guatemala (UTC-6), with flexibility for Central America and North America."
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
      companyLabel: "Company",
      contactLabel: "Contact",
      basedIn: "Guatemala · Remote across Central and North America."
    },
    process: [
      {
        step: "01",
        title: "Discover",
        description: "Review accounts, networking, IAM, Terraform, pipelines, and operational pain points to identify where risk and disorder are highest."
      },
      {
        step: "02",
        title: "Plan",
        description: "Define a phased plan with clear priorities across foundations, automation, security, deployments, or modernization."
      },
      {
        step: "03",
        title: "Ship",
        description: "Implement directly in your accounts and repositories with real changes across Terraform, IAM, pipelines, services, and configuration."
      },
      {
        step: "04",
        title: "Stabilize",
        description: "Close with hardening, documentation, and handoff so the team can operate with less dependency and fewer surprises."
      }
    ],
    why: [
      {
        icon: Waypoints,
        title: "Real depth in cloud foundations and AWS multi-account",
        description:
          "We work in environments that already need structure: accounts, networking, IAM, guardrails, and onboarding workflows. When it is AWS, that includes Organizations and Control Tower."
      },
      {
        icon: Network,
        title: "Automation designed to stay maintainable",
        description:
          "Terraform, GitHub Actions, Bitbucket Pipelines, CodePipeline, and CodeDeploy are implemented to reduce friction without leaving behind more operational debt."
      },
      {
        icon: Blocks,
        title: "Security and operations with production judgment",
        description:
          "From OIDC, cross-account access, and boundaries to cost, modernization, and Bedrock-ready environments, the approach stays concrete and operational."
      }
    ],
    services: [
      {
        slug: "aws-consulting",
        icon: sharedServices.awsConsulting,
        partnerLabel: "AWS",
        title: "AWS Consulting",
        description:
          "AWS environment design and implementation with real structure: multi-account setups, Control Tower, Organizations, account onboarding, and core services ready to scale.",
        bullets: [
          "Multi-account strategy, account factory style workflows, and new account onboarding",
          "Networking, IAM, VPC design, and core services aligned to workload needs",
          "Cloud adoption, migrations, and modernization with controlled rollout steps"
        ]
      },
      {
        slug: "devops-platform-engineering",
        icon: sharedServices.devopsPlatformEngineering,
        title: "DevOps & Platform Engineering",
        description:
          "Platform improvements that help engineering ship with less friction and more consistency, without adding unnecessary process overhead.",
        bullets: [
          "Operational standards, consistent environments, and better deployment paths",
          "Alignment between infrastructure, delivery workflows, and developer experience",
          "Shared tooling for operating AWS with less operational debt"
        ]
      },
      {
        slug: "infrastructure-as-code",
        icon: sharedServices.infrastructureAsCode,
        title: "Infrastructure as Code",
        description:
          "Production-minded Terraform with reusable modules, environment composition, reviewable change control, and foundations that stay maintainable.",
        bullets: [
          "Reusable modules and environment-oriented structure",
          "Refactoring click-ops and ad hoc scripts into auditable IaC",
          "Review and control flows for infrastructure changes"
        ]
      },
      {
        slug: "cicd-automation",
        icon: sharedServices.cicdAutomation,
        title: "CI/CD Automation",
        description:
          "Build, test, and deployment pipelines that reduce friction, improve release confidence, and leave the team with a clearer delivery process.",
        bullets: [
          "GitHub Actions, Bitbucket Pipelines, CodePipeline, and CodeDeploy",
          "Release automation, safe promotions, and rollback readiness",
          "Integration with secrets, permissions, and operational controls"
        ]
      },
      {
        slug: "cloud-security-foundations",
        icon: sharedServices.cloudSecurityFoundations,
        title: "Cloud Security Foundations",
        description:
          "Baseline AWS security controls focused on identity, access, boundaries, and configurations that reduce risk without blocking delivery.",
        bullets: [
          "IAM roles, boundaries, least privilege, and access review",
          "OIDC federation, cross-account access, and secure access patterns",
          "Secrets, observability, and foundational guardrails"
        ]
      },
      {
        slug: "cost-optimization",
        icon: sharedServices.costOptimization,
        title: "Cost Optimization",
        description:
          "Cost work with operational judgment: reduce waste, clean up usage, and improve visibility without trading away performance.",
        bullets: [
          "Spend review with engineering context, not finance-only reporting",
          "Right-sizing, environment cleanup, and architectural improvements",
          "Better visibility for planning capacity and budget decisions"
        ]
      },
      {
        slug: "cloud-modernization",
        icon: sharedServices.cloudModernization,
        title: "Cloud Modernization",
        description:
          "Incremental modernization for teams stuck with brittle environments, manual processes, or delivery workflows that no longer scale.",
        bullets: [
          "Cleaning up legacy environments and unclear ownership",
          "Migration and change plans with realistic validation steps",
          "Operational standardization to reduce day-to-day risk"
        ]
      },
      {
        slug: "ai-ready-infrastructure",
        icon: sharedServices.aiReadyInfrastructure,
        title: "ML & MLOps Infrastructure",
        description:
          "AWS infrastructure for AI-adjacent workloads: secure data paths, clear permissions, and environments ready for Bedrock and ML delivery flows.",
        bullets: [
          "IAM, networking, and boundaries for data, notebooks, and model artifacts",
          "Repeatable pipelines for training jobs, images, and promotion flows",
          "Foundations ready for Bedrock and new AI workloads"
        ]
      }
    ]
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
