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
    brandTagline: "AWS · Terraform · CI/CD",
    meta: {
      home: {
        title: "GuatCloud | AWS, Terraform y CI/CD para equipos en crecimiento",
        description:
          "Consultoria AWS y DevOps para equipos que necesitan entornos multi-account, Terraform, CI/CD y bases seguras que si funcionen en produccion."
      },
      services: {
        title: "GuatCloud | Servicios de AWS, Terraform y CI/CD",
        description:
          "AWS, Terraform, CI/CD, seguridad cloud y modernizacion con foco en implementacion real dentro de cuentas, repositorios y pipelines."
      },
      about: {
        title: "Sobre GuatCloud",
        description:
          "Firma boutique de AWS y DevOps enfocada en implementacion, automatizacion y entornos cloud que tu equipo puede operar sin depender de terceros."
      },
      contact: {
        title: "Contacto GuatCloud",
        description:
          "Conversemos sobre AWS, Terraform, CI/CD, seguridad cloud, modernizacion o infraestructura lista para IA."
      }
    },
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Enfoque",
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
      eyebrow: "AWS · Terraform · CI/CD",
      title: "Infraestructura AWS bien construida para equipos en crecimiento.",
      description:
        "GuatCloud ayuda a startups, pymes y equipos de producto a diseñar, automatizar, asegurar y mejorar entornos AWS con trabajo real en cuentas, Terraform y pipelines de entrega.",
      primaryCta: "Agendar consulta",
      secondaryCta: "Ver servicios",
      highlightsTitle: "Encaja mejor si",
      highlights: [
        "Tu AWS ya necesita mejor estructura entre cuentas, accesos, entornos y despliegues",
        "Terraform, CI/CD y automatizacion existen, pero hoy son fragiles o dificiles de mantener",
        "Buscas ayuda tecnica que implemente dentro de tu entorno, no solo recomendaciones"
      ],
      heroCardLead: "Tres razones por las que nos contratan en proyectos.",
      valueEyebrow: "Cómo trabajamos",
      valueTitle: "Implementacion real en cuentas, repositorios y pipelines.",
      valueDescription:
        "Trabajamos sobre la base que mas impacta la operacion diaria: AWS Organizations, Control Tower, Terraform, IAM, redes, CI/CD y un handoff tecnico claro.",
      valueItems: [
        {
          title: "AWS multi-account y bases cloud",
          description:
            "Disenamos cuentas, incorporacion de nuevas cuentas, guardrails, redes y accesos para que AWS crezca con estructura, no con excepciones manuales."
        },
        {
          title: "Terraform y entrega mantenible",
          description:
            "Construimos modulos reutilizables, pipelines y flujos de despliegue que el equipo pueda seguir operando despues."
        },
        {
          title: "Seguridad y operacion con criterio",
          description:
            "Aterrizamos IAM, OIDC, accesos cross-account, costos y mejoras operativas con decisiones claras, no con teoria vaga."
        }
      ],
      servicesEyebrow: "Servicios",
      servicesTitle: "Capacidades principales",
      servicesDescription:
        "AWS, Terraform, CI/CD, seguridad cloud, modernizacion y entornos listos para IA, con foco en implementacion practica.",
      featuredServiceSlugs: [
        "aws-consulting",
        "devops-platform-engineering",
        "infrastructure-as-code",
        "cicd-automation"
      ],
      servicesViewAllCta: "Ver catálogo de servicios",
      whyEyebrow: "Enfoque",
      whyTitle: "Experiencia practica en la capa que sostiene produccion.",
      whyDescription:
        "GuatCloud esta construido alrededor de trabajo real en AWS y DevOps: multi-account, Terraform, redes, CI/CD, seguridad base, modernizacion y operacion.",
      processEyebrow: "Proceso",
      processTitle: "Cómo avanzamos en cada proyecto",
      processDescription:
        "Empezamos por entender el entorno actual, priorizamos lo critico, implementamos dentro de tu stack y cerramos con estabilizacion y traspaso.",
      finalEyebrow: "Siguiente paso",
      finalTitle: "¿Revisamos que necesita hoy tu infraestructura AWS?",
      finalDescription:
        "Si hoy hay friccion en cuentas, IAM, Terraform, CI/CD, despliegues o seguridad cloud, conversemos. Revisamos contexto, prioridades y el siguiente paso tecnico mas razonable.",
      finalPrimary: "Agendar consulta",
      finalSecondary: "Ver servicios",
      capabilityStrip: "AWS foundations · Terraform · Delivery systems",
      heroDiagram: {
        band: "BASE CLOUD",
        col1Title: "AWS",
        col1Sub: "cuentas · IAM",
        col2Title: "IAC",
        col2Sub: "Terraform · modulos",
        col3Title: "CI/CD",
        col3Sub: "build · deploy"
      }
    },
    servicesPage: {
      eyebrow: "Servicios",
      title: "Servicios de AWS y DevOps para equipos que necesitan una base cloud mas seria.",
      description:
        "GuatCloud trabaja en cuentas AWS, Terraform, pipelines, seguridad, costos y modernizacion con foco en implementacion real y mejoras que se sostienen.",
      sideTitle: "Qué resolvemos",
      sideDescription:
        "La mayoria no necesita rehacer todo. Necesita ordenar las bases cloud, automatizar mejor y reducir errores costosos en produccion.",
      catalogTitle: "Capacidades técnicas",
      catalogDescription:
        "De AWS Organizations y Control Tower a Terraform, CI/CD, IAM, VPC, ECS, EKS, Lambda e incorporacion de cuentas: trabajo tecnico que evita que la nube se vuelva un cuello de botella."
    },
    aboutPage: {
      eyebrow: "Enfoque",
      title: "Una firma boutique de AWS y DevOps con experiencia real de implementacion.",
      description:
        "GuatCloud es una consultora fundada por Jacobo Gonzalez para ayudar a equipos que necesitan ejecutar mejor en AWS, no solo recibir recomendaciones.",
      storyTitle: "Nuestra forma de trabajar",
      storyParagraphs: [
        "GuatCloud es una firma liderada por su fundador, pero pensada como empresa, no como portafolio personal. El trabajo gira alrededor de cuentas AWS, Control Tower, Organizations, Terraform, IAM, networking, CI/CD y la operacion que sostiene ambientes reales.",
        "La practica nace desde Guatemala y trabaja de forma remota con equipos en la region y Norteamerica. El enfoque es practico: cambios en cuentas, modulos, pipelines y configuracion, con documentacion y traspaso para que el cliente pueda seguir operando."
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
      fitTitle: "Donde generamos mas valor",
      fitItems: [
        "Startups que necesitan experiencia senior en AWS y DevOps antes de formar un equipo interno de plataforma.",
        "Pymes y fintechs que estan ordenando entornos multi-account, accesos, pipelines y responsabilidad de infraestructura.",
        "Equipos de producto que necesitan mejorar despliegues, seguridad cloud y mantenibilidad sin frenar entregas.",
        "Organizaciones que valoran una consultora tecnica bilingue en la region, con overlap hacia EE. UU. y trabajo real de implementacion."
      ]
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Contanos que necesita hoy tu entorno cloud.",
      description:
        "Si necesitas apoyo en AWS, Terraform, CI/CD, seguridad cloud, modernizacion o incorporacion de cuentas, revisamos contexto, encaje y siguiente paso.",
      detailsTitle: "Canales directos",
      detailsDescription:
        "Usa el formulario para una primera conversacion, o escribe por correo si ya tienes alcance, prioridades o requisitos definidos.",
      emailLabel: "Correo",
      calendarLabel: "Agenda",
      calendarValue: "Coordinamos por correo; indica en el mensaje algunas franjas horarias que te funcionen.",
      availabilityLabel: "Disponibilidad",
      availabilityValue:
        "Proyectos por alcance definido y acompanamiento continuo. Zona horaria base Guatemala (UTC-6), con flexibilidad para equipos en Centroamerica y Norteamerica."
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
        "AWS, Terraform, CI/CD y bases seguras para equipos que necesitan una base cloud mas clara, estable y mantenible.",
      basedIn:
        "Guatemala · Remoto en Centroamérica y Norteamérica.",
      responseTime: "Por lo general respondemos en ~1 día hábil."
    },
    process: [
      {
        step: "01",
        title: "Descubrir",
        description:
          "Revisamos cuentas, red, IAM, Terraform, pipelines y dolores operativos para entender donde esta el mayor riesgo o desorden."
      },
      {
        step: "02",
        title: "Planificar",
        description:
          "Definimos un plan por fases con prioridades claras: bases cloud, automatizacion, seguridad, despliegues o modernizacion."
      },
      {
        step: "03",
        title: "Implementar",
        description:
          "Implementamos dentro de tus cuentas y repositorios con cambios reales en Terraform, IAM, pipelines, servicios y configuracion."
      },
      {
        step: "04",
        title: "Estabilizar",
        description:
          "Cerramos con endurecimiento, documentacion y handoff para que el equipo pueda operar con menos dependencia y menos sorpresas."
      }
    ],
    why: [
      {
        icon: Waypoints,
        title: "Experiencia real en AWS multi-account y bases cloud",
        description:
          "Hemos trabajado con AWS Organizations, Control Tower, incorporacion de cuentas, redes, IAM y entornos que necesitan estructura desde la base."
      },
      {
        icon: Network,
        title: "Automatizacion y entrega pensadas para mantenerse",
        description:
          "Terraform, GitHub Actions, Bitbucket Pipelines, CodePipeline y CodeDeploy se implementan con foco en repetibilidad, seguridad y velocidad de entrega."
      },
      {
        icon: Blocks,
        title: "Seguridad, operacion y modernizacion con criterio practico",
        description:
          "Desde OIDC, accesos cross-account y boundaries hasta optimizacion de costos, modernizacion y entornos listos para Bedrock, el enfoque es siempre operativo y concreto."
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
    brandTagline: "AWS · Terraform · CI/CD",
    meta: {
      home: {
        title: "GuatCloud | AWS, Terraform and CI/CD for growing teams",
        description:
          "AWS and DevOps consulting for teams that need multi-account AWS, Terraform, CI/CD, and secure cloud foundations that actually hold up in production."
      },
      services: {
        title: "GuatCloud | AWS, Terraform and CI/CD services",
        description:
          "AWS, Terraform, CI/CD, cloud security, modernization, and AI-ready infrastructure with a hands-on implementation focus."
      },
      about: {
        title: "About GuatCloud",
        description:
          "A boutique AWS and DevOps consulting firm focused on implementation, automation, and cloud environments your team can keep operating."
      },
      contact: {
        title: "Contact GuatCloud",
        description:
          "Let’s talk about AWS, Terraform, CI/CD, cloud security, modernization, or AI-ready infrastructure."
      }
    },
    nav: {
      home: "Home",
      services: "Services",
      about: "Approach",
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
      eyebrow: "AWS · Terraform · CI/CD",
      title: "Well-built AWS infrastructure for teams in growth mode.",
      description:
        "GuatCloud helps startups, SMBs, and product teams design, automate, secure, and improve AWS environments with real work in accounts, Terraform, and delivery pipelines.",
      primaryCta: "Book a consultation",
      secondaryCta: "View services",
      highlightsTitle: "Best fit when",
      highlights: [
        "Your AWS environment needs better structure across accounts, access, environments, and deployments",
        "Terraform, CI/CD, and automation exist, but they are brittle or difficult to maintain",
        "You want technical help that implements inside your environment, not advice only"
      ],
      heroCardLead: "Three reasons teams bring us in.",
      valueEyebrow: "How we work",
      valueTitle: "Real implementation in accounts, repositories, and pipelines.",
      valueDescription:
        "We work on the layer that most affects daily operations: AWS Organizations, Control Tower, Terraform, IAM, networking, CI/CD, and clear technical handoff.",
      valueItems: [
        {
          title: "AWS multi-account foundations",
          description:
            "We design accounts, onboarding, guardrails, networking, and access so AWS grows with structure instead of manual exceptions."
        },
        {
          title: "Maintainable Terraform and delivery",
          description:
            "We build reusable modules, pipelines, and deployment flows your team can continue operating after the engagement."
        },
        {
          title: "Security and operations with practical judgment",
          description:
            "We translate IAM, OIDC, cross-account access, cost, and operational improvements into clear decisions instead of vague theory."
        }
      ],
      servicesEyebrow: "Services",
      servicesTitle: "Core capabilities",
      servicesDescription:
        "AWS, Terraform, CI/CD, cloud security, modernization, and AI-ready environments, all delivered with a practical implementation mindset.",
      featuredServiceSlugs: [
        "aws-consulting",
        "devops-platform-engineering",
        "infrastructure-as-code",
        "cicd-automation"
      ],
      servicesViewAllCta: "See full service catalog",
      whyEyebrow: "Approach",
      whyTitle: "Hands-on experience in the layer that keeps production running.",
      whyDescription:
        "GuatCloud is built around real AWS and DevOps work: multi-account environments, Terraform, networking, CI/CD, baseline security, modernization, and operations.",
      processEyebrow: "Process",
      processTitle: "How engagements run",
      processDescription:
        "We start by understanding the current environment, prioritize what matters most, implement inside your stack, and close with stabilization and handoff.",
      finalEyebrow: "Next step",
      finalTitle: "Ready to review what your AWS environment needs now?",
      finalDescription:
        "If accounts, IAM, Terraform, CI/CD, deployments, or cloud security are creating friction, let’s talk. We can review context, priorities, and the next sensible technical step.",
      finalPrimary: "Book a consultation",
      finalSecondary: "Browse services",
      capabilityStrip: "AWS foundations · Terraform · Delivery systems",
      heroDiagram: {
        band: "CLOUD FOUNDATION",
        col1Title: "AWS",
        col1Sub: "accounts · IAM",
        col2Title: "IAC",
        col2Sub: "Terraform · modules",
        col3Title: "CI/CD",
        col3Sub: "build · deploy"
      }
    },
    servicesPage: {
      eyebrow: "Services",
      title: "AWS and DevOps services for teams that need a more serious cloud foundation.",
      description:
        "GuatCloud works on AWS accounts, Terraform, pipelines, security, cost, and modernization with a bias toward real implementation and durable improvement.",
      sideTitle: "What we solve",
      sideDescription:
        "Most teams do not need a full rebuild. They need better foundations, stronger automation, and fewer costly mistakes in production.",
      catalogTitle: "Technical capabilities",
      catalogDescription:
        "From AWS Organizations and Control Tower to Terraform, CI/CD, IAM, VPC design, ECS, EKS, Lambda, and account onboarding: the technical work that keeps cloud from becoming a bottleneck."
    },
    aboutPage: {
      eyebrow: "Approach",
      title: "A boutique AWS and DevOps firm with real implementation depth.",
      description:
        "GuatCloud was created by Jacobo Gonzalez to help teams execute better in AWS, not just receive recommendations.",
      storyTitle: "The practice",
      storyParagraphs: [
        "GuatCloud is founder-led, but built to operate as a real consulting company rather than a personal portfolio. Engagements center on AWS accounts, Control Tower, Organizations, Terraform, IAM, networking, CI/CD, and the operational detail that keeps environments stable.",
        "Based in Guatemala, we work remotely with teams across the region and North America. The model is hands-on: changes in accounts, modules, pipelines, and configuration, with documentation and handoff so the client can keep operating."
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
        "Organizations that want a bilingual regional consulting partner with U.S. overlap and real implementation depth."
      ]
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Tell us what your cloud environment needs now.",
      description:
        "If you need help with AWS, Terraform, CI/CD, cloud security, modernization, or account onboarding, we can review context, fit, and the next sensible step.",
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
      focusLabel: "Practice",
      coverageLabel: "Coverage",
      contactLabel: "Contact",
      description:
        "AWS, Terraform, CI/CD, and secure foundations for teams that need a cloud environment that is clearer, more stable, and easier to operate.",
      basedIn: "Guatemala · Remote across Central and North America.",
      responseTime: "We usually reply within one business day."
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
        title: "Real experience with AWS multi-account and cloud foundations",
        description:
          "We have worked with AWS Organizations, Control Tower, account onboarding, networking, IAM, and environments that need structure from the base layer up."
      },
      {
        icon: Network,
        title: "Automation and delivery systems built to last",
        description:
          "Terraform, GitHub Actions, Bitbucket Pipelines, CodePipeline, and CodeDeploy are implemented with repeatability, security, and delivery speed in mind."
      },
      {
        icon: Blocks,
        title: "Security, operations, and modernization with practical judgment",
        description:
          "From OIDC, cross-account access, and security boundaries to cost optimization, modernization, and Bedrock-ready environments, the work stays operational and concrete."
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
