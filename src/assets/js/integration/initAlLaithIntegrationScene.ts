// type IntegrationNode = {
//   id: string;
//   label: string;
//   icon: string;
//   x: number;
//   y: number;
// };

// export function initAlLaithIntegrationScene() {
//   const mount = document.getElementById(
//     "allaith-integration-canvas"
//   ) as HTMLDivElement | null;

//   if (!mount) return;

//   mount.innerHTML = "";

//   const nodes: IntegrationNode[] = [
//     { id: "cctv", label: "CCTV", icon: "◉", x: 18, y: 18 },
//     { id: "access", label: "Access Control", icon: "▣", x: 36, y: 11 },
//     { id: "fire", label: "Fire Alarm", icon: "△", x: 60, y: 11 },
//     { id: "application", label: "Application", icon: "▦", x: 78, y: 18 },

//     { id: "networking", label: "Networking", icon: "⌁", x: 12, y: 43 },
//     { id: "datacenter", label: "Data Center", icon: "▤", x: 15, y: 67 },
//     { id: "infrastructure", label: "Infrastructure", icon: "▧", x: 27, y: 84 },

//     { id: "smartcity", label: "Smart City", icon: "◇", x: 88, y: 43 },
//     { id: "ai", label: "AI Surveillance", icon: "✦", x: 85, y: 67 },
//     { id: "command", label: "Command Center", icon: "◎", x: 72, y: 84 },

//     { id: "maintenance", label: "Maintenance", icon: "⚙", x: 42, y: 91 },
//     { id: "solution", label: "Solution", icon: "◆", x: 58, y: 91 },
//   ];

//   const center = {
//     x: 50,
//     y: 50,
//     label: "AL-LAITH",
//     subLabel: "Core Integration",
//   };

//   const wrapper = document.createElement("div");
//   wrapper.className = "allaith-network-wrapper";

//   const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   svg.setAttribute("class", "allaith-network-svg");
//   svg.setAttribute("viewBox", "0 0 100 100");
//   svg.setAttribute("preserveAspectRatio", "none");

//   const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

//   const glowFilter = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "filter"
//   );
//   glowFilter.setAttribute("id", "allaithGlow");
//   glowFilter.innerHTML = `
//     <feGaussianBlur stdDeviation="0.7" result="coloredBlur"/>
//     <feMerge>
//       <feMergeNode in="coloredBlur"/>
//       <feMergeNode in="SourceGraphic"/>
//     </feMerge>
//   `;

//   const gradient = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "linearGradient"
//   );
//   gradient.setAttribute("id", "allaithLineGradient");
//   gradient.setAttribute("x1", "0%");
//   gradient.setAttribute("y1", "0%");
//   gradient.setAttribute("x2", "100%");
//   gradient.setAttribute("y2", "100%");
//   gradient.innerHTML = `
//     <stop offset="0%" stop-color="#238ABF"/>
//     <stop offset="45%" stop-color="#339FD8"/>
//     <stop offset="70%" stop-color="#F1975D"/>
//     <stop offset="100%" stop-color="#EE2504"/>
//   `;

//   defs.appendChild(glowFilter);
//   defs.appendChild(gradient);
//   svg.appendChild(defs);

//   function createPath(node: IntegrationNode, index: number) {
//     const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

//     const midX = (center.x + node.x) / 2;
//     const midY = (center.y + node.y) / 2;

//     const curveOffset = node.x < center.x ? -7 : 7;
//     const verticalOffset = node.y < center.y ? -5 : 5;

//     const d = `
//       M ${center.x} ${center.y}
//       C ${midX + curveOffset} ${center.y + verticalOffset},
//         ${midX - curveOffset} ${node.y - verticalOffset},
//         ${node.x} ${node.y}
//     `;

//     path.setAttribute("d", d);
//     path.setAttribute("class", "allaith-connection-path");
//     path.style.animationDelay = `${index * 0.18}s`;

//     svg.appendChild(path);

//     const pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     pulse.setAttribute("r", "0.55");
//     pulse.setAttribute("class", "allaith-moving-dot");
//     pulse.style.animationDelay = `${index * 0.22}s`;

//     const animateMotion = document.createElementNS(
//       "http://www.w3.org/2000/svg",
//       "animateMotion"
//     );

//     animateMotion.setAttribute("dur", `${4.5 + (index % 4) * 0.7}s`);
//     animateMotion.setAttribute("repeatCount", "indefinite");
//     animateMotion.setAttribute("path", d.replace(/\s+/g, " ").trim());

//     pulse.appendChild(animateMotion);
//     svg.appendChild(pulse);
//   }

//   nodes.forEach((node, index) => createPath(node, index));

//   wrapper.appendChild(svg);

//   const centerNode = document.createElement("div");
//   centerNode.className = "allaith-node allaith-center-node";
//   centerNode.style.left = `${center.x}%`;
//   centerNode.style.top = `${center.y}%`;

//   centerNode.innerHTML = `
//     <span class="allaith-center-logo">AL</span>
//     <strong>${center.label}</strong>
//     <small>${center.subLabel}</small>
//   `;

//   wrapper.appendChild(centerNode);

//   nodes.forEach((node, index) => {
//     const item = document.createElement("div");
//     item.className = "allaith-node allaith-service-node";
//     item.style.left = `${node.x}%`;
//     item.style.top = `${node.y}%`;
//     item.style.animationDelay = `${index * 0.12}s`;

//     item.innerHTML = `
//       <span class="allaith-node-icon">${node.icon}</span>
//       <span class="allaith-node-label">${node.label}</span>
//     `;

//     wrapper.appendChild(item);
//   });

//   mount.appendChild(wrapper);

//   const interval = window.setInterval(() => {
//     const activeNodes = wrapper.querySelectorAll(".allaith-service-node");
//     activeNodes.forEach((node) => {
//       node.classList.remove("is-active");
//     });

//     const randomIndex = Math.floor(Math.random() * activeNodes.length);
//     activeNodes[randomIndex]?.classList.add("is-active");
//   }, 1400);

//   return () => {
//     window.clearInterval(interval);
//     mount.innerHTML = "";
//   };
// }
type IntegrationNode = {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
  group: "left" | "right" | "bottom";
};

function iconSvg(type: string) {
  const icons: Record<string, string> = {
    cctv: `<svg viewBox="0 0 24 24"><path d="M4 9.5 16 6.5c1-.2 2 .4 2.2 1.4l.4 1.8c.2 1-.4 2-1.4 2.2L5.2 15 4 9.5Z"/><path d="M7 15v3.5"/><path d="M5 18.5h5"/><path d="M18 9l3-.8"/></svg>`,
    access: `<svg viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="10" rx="2"/><path d="M8.5 10V8a3.5 3.5 0 0 1 7 0v2"/><path d="M12 14v3"/></svg>`,
    fire: `<svg viewBox="0 0 24 24"><path d="M12 21c3.6 0 6.5-2.5 6.5-6.1 0-3.4-2.4-5.5-4.6-7.8-.5 2.3-1.7 3.2-3.1 4.4.2-2.4-.8-4.5-2.7-6.5C7.8 8.6 5.5 10.9 5.5 15c0 3.5 2.9 6 6.5 6Z"/></svg>`,
    app: `<svg viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/></svg>`,
    network: `<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M10.8 7.2 6.2 15.8"/><path d="M13.2 7.2 17.8 15.8"/><path d="M7.5 18h9"/></svg>`,
    data: `<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h8"/><circle cx="8.5" cy="18" r=".7"/><circle cx="11.5" cy="18" r=".7"/></svg>`,
    infra: `<svg viewBox="0 0 24 24"><path d="M4 20h16"/><path d="M6 20V9l6-4 6 4v11"/><path d="M9 20v-6h6v6"/></svg>`,
    city: `<svg viewBox="0 0 24 24"><path d="M4 20V8h5v12"/><path d="M9 20V4h6v16"/><path d="M15 20v-9h5v9"/><path d="M6 11h1"/><path d="M11 8h2"/><path d="M17 14h1"/></svg>`,
    airport: `<svg viewBox="0 0 24 24"><path d="M3 16 21 8"/><path d="M9 13 6 5"/><path d="M14 11l4 6"/><path d="M5 19h14"/></svg>`,
    building: `<svg viewBox="0 0 24 24"><path d="M5 20V4h14v16"/><path d="M9 8h1"/><path d="M14 8h1"/><path d="M9 12h1"/><path d="M14 12h1"/><path d="M10 20v-4h4v4"/></svg>`,
    maintenance: `<svg viewBox="0 0 24 24"><path d="m14.7 6.3 3 3"/><path d="M13.8 7.2 5 16v3h3l8.8-8.8"/><path d="M16 4.5a3.5 3.5 0 0 0 4.5 4.5"/></svg>`,
    teams: `<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M14.5 18.5a4.5 4.5 0 0 1 6 1.5"/></svg>`,
    solution: `<svg viewBox="0 0 24 24"><path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z"/><path d="M12 12 4.5 7.5"/><path d="M12 12l7.5-4.5"/><path d="M12 12v8.5"/></svg>`,
  };

  return icons[type] || icons.solution;
}

export function initAlLaithIntegrationScene() {
  const mount = document.getElementById(
    "allaith-integration-canvas"
  ) as HTMLDivElement | null;

  if (!mount) return;

  mount.innerHTML = "";

  const center = {
    x: 50,
    y: 48,
    label: "AL-LAITH",
    subLabel: "Integration Core",
  };

  const leftBusX = 30;
  const rightBusX = 70;
  const bottomBusY = 76;

  const nodes: IntegrationNode[] = [
    // Left group
    { id: "cctv", label: "CCTV", icon: iconSvg("cctv"), x: 12, y: 18, group: "left" },
    { id: "access", label: "Access Control", icon: iconSvg("access"), x: 12, y: 30, group: "left" },
    { id: "fire", label: "Fire Alarm", icon: iconSvg("fire"), x: 12, y: 42, group: "left" },
    { id: "application", label: "Application", icon: iconSvg("app"), x: 12, y: 54, group: "left" },
    { id: "network", label: "Network", icon: iconSvg("network"), x: 12, y: 66, group: "left" },

    // Bottom group
    { id: "maintenance", label: "Maintenance", icon: iconSvg("maintenance"), x: 38, y: 90, group: "bottom" },
    { id: "teams", label: "Teams", icon: iconSvg("teams"), x: 50, y: 90, group: "bottom" },
    { id: "solution", label: "Solution", icon: iconSvg("solution"), x: 62, y: 90, group: "bottom" },

    // Right group
    { id: "datacenter", label: "Data Center", icon: iconSvg("data"), x: 88, y: 12, group: "right" },
    { id: "infrastructure", label: "Infrastructure", icon: iconSvg("infra"), x: 88, y: 24, group: "right" },
    { id: "smartcity", label: "Smart City", icon: iconSvg("city"), x: 88, y: 36, group: "right" },
    { id: "airport", label: "Airport Security & Operations", icon: iconSvg("airport"), x: 88, y: 48, group: "right" },
    { id: "network-solutions", label: "Network Solutions", icon: iconSvg("network"), x: 88, y: 60, group: "right" },
    { id: "smart-building", label: "Smart Building Automation", icon: iconSvg("building"), x: 88, y: 72, group: "right" },
    { id: "integrated-access", label: "Integrated Access Control", icon: iconSvg("access"), x: 88, y: 84, group: "right" },
  ];

  const wrapper = document.createElement("div");
  wrapper.className = "allaith-network-wrapper allaith-three-side-network";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "allaith-network-svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("preserveAspectRatio", "none");

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

  const glowFilter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
  glowFilter.setAttribute("id", "allaithGlow");
  glowFilter.innerHTML = `
    <feGaussianBlur stdDeviation="0.55" result="coloredBlur"/>
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

function addPath(d: string, className: string, index: number) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute("d", d);
  path.setAttribute("class", className);

  /* إجبار الخط على الظهور بلون واضح جداً */
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "#ff3b30"); // أحمر واضح جداً
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("vector-effect", "non-scaling-stroke");

  if (className.includes("allaith-main-path")) {
    path.setAttribute("stroke-width", "3.6");
    path.setAttribute("stroke-dasharray", "7 6");
  } else if (className.includes("allaith-bus-path")) {
    path.setAttribute("stroke-width", "3");
    path.setAttribute("stroke-dasharray", "6 6");
  } else {
    path.setAttribute("stroke-width", "2.6");
    path.setAttribute("stroke-dasharray", "5 6");
  }

  path.style.opacity = "1";
  path.style.animationDelay = `${index * 0.12}s`;

  svg.appendChild(path);
}

  const leftNodes = nodes.filter((node) => node.group === "left");
  const rightNodes = nodes.filter((node) => node.group === "right");
  const bottomNodes = nodes.filter((node) => node.group === "bottom");

/* ===============================
   LEFT GROUP -> AL-LAITH
================================ */
leftNodes.forEach((node, index) => {
  addPath(
    `M ${node.x + 4.2} ${node.y} L ${leftBusX} ${node.y}`,
    "allaith-branch-path allaith-flow-to-core",
    index
  );
});

addPath(
  `M ${leftBusX} ${leftNodes[0].y} L ${leftBusX} ${
    leftNodes[leftNodes.length - 1].y
  }`,
  "allaith-bus-path allaith-flow-to-core",
  8
);

addPath(
  `M ${leftBusX} ${center.y}
   C 36 ${center.y}, 40 ${center.y}, ${center.x - 8} ${center.y}`,
  "allaith-main-path allaith-flow-to-core",
  10
);

/* ===============================
   AL-LAITH -> RIGHT GROUP
================================ */
addPath(
  `M ${center.x + 8} ${center.y}
   C 60 ${center.y}, 64 ${center.y}, ${rightBusX} ${center.y}`,
  "allaith-main-path allaith-flow-from-core",
  12
);

addPath(
  `M ${rightBusX} ${rightNodes[0].y} L ${rightBusX} ${
    rightNodes[rightNodes.length - 1].y
  }`,
  "allaith-bus-path allaith-flow-from-core",
  14
);

rightNodes.forEach((node, index) => {
  addPath(
    `M ${rightBusX} ${node.y} L ${node.x - 4.2} ${node.y}`,
    "allaith-branch-path allaith-flow-from-core",
    index + 16
  );
});

/* ===============================
   BOTTOM GROUP -> AL-LAITH
================================ */
bottomNodes.forEach((node, index) => {
  addPath(
    `M ${node.x} ${node.y - 4.4} L ${node.x} ${bottomBusY}`,
    "allaith-branch-path allaith-flow-to-core",
    index + 25
  );
});

addPath(
  `M ${bottomNodes[0].x} ${bottomBusY} L ${
    bottomNodes[bottomNodes.length - 1].x
  } ${bottomBusY}`,
  "allaith-bus-path allaith-flow-to-core",
  29
);

addPath(
  `M ${center.x} ${bottomBusY}
   C ${center.x} 66, ${center.x} 58, ${center.x} ${center.y + 8}`,
  "allaith-main-path allaith-flow-to-core",
  31
);
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
    item.className = `allaith-node allaith-service-node allaith-node-${node.group}`;
    item.style.left = `${node.x}%`;
    item.style.top = `${node.y}%`;
    item.style.animationDelay = `${index * 0.1}s`;
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
  }, 1300);

  return () => {
    window.clearInterval(interval);
    mount.innerHTML = "";
  };
}