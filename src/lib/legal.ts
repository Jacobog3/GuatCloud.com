import type { Locale } from "@/types/locale";
import { siteConfig } from "@/lib/site";

/** ISO date for legal pages (update when content changes). */
export const legalContentLastUpdated = "2026-03-22";

export type LegalPageId = "privacy" | "terms";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

const interpolate = (text: string) =>
  text.replace(/\{\{siteUrl\}\}/g, siteConfig.url).replace(/\{\{email\}\}/g, siteConfig.email);

function mapSections(sections: LegalSection[]): LegalSection[] {
  return sections.map((s) => ({
    heading: s.heading,
    paragraphs: s.paragraphs.map((p) => interpolate(p))
  }));
}

const privacyEs: LegalSection[] = [
  {
    heading: "Responsable del tratamiento",
    paragraphs: [
      `El responsable del tratamiento de los datos personales recopilados a través de este sitio es ${siteConfig.legalName}, con correo de contacto {{email}}. El sitio web está disponible en {{siteUrl}}.`
    ]
  },
  {
    heading: "Datos que tratamos",
    paragraphs: [
      "A través del formulario de contacto podemos recopilar: nombre, correo electrónico, empresa (opcional), tipo de necesidad o servicio, y el mensaje que envíes.",
      "También se pueden registrar datos técnicos habituales en la conexión (por ejemplo dirección IP y datos del navegador) en los registros del servidor o de la plataforma de alojamiento, con fines de seguridad y diagnóstico."
    ]
  },
  {
    heading: "Finalidad y base legal",
    paragraphs: [
      "Tratamos los datos del formulario para atender tu solicitud, responder a tu consulta y, en su caso, mantener comunicaciones relacionadas con un posible proyecto profesional.",
      "La base legal es tu consentimiento al enviar el formulario y, cuando proceda, la relación precontractual o contractual derivada de una consultoría."
    ]
  },
  {
    heading: "Conservación",
    paragraphs: [
      "Conservamos los mensajes de contacto el tiempo necesario para atender la consulta y, si se inicia una relación comercial, durante la vigencia del encargo y los plazos legales aplicables. Transcurridos esos plazos, los datos se eliminan o anonimizan salvo obligación legal de conservación."
    ]
  },
  {
    heading: "Destinatarios y transferencias",
    paragraphs: [
      "No vendemos tus datos personales. Podemos utilizar proveedores de infraestructura (por ejemplo alojamiento, correo o herramientas de despliegue) que actúen como encargados del tratamiento bajo instrucciones y medidas contractuales adecuadas.",
      "Si algún proveedor tratara datos fuera de tu país, aplicaremos las garantías previstas por la normativa aplicable cuando corresponda."
    ]
  },
  {
    heading: "Tus derechos",
    paragraphs: [
      "Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad cuando la ley lo permita, así como retirar el consentimiento en cualquier momento, escribiendo a {{email}}.",
      "También puedes presentar una reclamación ante la autoridad de protección de datos que corresponda."
    ]
  },
  {
    heading: "Cookies y tecnologías similares",
    paragraphs: [
      "Este sitio puede usar cookies o almacenamiento local estrictamente necesarios para el funcionamiento (por ejemplo preferencia de idioma o seguridad). Si en el futuro se incorporaran analíticas o marketing, se actualizará esta información y, cuando sea obligatorio, se solicitará consentimiento."
    ]
  },
  {
    heading: "Cambios",
    paragraphs: [
      "Podemos actualizar esta política para reflejar cambios legales o del sitio. La fecha de última actualización se indica al inicio del documento."
    ]
  }
];

const privacyEn: LegalSection[] = [
  {
    heading: "Data controller",
    paragraphs: [
      `The controller of personal data collected through this website is ${siteConfig.legalName}, contact email {{email}}. The website is available at {{siteUrl}}.`
    ]
  },
  {
    heading: "Data we process",
    paragraphs: [
      "Through the contact form we may collect: name, email, company (optional), service or need, and your message.",
      "Standard technical connection data (such as IP address and browser information) may also appear in server or hosting logs for security and diagnostics."
    ]
  },
  {
    heading: "Purpose and legal basis",
    paragraphs: [
      "We use contact form data to handle your request, respond to your inquiry, and communicate about a potential professional engagement when relevant.",
      "The legal basis is your consent when submitting the form and, where applicable, pre-contractual or contractual steps related to consulting services."
    ]
  },
  {
    heading: "Retention",
    paragraphs: [
      "We keep contact messages as long as needed to respond and, if a commercial relationship starts, for the duration of the engagement and any statutory retention periods. After that, data is deleted or anonymized unless a longer retention is required by law."
    ]
  },
  {
    heading: "Recipients and transfers",
    paragraphs: [
      "We do not sell your personal data. We may use infrastructure providers (hosting, email, deployment tools) as processors under appropriate agreements.",
      "If any processing involves transfers outside your country, we apply safeguards required by applicable law where needed."
    ]
  },
  {
    heading: "Your rights",
    paragraphs: [
      "You may exercise rights of access, rectification, erasure, objection, restriction, and portability where applicable, and withdraw consent at any time by writing to {{email}}.",
      "You may also lodge a complaint with your local data protection authority."
    ]
  },
  {
    heading: "Cookies and similar technologies",
    paragraphs: [
      "The site may use cookies or local storage strictly necessary for operation (for example language preference or security). If analytics or marketing tools are added later, this policy will be updated and consent obtained where required."
    ]
  },
  {
    heading: "Changes",
    paragraphs: [
      "We may update this policy to reflect legal or site changes. The last updated date is shown at the top of this page."
    ]
  }
];

const termsEs: LegalSection[] = [
  {
    heading: "Aceptación",
    paragraphs: [
      "Al acceder y usar este sitio web aceptas estos términos. Si no estás de acuerdo, no uses el sitio."
    ]
  },
  {
    heading: "Información del sitio",
    paragraphs: [
      `El sitio {{siteUrl}} presenta información sobre los servicios de ${siteConfig.legalName}. El contenido tiene carácter informativo y no sustituye un acuerdo comercial por escrito.`
    ]
  },
  {
    heading: "Propiedad intelectual",
    paragraphs: [
      "Los textos, diseño, marcas y demás contenidos del sitio están protegidos por la legislación aplicable. No se concede licencia para reproducirlos con fines comerciales sin autorización previa."
    ]
  },
  {
    heading: "Enlaces externos",
    paragraphs: [
      "El sitio puede incluir enlaces a terceros. No somos responsables del contenido ni de las prácticas de privacidad de esos sitios."
    ]
  },
  {
    heading: "Limitación de responsabilidad",
    paragraphs: [
      "El sitio se ofrece “tal cual”. En la medida permitida por la ley, no garantizamos que el sitio esté libre de errores o interrupciones ni que el contenido sea exhaustivo para decisiones técnicas o de negocio.",
      "Nada en este sitio constituye asesoramiento legal, fiscal o de inversiones."
    ]
  },
  {
    heading: "Ley aplicable",
    paragraphs: [
      "Salvo que la normativa imperativa disponga lo contrario, estos términos se rigen por las leyes de la República de Guatemala. Los tribunales de Guatemala tendrán competencia para resolver las controversias que puedan derivarse, sin perjuicio de lo que corresponda cuando el usuario sea consumidor en otro país."
    ]
  },
  {
    heading: "Contacto",
    paragraphs: [`Para consultas sobre estos términos: {{email}}.`]
  }
];

const termsEn: LegalSection[] = [
  {
    heading: "Acceptance",
    paragraphs: [
      "By accessing and using this website you agree to these terms. If you do not agree, do not use the site."
    ]
  },
  {
    heading: "Website information",
    paragraphs: [
      `The site at {{siteUrl}} describes services offered by ${siteConfig.legalName}. Content is informational and does not replace a written commercial agreement.`
    ]
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "Text, design, trademarks, and other site content are protected by applicable law. No license is granted to copy or use them for commercial purposes without prior authorization."
    ]
  },
  {
    heading: "External links",
    paragraphs: [
      "The site may link to third-party websites. We are not responsible for their content or privacy practices."
    ]
  },
  {
    heading: "Disclaimer of liability",
    paragraphs: [
      "The site is provided “as is.” To the fullest extent permitted by law, we do not warrant that the site will be error-free or uninterrupted or that content is complete for technical or business decisions.",
      "Nothing on this site constitutes legal, tax, or investment advice."
    ]
  },
  {
    heading: "Governing law",
    paragraphs: [
      "Unless mandatory law provides otherwise, these terms are governed by the laws of the Republic of Guatemala. Courts in Guatemala shall have jurisdiction over related disputes, without prejudice to mandatory consumer protections in your country of residence where applicable."
    ]
  },
  {
    heading: "Contact",
    paragraphs: [`Questions about these terms: {{email}}.`]
  }
];

function legalSiteHost(): string {
  try {
    return new URL(siteConfig.url).host;
  } catch {
    return "guatcloud.com";
  }
}

export function getLegalMeta(locale: Locale, id: LegalPageId) {
  const host = legalSiteHost();
  const meta = {
    es: {
      privacy: {
        title: "Política de privacidad | GuatCloud",
        description: `Cómo tratamos los datos personales cuando te pones en contacto con GuatCloud a través de ${host}.`
      },
      terms: {
        title: "Términos de uso | GuatCloud",
        description: "Condiciones de uso del sitio web de GuatCloud."
      }
    },
    en: {
      privacy: {
        title: "Privacy Policy | GuatCloud",
        description: `How GuatCloud processes personal data when you contact us via ${host}.`
      },
      terms: {
        title: "Terms of Use | GuatCloud",
        description: "Terms governing use of the GuatCloud website."
      }
    }
  } as const;
  return meta[locale][id];
}

export function getLegalSections(locale: Locale, id: LegalPageId): LegalSection[] {
  const raw =
    id === "privacy"
      ? locale === "es"
        ? privacyEs
        : privacyEn
      : locale === "es"
        ? termsEs
        : termsEn;
  return mapSections(raw);
}

export function getLegalDisclaimer(locale: Locale): string {
  return locale === "es"
    ? "Este documento es informativo. Para asesoría legal específica consulta a un profesional. Última actualización:"
    : "This document is informational. For legal advice specific to your situation, consult a qualified professional. Last updated:";
}
