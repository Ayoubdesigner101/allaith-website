// import { useEffect } from "react";
// import { initAlLaithIntegrationScene } from "../../assets/js/integration/initAlLaithIntegrationScene";
// import "../../assets/css/sections.css";

// export default function AlLaithIntegrationSection() {
//   useEffect(() => {
//     const cleanup = initAlLaithIntegrationScene();

//     return () => {
//       if (cleanup) cleanup();
//     };
//   }, []);

//   return (
//     <section className="allaith-integration-section scroll-reveal">
//       <div className="allaith-integration-bg"></div>

//       <div className="allaith-integration-title-wrap">
//         <p className="allaith-integration-kicker">
//           AL-LAITH TECHNOLOGY INTEGRATION
//         </p>

//         <h2 className="allaith-integration-title">
//           الليث مركز ربط الأنظمة الذكية
//         </h2>

//         <p className="allaith-integration-subtitle">
//           ربط حلول المراقبة، التحكم، الشبكات، مراكز البيانات، المدن الذكية
//           والصيانة ضمن منظومة واحدة تقودها شركة الليث.
//         </p>
//       </div>

//       <div className="allaith-integration-visual">
//         <div id="allaith-integration-canvas"></div>
//       </div>
//     </section>
//   );
// }


type IntegrationNode = {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
};

function iconSvg(type: string) {
  const icons: Record<string, string> = {
    cctv: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 9.5 15.8 6.4c1-.3 2 .4 2.2 1.4l.4 1.7c.2 1-.4 2-1.4 2.2L5.2 14.8 4 9.5Z"/>
        <path d="M7 15.2v3.3"/>
        <path d="M5.2 18.5h5"/>
        <path d="M17.8 9.2l3.2-.8"/>
      </svg>
    `,
    access: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6" y="10" width="12" height="10" rx="2"/>
        <path d="M8.5 10V7.8a3.5 3.5 0 0 1 7 0V10"/>
        <path d="M12 14v2.5"/>
      </svg>
    `,
    fire: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21c3.6 0 6.5-2.5 6.5-6.1 0-3.4-2.4-5.5-4.6-7.8-.5 2.3-1.7 3.2-3.1 4.4.2-2.4-.8-4.5-2.7-6.5C7.8 8.6 5.5 10.9 5.5 15c0 3.5 2.9 6 6.5 6Z"/>
        <path d="M12.1 18.2c1.4 0 2.5-1 2.5-2.4 0-1.3-.8-2.1-1.7-3.1-.3 1-.8 1.5-1.4 2 .1-1-.3-1.9-1.1-2.7-.2 1.5-1.1 2.4-1.1 3.9 0 1.3 1.1 2.3 2.8 2.3Z"/>
      </svg>
    `,
    application: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="7" height="7" rx="2"/>
        <rect x="13" y="4" width="7" height="7" rx="2"/>
        <rect x="4" y="13" width="7" height="7" rx="2"/>
        <rect x="13" y="13" width="7" height="7" rx="2"/>
      </svg>
    `,
    networking: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="5" r="2.5"/>
        <circle cx="5" cy="18" r="2.5"/>
        <circle cx="19" cy="18" r="2.5"/>
        <path d="M10.8 7.2 6.2 15.8"/>
        <path d="M13.2 7.2 17.8 15.8"/>
        <path d="M7.5 18h9"/>
      </svg>
    `,
    datacenter: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2"/>
        <path d="M8 7h8"/>
        <path d="M8 11h8"/>
        <path d="M8 15h8"/>
        <circle cx="8.5" cy="18" r=".7"/>
        <circle cx="11.5" cy="18" r=".7"/>
      </svg>
    `,
    infrastructure: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16"/>
        <path d="M6 20V9l6-4 6 4v11"/>
        <path d="M9 20v-6h6v6"/>
        <path d="M9 10h6"/>
      </svg>
    `,
    smartcity: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V8h5v12"/>
        <path d="M9 20V4h6v16"/>
        <path d="M15 20v-9h5v9"/>
        <path d="M6 11h1"/>
        <path d="M11 8h2"/>
        <path d="M17 14h1"/>
      </svg>
    `,
    ai: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6" y="6" width="12" height="12" rx="3"/>
        <path d="M9 12h6"/>
        <path d="M12 9v6"/>
        <path d="M9 3v3"/>
        <path d="M15 3v3"/>
        <path d="M9 18v3"/>
        <path d="M15 18v3"/>
        <path d="M3 9h3"/>
        <path d="M3 15h3"/>
        <path d="M18 9h3"/>
        <path d="M18 15h3"/>
      </svg>
    `,
    command: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="11" rx="2"/>
        <path d="M8 20h8"/>
        <path d="M12 16v4"/>
        <path d="M7.5 9h3"/>
        <path d="M13 9h3.5"/>
        <path d="M7.5 12.5h9"/>
      </svg>
    `,
    maintenance: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m14.7 6.3 3 3"/>
        <path d="M13.8 7.2 5 16v3h3l8.8-8.8"/>
        <path d="M16 4.5a3.5 3.5 0 0 0 4.5 4.5"/>
        <path d="M19.3 4.7 16 8"/>
      </svg>
    `,
    solution: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z"/>
        <path d="M12 12 4.5 7.5"/>
        <path d="M12 12l7.5-4.5"/>
        <path d="M12 12v8.5"/>
      </svg>
    `,
  };

  return icons[type] || icons.solution;
}
 import "../../assets/css/sections.css";
 
export function initAlLaithIntegrationScene() {
  const mount = document.getElementById(
    "allaith-integration-canvas"
  ) as HTMLDivElement | null;

  if (!mount) return;

  mount.innerHTML = "";

  const nodes: IntegrationNode[] = [
    { id: "cctv", label: "CCTV", icon: iconSvg("cctv"), x: 18, y: 18 },
    { id: "access", label: "Access Control", icon: iconSvg("access"), x: 36, y: 11 },
    { id: "fire", label: "Fire Alarm", icon: iconSvg("fire"), x: 60, y: 11 },
    { id: "application", label: "Application", icon: iconSvg("application"), x: 78, y: 18 },

    { id: "networking", label: "Networking", icon: iconSvg("networking"), x: 12, y: 43 },
    { id: "datacenter", label: "Data Center", icon: iconSvg("datacenter"), x: 15, y: 67 },
    { id: "infrastructure", label: "Infrastructure", icon: iconSvg("infrastructure"), x: 27, y: 84 },

    { id: "smartcity", label: "Smart City", icon: iconSvg("smartcity"), x: 88, y: 43 },
    { id: "ai", label: "AI Surveillance", icon: iconSvg("ai"), x: 85, y: 67 },
    { id: "command", label: "Command Center", icon: iconSvg("command"), x: 72, y: 84 },

    { id: "maintenance", label: "Maintenance", icon: iconSvg("maintenance"), x: 42, y: 91 },
    { id: "solution", label: "Solution", icon: iconSvg("solution"), x: 58, y: 91 },
  ];

  const center = {
    x: 50,
    y: 50,
    label: "AL-LAITH",
    subLabel: "Technology Core",
  };

  const wrapper = document.createElement("div");
  wrapper.className = "allaith-network-wrapper";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "allaith-network-svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("preserveAspectRatio", "none");

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

  const glowFilter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
  glowFilter.setAttribute("id", "allaithGlow");
  glowFilter.innerHTML = `
    <feGaussianBlur stdDeviation="0.6" result="coloredBlur"/>
    <feMerge>
      <feMergeNode in="coloredBlur"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  `;

  const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  gradient.setAttribute("id", "allaithLineGradient");
  gradient.setAttribute("x1", "0%");
  gradient.setAttribute("y1", "0%");
  gradient.setAttribute("x2", "100%");
  gradient.setAttribute("y2", "100%");
  gradient.innerHTML = `
    <stop offset="0%" stop-color="#238ABF"/>
    <stop offset="48%" stop-color="#339FD8"/>
    <stop offset="78%" stop-color="#F1975D"/>
    <stop offset="100%" stop-color="#EE2504"/>
  `;

  defs.appendChild(glowFilter);
  defs.appendChild(gradient);
  svg.appendChild(defs);

  function createPath(node: IntegrationNode, index: number) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    const midX = (center.x + node.x) / 2;
    const curveOffset = node.x < center.x ? -7 : 7;
    const verticalOffset = node.y < center.y ? -5 : 5;

    const d = `
      M ${center.x} ${center.y}
      C ${midX + curveOffset} ${center.y + verticalOffset},
        ${midX - curveOffset} ${node.y - verticalOffset},
        ${node.x} ${node.y}
    `;

    path.setAttribute("d", d);
    path.setAttribute("class", "allaith-connection-path");
    path.style.animationDelay = `${index * 0.18}s`;

    svg.appendChild(path);

    const pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pulse.setAttribute("r", "0.5");
    pulse.setAttribute("class", "allaith-moving-dot");
    pulse.style.animationDelay = `${index * 0.22}s`;

    const animateMotion = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "animateMotion"
    );

    animateMotion.setAttribute("dur", `${4.5 + (index % 4) * 0.7}s`);
    animateMotion.setAttribute("repeatCount", "indefinite");
    animateMotion.setAttribute("path", d.replace(/\s+/g, " ").trim());

    pulse.appendChild(animateMotion);
    svg.appendChild(pulse);
  }

  nodes.forEach((node, index) => createPath(node, index));

  wrapper.appendChild(svg);

  const centerNode = document.createElement("div");
  centerNode.className = "allaith-node allaith-center-node";
  centerNode.style.left = `${center.x}%`;
  centerNode.style.top = `${center.y}%`;

  centerNode.innerHTML = `
    <span class="allaith-center-logo">AL</span>
    <strong>${center.label}</strong>
    <small>${center.subLabel}</small>
  `;

  wrapper.appendChild(centerNode);

  nodes.forEach((node, index) => {
    const item = document.createElement("div");
    item.className = "allaith-node allaith-service-node";
    item.style.left = `${node.x}%`;
    item.style.top = `${node.y}%`;
    item.style.animationDelay = `${index * 0.12}s`;
    item.setAttribute("title", node.label);
    item.setAttribute("aria-label", node.label);

    item.innerHTML = `
      <span class="allaith-node-icon">${node.icon}</span>
      <span class="allaith-node-tooltip">${node.label}</span>
    `;

    wrapper.appendChild(item);
  });

  mount.appendChild(wrapper);

  const interval = window.setInterval(() => {
    const activeNodes = wrapper.querySelectorAll(".allaith-service-node");

    activeNodes.forEach((node) => {
      node.classList.remove("is-active");
    });

    const randomIndex = Math.floor(Math.random() * activeNodes.length);
    activeNodes[randomIndex]?.classList.add("is-active");
  }, 1400);

  return () => {
    window.clearInterval(interval);
    mount.innerHTML = "";
  };
}