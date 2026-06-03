import { useEffect, useState } from "react";
import smartCity1 from "../../assets/images/smart-city-1.jpg";
import smartCity2 from "../../assets/images/smart-city-2.jpg";
import smartCity3 from "../../assets/images/smart-city-3.jpg";

import DataCenter1 from "../../assets/images/Data-Center-1.jpg";
import DataCenter2 from "../../assets/images/Data-Center-2.jpg";
import DataCenter3 from "../../assets/images/Data-Center-3.jpg";

import Surveillance1 from "../../assets/images/Surveillance-1.jpg";
import Surveillance2 from "../../assets/images/Surveillance-2.jpg";
import Surveillance3 from "../../assets/images/Surveillance-3.jpg";

import AccessControl1 from "../../assets/images/Access-Control-1.jpg";
import AccessControl2 from "../../assets/images/Access-control2.jpg";
import AccessControl3 from "../../assets/images/Access-Control-3.jpg";

import controlcenter1 from "../../assets/images/control-center-1.jpg";
import controlcenter2 from "../../assets/images/control-center-2.jpg";
import controlcenter3 from "../../assets/images/control-center-3.jpg";



import criticalsecurity1 from "../../assets/images/critical-security-1.jpg";
import criticalsecurity2 from "../../assets/images/critical-security-2.jpg";
import criticalsecurit3 from "../../assets/images/control-center-3.jpg";

import defaultImage from "../../assets/images/allaithbuilding.jpg";

type CompanyField = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: JSX.Element;
  images: string[];
};

const createFieldIcon = (path: string) => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <path
      d={path}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const companyFields: CompanyField[] = [
  {
    id: "smart-city",
    title: "Smart City Solutions",
    subtitle: "حلول المدن الذكية",
    description:
      "Comprehensive solutions for building secure and intelligent cities, integrating advanced surveillance, traffic management, and public safety systems to enhance urban living.",
    details: [
      "We design integrated smart city environments that connect surveillance, traffic systems, public safety platforms, and city-wide monitoring into one intelligent infrastructure.",
      "Our solutions help municipalities and organizations improve visibility, incident response, citizen safety, and operational efficiency across urban environments.",
      "AL-LAITH supports smart city projects from planning and system architecture to implementation, integration, monitoring, and long-term technical support.",
    ],
   images: [smartCity1, smartCity2, smartCity3],
    icon: createFieldIcon("M4 20V9l8-5 8 5v11M8 20v-7h8v7M9 9h.01M12 9h.01M15 9h.01"),
  },
  {
    id: "data-center",
    title: "Data Center Development",
    subtitle: "تطوير مراكز البيانات",
    description:
      "Design and implementation of state-of-the-art data centers, delivering secure, scalable, and energy-efficient infrastructure to support critical operations.",
    details: [
      "We deliver secure and scalable data center environments designed to support mission-critical systems, enterprise workloads, and high-availability operations.",
      "Our work includes infrastructure planning, power systems, cooling, racks, structured cabling, network rooms, monitoring, and operational continuity.",
      "Every data center project is built with reliability, security, performance, and future expansion in mind.",
    ],
   images: [DataCenter1, DataCenter2, DataCenter3],
    icon: createFieldIcon("M4 6h16M4 12h16M4 18h16M7 6v12M17 6v12"),
  },
  {
    id: "ai-surveillance",
    title: "AI-Powered Surveillance Systems",
    subtitle: "أنظمة المراقبة المدعومة بالذكاء الاصطناعي",
    description:
      "Advanced surveillance systems with AI capabilities for facial recognition, license plate detection, and anomaly tracking — ensuring real-time security and efficiency.",
    details: [
      "We implement AI surveillance systems that support facial recognition, license plate recognition, people counting, behavior analysis, and anomaly detection.",
      "These systems help organizations detect threats faster, reduce manual monitoring, and improve security operations in real time.",
      "AL-LAITH integrates cameras, analytics servers, monitoring software, storage, and control rooms into one complete surveillance ecosystem.",
    ],
      images: [Surveillance1, Surveillance2, Surveillance3],

    icon: createFieldIcon("M4 8.5h10.5a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H4v-7ZM17.5 12H21M8 12h.01M12 12h.01"),
  },
  {
    id: "access-control",
    title: "Integrated Access Control",
    subtitle: "أنظمة التحكم بالدخول المتكاملة",
    description:
      "Seamlessly integrated access control systems with biometric and facial recognition technologies to safeguard facilities and manage entry points effectively.",
    details: [
      "We design and deploy access control systems for buildings, restricted areas, gates, offices, institutions, and high-security facilities.",
      "Our solutions include biometric terminals, facial recognition, cards, barriers, turnstiles, attendance systems, and centralized permission management.",
      "The systems can be integrated with CCTV, fire alarm, visitor management, and command center platforms.",
    ],
      images: [AccessControl1, AccessControl2, AccessControl3],

    icon: createFieldIcon("M5 11V8a7 7 0 0 1 14 0v3M6 11h12v9H6v-9ZM12 15v2"),
  },
  {
    id: "command-control",
    title: "Command and Control Centers",
    subtitle: "مراكز القيادة والسيطرة",
    description:
      "Customized command and control centers equipped with video walls, real-time data visualization, and centralized monitoring for mission-critical operations.",
    details: [
      "We build command and control centers that centralize monitoring, decision-making, communication, and emergency response.",
      "Our solutions include video walls, operator consoles, control software, live dashboards, data visualization, and integration with multiple field systems.",
      "These centers are designed for government, security, transportation, airports, smart cities, and critical infrastructure operations.",
    ],
      images: [controlcenter1, controlcenter2, controlcenter3],
    icon: createFieldIcon("M4 5h16v10H4V5ZM8 19h8M12 15v4M7 9h3M14 9h3"),
  },
  {
    id: "critical-security",
    title: "Perimeter & Critical Infrastructure Security",
    subtitle: "أمن المحيط والبنى التحتية الحرجة",
    description:
      "Robust security solutions for critical infrastructure, including perimeter monitoring, intrusion detection, and thermal imaging for enhanced protection.",
    details: [
      "We secure critical facilities using perimeter surveillance, intrusion detection, thermal cameras, radar-based detection, and intelligent alarm verification.",
      "Our systems help protect oil and gas facilities, government sites, industrial zones, airports, warehouses, and sensitive operational areas.",
      "AL-LAITH delivers layered security solutions that combine field sensors, cameras, analytics, monitoring rooms, and response workflows.",
    ],
         images: [criticalsecurity1, criticalsecurity2, criticalsecurit3],

    icon: createFieldIcon("M12 3 20 7v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4ZM9 12l2 2 4-5"),
  },
  {
    id: "smart-building",
    title: "Smart Building Automation",
    subtitle: "أتمتة المباني الذكية",
    description:
      "Integrated smart building systems featuring IoT-based automation for lighting, energy management, and security to enhance operational efficiency.",
    details: [
      "We create smart building environments where lighting, energy, access, security, monitoring, and automation systems work together.",
      "Our solutions improve operational efficiency, reduce energy consumption, and give facility managers better visibility and control.",
      "Systems can be customized for commercial buildings, institutions, hospitals, education facilities, and enterprise environments.",
    ],
    images: [
      "/images/fields/smart-building-1.jpg",
      "/images/fields/smart-building-2.jpg",
      "/images/fields/smart-building-3.jpg",
    ],
    icon: createFieldIcon("M6 20V4h12v16M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01M10 20v-4h4v4"),
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & IT Infrastructure Protection",
    subtitle: "الأمن السيبراني وحماية البنية التحتية التقنية",
    description:
      "Comprehensive cybersecurity solutions to safeguard sensitive data, IT networks, and systems against evolving digital threats.",
    details: [
      "We help organizations protect networks, servers, endpoints, applications, and sensitive data from modern cyber threats.",
      "Our work covers security assessment, firewall solutions, endpoint protection, secure network architecture, monitoring, and incident response readiness.",
      "AL-LAITH focuses on building resilient IT environments that support business continuity and secure digital transformation.",
    ],
    images: [
      "/images/fields/cybersecurity-1.jpg",
      "/images/fields/cybersecurity-2.jpg",
      "/images/fields/cybersecurity-3.jpg",
    ],
    icon: createFieldIcon("M12 3 20 7v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4ZM9 12h6M12 9v6"),
  },
  {
    id: "airport-security",
    title: "Airport Security & Operations",
    subtitle: "أمن وتشغيل المطارات",
    description:
      "Specialized solutions for airports, offering advanced surveillance, access control, baggage screening, and traveler safety systems.",
    details: [
      "We provide specialized airport security and operations solutions covering passenger safety, restricted access, surveillance, screening, and centralized monitoring.",
      "Our systems support CCTV, access control, baggage inspection, gates, control rooms, network infrastructure, and operational safety.",
      "AL-LAITH helps airports improve security readiness, operational visibility, and traveler protection through integrated technology systems.",
    ],
    images: [
      "/images/fields/airport-security-1.jpg",
      "/images/fields/airport-security-2.jpg",
      "/images/fields/airport-security-3.jpg",
    ],
    icon: createFieldIcon("M2 16l20-6-20-6 4 6-4 6ZM8 13v5M16 13v5M6 20h12"),
  },
  {
    id: "power-solutions",
    title: "Renewable Energy & Power Solutions",
    subtitle: "حلول الطاقة والطاقة المتجددة",
    description:
      "Innovative power solutions, including renewable energy integration and UPS systems, to ensure uninterrupted operations and energy efficiency.",
    details: [
      "We deliver power solutions that support continuous operation for security, IT, networking, and mission-critical environments.",
      "Our work includes UPS systems, backup power, renewable energy integration, power distribution, and energy efficiency planning.",
      "These solutions help organizations reduce downtime, protect sensitive equipment, and improve operational reliability.",
    ],
    images: [
      "/images/fields/power-solutions-1.jpg",
      "/images/fields/power-solutions-2.jpg",
      "/images/fields/power-solutions-3.jpg",
    ],
    icon: createFieldIcon("M13 2 4 14h7l-1 8 10-13h-7l1-7Z"),
  },
  {
    id: "network-solutions",
    title: "Network Solutions",
    subtitle: "حلول الشبكات",
    description:
      "Comprehensive networking solutions, including structured cabling, wireless systems, and high-performance infrastructure for seamless connectivity.",
    details: [
      "We design and implement reliable network infrastructures for organizations that need secure, fast, and scalable connectivity.",
      "Our services include structured cabling, fiber optics, switching, routing, wireless systems, network rooms, and infrastructure documentation.",
      "AL-LAITH builds networks that support surveillance, access control, applications, data centers, smart buildings, and enterprise operations.",
    ],
    images: [
      "/images/fields/network-solutions-1.jpg",
      "/images/fields/network-solutions-2.jpg",
      "/images/fields/network-solutions-3.jpg",
    ],
    icon: createFieldIcon("M12 4v6M6 20v-4a6 6 0 0 1 12 0v4M4 10h16M6 10a6 6 0 0 1 12 0"),
  },
];

export default function CompanyFieldsSection() {

const [activeField, setActiveField] = useState<CompanyField | null>(null);
const [isClosing, setIsClosing] = useState(false);
  useEffect(() => {
  if (!activeField) return;

  const originalBodyOverflow = document.body.style.overflow;
  const originalHtmlOverflow = document.documentElement.style.overflow;

  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = originalBodyOverflow;
    document.documentElement.style.overflow = originalHtmlOverflow;
  };
}, [activeField]);

const closeModal = () => {
  setIsClosing(true);

  window.setTimeout(() => {
    setActiveField(null);
    setIsClosing(false);
  }, 500);
};
  return (
    <>
      <section className="company-fields-section scroll-reveal">
        <div className="company-fields-bg"></div>

        <div className="company-fields-inner">
          <div className="company-fields-header">
            <p className="kicker">Company Fields</p>

            <h2 className="company-fields-title">
            Advanced technology fields built for modern infrastructure
            </h2>

            <p className="company-fields-copy">
               AL-LAITH delivers integrated solutions across security, infrastructure,
  automation, AI surveillance, command centers, networking, and mission-critical
  operations
            </p>
          </div>

          <div className="company-fields-grid">
            {companyFields.map((field) => (
              <article className="company-field-card" key={field.id}>
                <div className="company-field-top">
                  <div className="company-field-icon">{field.icon}</div>

                  <button
                    className="company-field-expand"
                    type="button"
                 onClick={() => {
  setIsClosing(false);
  setActiveField(field);
}}
                    aria-label={`Open ${field.title}`}
                  >
                   <svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <path
    d="M13.75 6.75L10.25 6.75L10.25 5L15.5 5L15.5 10.25L13.75 10.25L13.75 6.75Z"
    fill="currentColor"
  />
  <path
    d="M6.75 10.25L5 10.25L5 15.5L10.25 15.5L10.25 13.75L6.75 13.75L6.75 10.25Z"
    fill="currentColor"
  />
</svg>
                  </button>
                </div>

                <div className="company-field-images">
                  {field.images.slice(0, 2).map((image, index) => (
                    <div className="company-field-image" key={image}>
                      <img src={image} alt={`${field.title} ${index + 1}`} />
                    </div>
                  ))}
                </div>

                <p className="company-field-subtitle">{field.subtitle}</p>
                <h3>{field.title}</h3>
                <p>{field.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

 {activeField && (
 <div
className={`company-field-modal company-field-modal--${activeField.id} ${
  isClosing ? "company-field-modal--closing" : ""
}`}  role="dialog"
  aria-modal="true"
onClick={closeModal}>
    <div
      className="company-field-modal-content"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="company-field-modal-close"
        type="button"
     onClick={closeModal}
        aria-label="Close"
      >
        ✕
      </button>

      <div className="company-field-modal-hero">
        <div>
          <div className="company-field-modal-icon">
            {activeField.icon}
          </div>

          <p className="kicker">Work Field</p>

          <h2>{activeField.title}</h2>

          <p className="company-field-modal-subtitle">
            {activeField.subtitle}
          </p>

          <p className="company-field-modal-lead">
            {activeField.description}
          </p>

          <div className="company-field-modal-actions">
            <button className="btn btn-dark">Explore sector →</button>
            <button className="btn btn-white">Contact team</button>
          </div>
        </div>

        <div className="company-field-modal-checks">
          <div>
            <span>✓</span>
            Integrated security systems
          </div>
          <div>
            <span>✓</span>
            CCTV, access control, and fire alarm
          </div>
          <div>
            <span>✓</span>
            Network and infrastructure design
          </div>
          <div>
            <span>✓</span>
            Support, maintenance, and training
          </div>
        </div>
      </div>

      <div className="company-field-modal-showcase">
        <div className="company-field-modal-main-image">
          <img src={activeField.images[0]} alt={activeField.title} />
        </div>

        <div className="company-field-modal-side-card company-field-modal-stat-card">
          <strong>24/7</strong>
          <p>monitoring, support, and operational continuity for critical environments.</p>
        </div>

        <div className="company-field-modal-side-card">
          <img src={activeField.images[1]} alt={`${activeField.title} 2`} />
        </div>
      </div>

      <div className="company-field-modal-benefits">
        <div>
          <div className="company-field-benefit-icon">↗</div>
          <p>
            Improve operational visibility through smart monitoring, connected
            systems, and centralized control.
          </p>
        </div>

        <div>
          <div className="company-field-benefit-icon">◎</div>
          <p>
            Build scalable infrastructure that can grow with future business,
            security, and technology requirements.
          </p>
        </div>

        <div>
          <div className="company-field-benefit-icon">◇</div>
          <p>
            Reduce downtime with professional installation, documentation,
            support, and preventive maintenance.
          </p>
        </div>
      </div>

      <div className="company-field-modal-discover">
        <h3>More to discover</h3>

        <div className="company-field-modal-discover-grid">
          {activeField.details.map((text, index) => (
            <article key={index} className="company-field-discover-card">
              <div className="company-field-discover-image">
                <img
                  src={activeField.images[index % activeField.images.length]}
                  alt={`${activeField.title} detail ${index + 1}`}
                />
              </div>

              <p>{text}</p>

              <span>Learn more ›</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
}