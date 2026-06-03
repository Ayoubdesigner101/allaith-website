import * as THREE from "three";

type RibbonBand = {
  mesh: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>;
  geometry: THREE.BufferGeometry;
  material: THREE.MeshBasicMaterial;
  bandIndex: number;
  bandCount: number;
  width: number;
  offset: number;
  depthOffset: number;
};

export function initHorizontalSilkScene() {
  const mount = document.getElementById(
    "horizontal-silk-canvas"
  ) as HTMLDivElement | null;

  if (!mount) return;

  mount.innerHTML = "";

  const scene = new THREE.Scene();

  const width = mount.clientWidth || window.innerWidth;
  const height = mount.clientHeight || 560;

  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
  camera.position.set(0, 0, 10.5);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);

  mount.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight("#ffffff", 1.35);
  scene.add(ambientLight);

  const ribbonGroup = new THREE.Group();
  ribbonGroup.position.set(0.25, 0, -0.8);
  ribbonGroup.rotation.set(-0.04, -0.18, -0.03);
  ribbonGroup.scale.set(1.35, 1.35, 1.35);
  scene.add(ribbonGroup);

  const bands: RibbonBand[] = [];

  const widthSegments = 230;
  const heightSegments = 6;

  /**
   * عدد الأشرطة الأفقية
   * زِد هذا الرقم إذا تريد المجسم أكثف
   */
  const bandCount = 42;

  const palette = [
    new THREE.Color("#dff3ff"),
    new THREE.Color("#8fd0ff"),
    new THREE.Color("#339FD8"),
    new THREE.Color("#238ABF"),
    new THREE.Color("#5d6cff"),
    new THREE.Color("#7b61ff"),
    new THREE.Color("#c86dff"),
    new THREE.Color("#ff8fcb"),
    new THREE.Color("#F1975D"),
    new THREE.Color("#ffe0a0"),
  ];

  function samplePalette(t: number) {
    const clamped = THREE.MathUtils.clamp(t, 0, 1);
    const scaled = clamped * (palette.length - 1);
    const index = Math.floor(scaled);
    const nextIndex = Math.min(index + 1, palette.length - 1);
    const localT = scaled - index;

    return palette[index].clone().lerp(palette[nextIndex], localT);
  }

  function getBandColor(
    u: number,
    v: number,
    bandProgress: number,
    offset: number
  ) {
    const horizontalShift = u * 0.16;
    const verticalShift = (v - 0.5) * 0.035;
    const drift = Math.sin(u * Math.PI * 2.2 + offset) * 0.025;

    const t = THREE.MathUtils.clamp(
      0.05 + bandProgress * 0.78 + horizontalShift + verticalShift + drift,
      0,
      1
    );

    const color = samplePalette(t);

    const highlight =
      Math.sin(u * Math.PI * 5.5 + v * Math.PI * 2.2 + offset) * 0.5 + 0.5;

    color.lerp(new THREE.Color("#fff7e8"), highlight * 0.065);

    return color;
  }

  function createBand(bandIndex: number, totalBands: number): RibbonBand {
    const vertexCount = (widthSegments + 1) * (heightSegments + 1);

    const positions = new Float32Array(vertexCount * 3);
    const colorsArray = new Float32Array(vertexCount * 3);
    const indices: number[] = [];

    const bandProgress = totalBands === 1 ? 0 : bandIndex / (totalBands - 1);

    const bandWidth = 0.068 + Math.sin(bandProgress * Math.PI) * 0.018;
    const offset = bandProgress * 1.25;
    const depthOffset = (bandProgress - 0.5) * 0.42;

    for (let y = 0; y <= heightSegments; y++) {
      for (let x = 0; x <= widthSegments; x++) {
        const u = x / widthSegments;
        const v = y / heightSegments;
        const index = y * (widthSegments + 1) + x;

        positions[index * 3] = 0;
        positions[index * 3 + 1] = 0;
        positions[index * 3 + 2] = 0;

        const color = getBandColor(u, v, bandProgress, offset);

        colorsArray[index * 3] = color.r;
        colorsArray[index * 3 + 1] = color.g;
        colorsArray[index * 3 + 2] = color.b;
      }
    }

    for (let y = 0; y < heightSegments; y++) {
      for (let x = 0; x < widthSegments; x++) {
        const a = y * (widthSegments + 1) + x;
        const b = a + 1;
        const c = a + (widthSegments + 1);
        const d = c + 1;

        indices.push(a, c, b);
        indices.push(b, c, d);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3));
    geometry.setIndex(indices);

    const opacity = 0.34 + Math.sin(bandProgress * Math.PI) * 0.14;

    const material = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const mesh = new THREE.Mesh(geometry, material);

    return {
      mesh,
      geometry,
      material,
      bandIndex,
      bandCount: totalBands,
      width: bandWidth,
      offset,
      depthOffset,
    };
  }

  function updateBandGeometry(band: RibbonBand, time: number) {
    const positions = band.geometry.getAttribute(
      "position"
    ) as THREE.BufferAttribute;

    const bandProgress =
      band.bandCount === 1 ? 0 : band.bandIndex / (band.bandCount - 1);

    for (let y = 0; y <= heightSegments; y++) {
      for (let x = 0; x <= widthSegments; x++) {
        const u = x / widthSegments;
        const v = y / heightSegments;
        const index = y * (widthSegments + 1) + x;

        const centeredV = v - 0.5;

        const horizontalX =
          -4.85 +
          u * 9.7 +
          Math.sin(u * Math.PI * 1.6 + time * 0.22 + band.offset) * 0.18;

        const ribbonHeight =
          2.25 +
          Math.sin(u * Math.PI) * 1.05 +
          Math.sin(u * Math.PI * 2.3 + time * 0.18) * 0.18;

        const bandCenterY =
          (bandProgress - 0.5) *
          ribbonHeight *
          (0.75 + Math.sin(u * Math.PI) * 0.2);

        const waveY =
          Math.sin(u * Math.PI * 2.4 + time * 0.55 + band.offset * 2.1) *
          0.22;

        const fold =
          Math.sin(
            centeredV * Math.PI * 2.2 +
              u * Math.PI * 6.0 +
              time * 0.75 +
              band.offset
          ) * 0.09;

        const twist =
          Math.sin(u * Math.PI * 3.1 + time * 0.45 + band.offset * 1.8) * 1.1;

        const xPos = horizontalX;
        const yPos = bandCenterY + centeredV * band.width + waveY;
        const zPos =
          Math.cos(twist + centeredV * Math.PI * 2.1) * 0.52 +
          fold +
          band.depthOffset -
          1.2;

        positions.setXYZ(index, xPos, yPos, zPos);
      }
    }

    positions.needsUpdate = true;
    band.geometry.computeVertexNormals();
  }

  for (let i = 0; i < bandCount; i++) {
    const band = createBand(i, bandCount);
    bands.push(band);
    updateBandGeometry(band, 0);
    ribbonGroup.add(band.mesh);
  }

  const glowCanvas = document.createElement("canvas");
  glowCanvas.width = 512;
  glowCanvas.height = 512;

  const glowCtx = glowCanvas.getContext("2d");

  if (glowCtx) {
    const gradient = glowCtx.createRadialGradient(256, 256, 18, 256, 256, 250);
    gradient.addColorStop(0, "rgba(51,159,216,0.36)");
    gradient.addColorStop(0.4, "rgba(99,91,255,0.16)");
    gradient.addColorStop(0.72, "rgba(241,151,93,0.12)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    glowCtx.fillStyle = gradient;
    glowCtx.fillRect(0, 0, 512, 512);
  }

  const glowTexture = new THREE.CanvasTexture(glowCanvas);

  const glowSprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      opacity: 0.86,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );

  glowSprite.position.set(0, 0, -3.2);
  glowSprite.scale.set(12.5, 7.2, 1);
  scene.add(glowSprite);

  const particleGeometry = new THREE.BufferGeometry();
  const particleCount = 100;
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = -5.5 + Math.random() * 11;
    particlePositions[i * 3 + 1] = -2.2 + Math.random() * 4.4;
    particlePositions[i * 3 + 2] = -3.4 + Math.random() * 2.5;
  }

  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(particlePositions, 3)
  );

  const particleMaterial = new THREE.PointsMaterial({
    color: "#ffffff",
    size: 0.013,
    transparent: true,
    opacity: 0.14,
    depthWrite: false,
  });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  let frameId = 0;
  const clock = new THREE.Clock();

  function animate() {
    const time = clock.getElapsedTime();

    bands.forEach((band, index) => {
      updateBandGeometry(band, time + index * 0.018);
    });

    ribbonGroup.rotation.y = -0.18 + Math.sin(time * 0.22) * 0.12;
    ribbonGroup.rotation.x = -0.04 + Math.sin(time * 0.16) * 0.035;
    ribbonGroup.rotation.z = -0.03 + Math.sin(time * 0.13) * 0.026;

    ribbonGroup.position.y = Math.sin(time * 0.32) * 0.055;
    ribbonGroup.position.x = 0.25 + Math.sin(time * 0.2) * 0.055;

    glowSprite.material.opacity = 0.72 + Math.sin(time * 0.7) * 0.09;

    particles.rotation.y += 0.0004;
    particles.rotation.z += 0.0003;

    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
  }

  animate();

  function onResize() {
    const nextWidth = mount.clientWidth || window.innerWidth;
    const nextHeight = mount.clientHeight || 560;

    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(nextWidth, nextHeight);
  }

  window.addEventListener("resize", onResize);

  return () => {
    cancelAnimationFrame(frameId);
    window.removeEventListener("resize", onResize);

    bands.forEach((band) => {
      band.geometry.dispose();
      band.material.dispose();
    });

    glowTexture.dispose();
    particleGeometry.dispose();
    particleMaterial.dispose();

    renderer.dispose();

    if (renderer.domElement.parentElement) {
      renderer.domElement.parentElement.removeChild(renderer.domElement);
    }
  };
}