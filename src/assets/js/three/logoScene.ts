import * as THREE from "three";

type LogoSceneCleanup = () => void;

type LogoColumn = {
  group: THREE.Group;
  targetPosition: THREE.Vector3;
  startPosition: THREE.Vector3;
  targetRotation: THREE.Euler;
  startRotation: THREE.Euler;
  targetScale: THREE.Vector3;
  delay: number;
};

function easeOutExpo(t: number) {
  if (t >= 1) return 1;
  return 1 - Math.pow(2, -10 * t);
}

function createColumnMaterial(color: string, emissive: string, emissiveIntensity = 0.12) {
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0.86,
    roughness: 0.18,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
    reflectivity: 0.95,
    emissive,
    emissiveIntensity,
  });
}

function createTaperedColumn({
  height,
  bottomWidth,
  topWidth,
  depth,
  material,
  glow,
}: {
  height: number;
  bottomWidth: number;
  topWidth: number;
  depth: number;
  material: THREE.Material;
  glow?: boolean;
}) {
  const group = new THREE.Group();

  const shape = new THREE.Shape();

  shape.moveTo(-bottomWidth / 2, 0);
  shape.lineTo(bottomWidth / 2, 0);
  shape.lineTo(topWidth / 2, height);
  shape.lineTo(-topWidth / 2, height);
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSegments: 5,
    bevelSize: 0.035,
    bevelThickness: 0.04,
    steps: 1,
  });

  geometry.center();

  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  group.add(mesh);

  if (glow) {
    const glowGeometry = new THREE.BoxGeometry(topWidth * 0.22, height * 0.78, 0.035);

    const glowMaterial = new THREE.MeshBasicMaterial({
      color: "#75f0ff",
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const glowLine = new THREE.Mesh(glowGeometry, glowMaterial);
    glowLine.position.set(0, 0, depth / 2 + 0.035);

    group.add(glowLine);
  }

  return group;
}

function createArrivalStart(index: number, total: number) {
  const side = index % 5;
  const spreadX = 12 + Math.random() * 5;
  const spreadY = 8 + Math.random() * 5;
  const spreadZ = 5 + Math.random() * 5;

  if (side === 0) {
    return new THREE.Vector3(-spreadX, Math.random() * 7 - 2, spreadZ);
  }

  if (side === 1) {
    return new THREE.Vector3(spreadX, Math.random() * 7 - 2, spreadZ);
  }

  if (side === 2) {
    return new THREE.Vector3(Math.random() * 12 - 6, spreadY, spreadZ);
  }

  if (side === 3) {
    return new THREE.Vector3(Math.random() * 12 - 6, -spreadY, spreadZ);
  }

  const angle = (index / total) * Math.PI * 2;

  return new THREE.Vector3(
    Math.cos(angle) * spreadX,
    Math.sin(angle) * spreadY,
    -spreadZ
  );
}

export function initLogoScene(): LogoSceneCleanup | void {
  const mount = document.getElementById("logo-canvas") as HTMLDivElement | null;

  if (!mount) return;

  mount.innerHTML = "";

  const width = mount.clientWidth || window.innerWidth;
  const height = mount.clientHeight || window.innerHeight;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 1000);
  camera.position.set(0, 0.4, 17.8);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  mount.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight("#ffffff", 1.15);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight("#ffffff", 3.8);
  keyLight.position.set(5, 9, 10);
  keyLight.castShadow = true;
  scene.add(keyLight);

  const leftBlueLight = new THREE.PointLight("#37dfff", 3.2, 34);
  leftBlueLight.position.set(-5.5, 2.2, 6);
  scene.add(leftBlueLight);

  const rightWarmLight = new THREE.PointLight("#f1975d", 2.6, 34);
  rightWarmLight.position.set(5.8, -1.8, 6);
  scene.add(rightWarmLight);

  const backLight = new THREE.DirectionalLight("#238ABF", 2.4);
  backLight.position.set(-6, 4, -4);
  scene.add(backLight);

  const darkMetal = createColumnMaterial("#07111b", "#02070b", 0.08);
  const blueMetal = createColumnMaterial("#238ABF", "#062432", 0.22);
  const steelMetal = createColumnMaterial("#5b9bb0", "#061a22", 0.13);
  const graphiteMetal = createColumnMaterial("#0A090A", "#000000", 0.04);
  const warmMetal = createColumnMaterial("#F1975D", "#321204", 0.26);

  const materials = [darkMetal, steelMetal, blueMetal, graphiteMetal];

  const logoGroup = new THREE.Group();
  scene.add(logoGroup);

  /**
   * عدد الأعمدة
   * غيّر هذا الرقم فقط إذا تريد أكثر أو أقل.
   * الأفضل أن يكون رقم زوجي: 18 / 20 / 24
   */
  const columnCount = 18;

  const totalWidth = 10.8;
  const maxHeight = 9.4;
  const minHeight = 2.4;
  const baseY = -4.15;

  const columns: LogoColumn[] = [];

  for (let i = 0; i < columnCount; i++) {
    const progress = columnCount === 1 ? 0.5 : i / (columnCount - 1);
    const fromCenter = Math.abs(progress - 0.5) * 2;
    const centerPower = 1 - fromCenter;

    const heightValue =
      minHeight +
      Math.pow(centerPower, 0.58) * (maxHeight - minHeight);

    const x = (progress - 0.5) * totalWidth;

    const bottomWidth =
      0.42 +
      centerPower * 0.22;

    const topWidth =
      0.12 +
      centerPower * 0.1;

    const depth =
      0.55 +
      centerPower * 0.18;

    const z =
      -0.42 -
      fromCenter * 0.55 +
      Math.sin(progress * Math.PI) * 0.18;

    /**
     * الأعمدة تميل قليلًا باتجاه المركز حتى تظهر كأنها تتجمع وتغلق على شكل مثلث.
     */
    const sideDirection = progress < 0.5 ? 1 : -1;
    const angleToCenter = THREE.MathUtils.degToRad(fromCenter * 18 * sideDirection);

    const selectedMaterial =
      i === Math.floor(columnCount / 2) || i === Math.floor(columnCount / 2) - 1
        ? blueMetal
        : i % 7 === 0
          ? warmMetal
          : materials[i % materials.length];

    const shouldGlow =
      i === Math.floor(columnCount / 2) ||
      i === Math.floor(columnCount / 2) - 1 ||
      i % 4 === 0;

    const column = createTaperedColumn({
      height: heightValue,
      bottomWidth,
      topWidth,
      depth,
      material: selectedMaterial,
      glow: shouldGlow,
    });

    const targetPosition = new THREE.Vector3(
      x,
      baseY + heightValue / 2,
      z
    );

    const targetRotation = new THREE.Euler(
      THREE.MathUtils.degToRad(-1.5),
      THREE.MathUtils.degToRad((progress - 0.5) * -12),
      angleToCenter
    );

    const startPosition = createArrivalStart(i, columnCount);

    const startRotation = new THREE.Euler(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );

    column.position.copy(startPosition);
    column.rotation.copy(startRotation);
    column.scale.setScalar(0.28);

    logoGroup.add(column);

    columns.push({
      group: column,
      targetPosition,
      startPosition,
      targetRotation,
      startRotation,
      targetScale: new THREE.Vector3(1, 1, 1),
      delay: i * 0.045,
    });
  }

  /**
   * مركز القيادة:
   * خط داخلي قوي في المنتصف، لا يحسب ضمن الأعمدة.
   */
  const coreGeometry = new THREE.BoxGeometry(0.16, 7.9, 0.06);
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: "#8df3ff",
    transparent: true,
    opacity: 0.72,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const coreLine = new THREE.Mesh(coreGeometry, coreMaterial);
  coreLine.position.set(0, 0.45, 0.55);
  logoGroup.add(coreLine);

  /**
   * ظل/قاعدة بسيطة فقط لإعطاء ثقل بدون تشويه الشعار.
   */
  const baseGeometry = new THREE.CylinderGeometry(4.6, 5.2, 0.16, 96);
  const baseMaterial = createColumnMaterial("#07111b", "#03131a", 0.1);

  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.set(0, -4.35, -0.65);
  base.rotation.x = THREE.MathUtils.degToRad(90);
  base.scale.set(1.35, 0.14, 1);
  base.receiveShadow = true;
  logoGroup.add(base);

  /**
   * حلقات خفيفة خلفية ترمز للسيطرة ومركز القيادة.
   */
  const haloGroup = new THREE.Group();
  scene.add(haloGroup);

  const haloMaterial = new THREE.MeshBasicMaterial({
    color: "#238ABF",
    transparent: true,
    opacity: 0.13,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });

  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(4.3 + i * 0.9, 0.018, 12, 180),
      haloMaterial
    );

    ring.position.set(0, 0.2, -3.25 - i * 0.08);
    ring.rotation.x = THREE.MathUtils.degToRad(90);
    ring.scale.y = 0.76;

    haloGroup.add(ring);
  }

  /**
   * Glow ناعم خلف الشعار
   */
  const glowCanvas = document.createElement("canvas");
  glowCanvas.width = 512;
  glowCanvas.height = 512;

  const glowCtx = glowCanvas.getContext("2d");

  if (glowCtx) {
    const gradient = glowCtx.createRadialGradient(256, 256, 16, 256, 256, 255);
    gradient.addColorStop(0, "rgba(51, 159, 216, 0.42)");
    gradient.addColorStop(0.42, "rgba(35, 138, 191, 0.16)");
    gradient.addColorStop(0.72, "rgba(241, 151, 93, 0.08)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    glowCtx.fillStyle = gradient;
    glowCtx.fillRect(0, 0, 512, 512);
  }

  const glowTexture = new THREE.CanvasTexture(glowCanvas);

  const glowSprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );

  glowSprite.position.set(0, 0.1, -3.8);
  glowSprite.scale.set(13.8, 13.8, 1);
  scene.add(glowSprite);

  /**
   * جسيمات صغيرة تأتي مع الحركة
   */
  const particleCount = 100;
  const particleGeometry = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 16;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    particlePositions[i * 3 + 2] = -4 - Math.random() * 3;
  }

  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(particlePositions, 3)
  );

  const particleMaterial = new THREE.PointsMaterial({
    color: "#a8efff",
    size: 0.032,
    transparent: true,
    opacity: 0.32,
    depthWrite: false,
  });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  logoGroup.position.set(0, -0.6, 0);
  logoGroup.rotation.x = THREE.MathUtils.degToRad(-3);
  logoGroup.rotation.y = THREE.MathUtils.degToRad(-7);

  haloGroup.position.set(0, -0.05, 0);

  let frameId = 0;
  const clock = new THREE.Clock();

  function animate() {
    const time = clock.getElapsedTime();

    /**
     * مرحلة التجمع:
     * الأعمدة تأتي من كل مكان وتصل لموقعها النهائي.
     */
    columns.forEach((column) => {
      const progress = THREE.MathUtils.clamp((time - column.delay) / 1.55, 0, 1);
      const eased = easeOutExpo(progress);

      column.group.position.lerpVectors(
        column.startPosition,
        column.targetPosition,
        eased
      );

      column.group.rotation.x = THREE.MathUtils.lerp(
        column.startRotation.x,
        column.targetRotation.x,
        eased
      );

      column.group.rotation.y = THREE.MathUtils.lerp(
        column.startRotation.y,
        column.targetRotation.y,
        eased
      );

      column.group.rotation.z = THREE.MathUtils.lerp(
        column.startRotation.z,
        column.targetRotation.z,
        eased
      );

      const scale = THREE.MathUtils.lerp(0.28, 1, eased);
      column.group.scale.set(scale, scale, scale);
    });

    /**
     * بعد التجمع: حركة خفيفة جدًا.
     */
    const idleStrength = THREE.MathUtils.clamp((time - 2.2) / 1.6, 0, 1);

    logoGroup.rotation.y =
      THREE.MathUtils.degToRad(-7) +
      Math.sin(time * 0.38) * 0.065 * idleStrength;

    logoGroup.rotation.x =
      THREE.MathUtils.degToRad(-3) +
      Math.sin(time * 0.28) * 0.024 * idleStrength;

    logoGroup.position.y =
      -0.6 +
      Math.sin(time * 0.5) * 0.055 * idleStrength;

    haloGroup.rotation.z += 0.0011;
    haloGroup.rotation.y = Math.sin(time * 0.25) * 0.04;

    glowSprite.material.opacity = 0.7 + Math.sin(time * 0.8) * 0.08;

    particles.rotation.y += 0.00062;
    particles.rotation.z += 0.00028;

    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
  }

  animate();

  function onResize() {
    const nextWidth = mount.clientWidth || window.innerWidth;
    const nextHeight = mount.clientHeight || window.innerHeight;

    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(nextWidth, nextHeight);
  }

  window.addEventListener("resize", onResize);

  return () => {
    cancelAnimationFrame(frameId);
    window.removeEventListener("resize", onResize);

    particleGeometry.dispose();
    particleMaterial.dispose();
    glowTexture.dispose();
    haloMaterial.dispose();
    coreMaterial.dispose();

    scene.traverse((object) => {
      const mesh = object as THREE.Mesh;

      if (mesh.geometry) {
        mesh.geometry.dispose();
      }

      if (mesh.material) {
        const material = mesh.material as THREE.Material | THREE.Material[];

        if (Array.isArray(material)) {
          material.forEach((item) => item.dispose());
        } else {
          material.dispose();
        }
      }
    });

    renderer.dispose();

    if (renderer.domElement.parentElement) {
      renderer.domElement.parentElement.removeChild(renderer.domElement);
    }
  };
}