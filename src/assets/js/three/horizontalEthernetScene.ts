import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
type Cable = {
  curvePoints: THREE.Vector3[];
  line: THREE.Line;
  material: THREE.LineBasicMaterial;
  color: string;
  offsetY: number;
  amplitude: number;
  speed: number;
  phase: number;
};
type EthernetPort = {
  center: THREE.Vector3;
  group: THREE.Group;
};
export function initHorizontalEthernetScene() {
  const mount = document.getElementById("horizontal-ethernet-canvas") as HTMLDivElement | null;

  if (!mount) return;

  mount.innerHTML = "";

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    34,
    mount.clientWidth / mount.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 24);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(mount.clientWidth, mount.clientHeight);
  renderer.setClearColor(0x000000, 0);

  mount.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight("#ffffff", 1.4);
  scene.add(ambientLight);

  const cableGroup = new THREE.Group();
  scene.add(cableGroup);

  const glowGroup = new THREE.Group();
  scene.add(glowGroup);

  const colors = [
    "#65c8ff",
    "#7aa8ff",
    "#7267ff",
    "#a36dff",
    "#e88cff",
    "#ff9fb4",
    "#ffb977",
    "#ffd37c",
    "#89d8ff",
    "#5caeff",
  ];

  const ethernetPorts: EthernetPort[] = [];

function createEthernetPorts() {
  const portGroup = new THREE.Group();

  const frameMat = new THREE.MeshPhysicalMaterial({
    color: "#111827",
    roughness: 0.35,
    metalness: 0.25,
    clearcoat: 0.5,
  });

  const socketMat = new THREE.MeshStandardMaterial({
    color: "#020617",
    roughness: 0.6,
    metalness: 0.2,
  });

  const goldMat = new THREE.MeshStandardMaterial({
    color: "#f8c65f",
    metalness: 0.75,
    roughness: 0.25,
  });

  const rows = 17;
  const cols = 2;
  const spacingY = 0.58;
  const spacingX = 1.75;

  const startY = ((rows - 1) * spacingY) / 2;
  const startX = 13.6;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = startX + col * spacingX;
      const y = startY - row * spacingY;

      const port = new THREE.Group();

      const frame = new THREE.Mesh(
        new RoundedBoxGeometry(1.25, 0.42, 0.34, 4, 0.06),
        frameMat
      );

      const socket = new THREE.Mesh(
        new RoundedBoxGeometry(0.88, 0.24, 0.38, 4, 0.04),
        socketMat
      );

      socket.position.z = 0.04;

      port.add(frame, socket);

      for (let i = 0; i < 6; i++) {
        const pin = new THREE.Mesh(
          new THREE.BoxGeometry(0.07, 0.025, 0.08),
          goldMat
        );

        pin.position.set(-0.25 + i * 0.1, 0.08, 0.26);
        port.add(pin);
      }

      port.position.set(x, y, -0.15);
      portGroup.add(port);

      ethernetPorts.push({
        center: new THREE.Vector3(x - 0.55, y, 0.12),
        group: port,
      });
    }
  }

  scene.add(portGroup);
}
  // هنا تغيّر عدد الكيبلات
  const cableCount = 34;

  const cables: Cable[] = [];

 function createCable(index: number): Cable {
  const t = cableCount === 1 ? 0 : index / (cableCount - 1);

  const targetPort = ethernetPorts[index % ethernetPorts.length];

  const offsetY = THREE.MathUtils.lerp(4.8, -4.8, t);
  const amplitude = THREE.MathUtils.lerp(
    0.22,
    0.5,
    (Math.sin(t * Math.PI) + 1) * 0.5
  );

  const speed = THREE.MathUtils.lerp(0.8, 1.35, Math.random());
  const phase = Math.random() * Math.PI * 2;
  const color = colors[index % colors.length];

  const points: THREE.Vector3[] = [];
  const pointCount = 34;

  for (let i = 0; i < pointCount; i++) {
    const progress = i / (pointCount - 1);

    const px = THREE.MathUtils.lerp(-16, targetPort.center.x, progress);
    const py = THREE.MathUtils.lerp(offsetY, targetPort.center.y, progress);

    points.push(new THREE.Vector3(px, py, targetPort.center.z));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.95,
  });

  const line = new THREE.Line(geometry, material);
  cableGroup.add(line);

  return {
    curvePoints: points,
    line,
    material,
    color,
    offsetY,
    amplitude,
    speed,
    phase,
  };
}

  function createHead(color: string, y: number, z: number) {
    const group = new THREE.Group();

    const bodyMat = new THREE.MeshPhysicalMaterial({
      color,
      roughness: 0.28,
      metalness: 0.08,
      transparent: true,
      opacity: 0.96,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
    });

    const plugMat = new THREE.MeshPhysicalMaterial({
      color: "#f4f7fb",
      roughness: 0.22,
      metalness: 0.15,
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: "#f8c65f",
      metalness: 0.65,
      roughness: 0.28,
    });

    const body = new THREE.Mesh(
      new RoundedBoxGeometry(1.55, 0.48, 0.36, 4, 0.08)
    );

    const neck = new THREE.Mesh(
      new THREE.BoxGeometry(0.34, 0.22, 0.22),
      plugMat
    );
    neck.position.x = 0.92;

    group.add(body, neck);

    for (let i = 0; i < 6; i++) {
      const pin = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.03, 0.16),
        goldMat
      );
      pin.position.set(1.05, 0.11 - i * 0.044, 0);
      group.add(pin);
    }

    group.position.set(13.2, y, z);
    return group;
  }
createEthernetPorts();
  const heads: THREE.Group[] = [];

  for (let i = 0; i < cableCount; i++) {
    const cable = createCable(i);
    cables.push(cable);

    // كل عدة كيبلات نضيف رأس RJ45 بسيط
    if (i % 4 === 0) {
      const head = createHead(cable.color, cable.offsetY, -0.2 + (i % 3) * 0.04);
      heads.push(head);
      scene.add(head);
    }
  }

  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 120;
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = -15 + Math.random() * 30;
    particlePositions[i * 3 + 1] = -5 + Math.random() * 10;
    particlePositions[i * 3 + 2] = -6 + Math.random() * 5;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(particlePositions, 3)
  );

  const particlesMaterial = new THREE.PointsMaterial({
    color: "#ffffff",
    size: 0.05,
    transparent: true,
    opacity: 0.2,
    depthWrite: false,
  });

  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  const clock = new THREE.Clock();
  let animationId = 0;

  function animate() {
    const time = clock.getElapsedTime();

    cables.forEach((cable, cableIndex) => {
      const points = cable.curvePoints;

   const targetPort = ethernetPorts[cableIndex % ethernetPorts.length];

for (let i = 0; i < points.length; i++) {
  const p = points[i];
  const progress = i / (points.length - 1);

  p.x = THREE.MathUtils.lerp(-16, targetPort.center.x, progress);

  const baseY = THREE.MathUtils.lerp(
    cable.offsetY,
    targetPort.center.y,
    progress
  );

  const baseZ = THREE.MathUtils.lerp(
    0,
    targetPort.center.z,
    progress
  );

  // كلما اقترب الكيبل من فتحة Ethernet نقلل الموجة حتى يثبت داخل الفتحة
  const lockToPort = THREE.MathUtils.smoothstep(progress, 0.68, 1);
  const waveStrength = 1 - lockToPort;

  const waveA =
    Math.sin(progress * Math.PI * 2.1 + time * cable.speed + cable.phase) *
    cable.amplitude *
    waveStrength;

  const waveB =
    Math.cos(progress * Math.PI * 4.2 + time * 0.8 + cable.phase * 0.8) *
    cable.amplitude *
    0.45 *
    waveStrength;

  const waveC =
    Math.sin(progress * Math.PI * 1.3 + time * 0.55 + cableIndex * 0.12) *
    0.18 *
    waveStrength;

  p.y = baseY + waveA + waveB + waveC;

  p.z =
    baseZ +
    (
      Math.sin(progress * Math.PI * 3.0 + time * 0.7 + cable.phase) * 0.55 +
      Math.cos(progress * Math.PI * 1.8 + time * 0.45) * 0.18
    ) *
      waveStrength;

  // آخر نقطة مثبتة تماماً داخل فتحة Ethernet
  if (i === points.length - 1) {
    p.copy(targetPort.center);
  }
}

      cable.line.geometry.dispose();
      cable.line.geometry = new THREE.BufferGeometry().setFromPoints(points);
    });

   heads.forEach((head, index) => {
  const cableIndex = (index * 4) % cables.length;
  const refCable = cables[cableIndex];
  const targetPort = ethernetPorts[cableIndex % ethernetPorts.length];

  const beforeLastPoint = refCable.curvePoints[refCable.curvePoints.length - 3];

  head.position.x = targetPort.center.x - 0.85;
  head.position.y = beforeLastPoint.y;
  head.position.z = beforeLastPoint.z;

  head.rotation.z = 0;
  head.rotation.y = 0;
});

    particles.rotation.y += 0.0007;
    particles.rotation.z += 0.0003;

    renderer.render(scene, camera);
    animationId = requestAnimationFrame(animate);
  }

  animate();

  function onResize() {
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  window.addEventListener("resize", onResize);

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", onResize);

    cables.forEach((cable) => {
      cable.line.geometry.dispose();
      cable.material.dispose();
    });

    particlesGeometry.dispose();
    particlesMaterial.dispose();
    renderer.dispose();

    if (renderer.domElement.parentElement) {
      renderer.domElement.parentElement.removeChild(renderer.domElement);
    }
  };
}