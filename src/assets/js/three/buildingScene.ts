
// import * as THREE from "three";

// type SilkBand = {
//   mesh: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>;
//   geometry: THREE.BufferGeometry;
//   material: THREE.MeshBasicMaterial;
//   bandIndex: number;
//   bandCount: number;
//   width: number;
//   offset: number;
//   depthOffset: number;
// };

// export function initBuildingScene() {
//   const mount = document.getElementById("camera-canvas") as HTMLDivElement | null;

//   if (!mount) return;

//   mount.innerHTML = "";

//  const updateCanvasLayer = () => {
//   if (window.scrollY > 40) {
//     mount.classList.add("is-behind-header");
//   } else {
//     mount.classList.remove("is-behind-header");
//   }
// };

// updateCanvasLayer();

// window.addEventListener("scroll", updateCanvasLayer, { passive: true });
//   const scene = new THREE.Scene();

//   const camera = new THREE.PerspectiveCamera(
//     38,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );

//   camera.position.set(0, 0, 9.4);

//   const renderer = new THREE.WebGLRenderer({
//     alpha: true,
//     antialias: true,
//   });

//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setClearColor(0x000000, 0);

//   mount.appendChild(renderer.domElement);

//   const ambientLight = new THREE.AmbientLight("#ffffff", 1.35);
//   scene.add(ambientLight);

//   const silkGroup = new THREE.Group();
//   silkGroup.position.set(2.78, 0.08, -0.72);
//   silkGroup.rotation.set(0.02, -0.3, 0.08);
//   silkGroup.scale.set(1.58, 1.58, 1.58);
//   scene.add(silkGroup);

//   const bands: SilkBand[] = [];

//   const widthSegments = 6;
//   const heightSegments = 220;

//   /* تم مضاعفة العدد */
//   const bandCount = 48;

//   const palette = [
//     new THREE.Color("#eef6ff"),
//     new THREE.Color("#bfdfff"),
//     new THREE.Color("#79bfff"),
//     new THREE.Color("#5d90ff"),
//     new THREE.Color("#6e63ff"),
//     new THREE.Color("#9c75ff"),
//     new THREE.Color("#d57aff"),
//     new THREE.Color("#ff8fcb"),
//     new THREE.Color("#ffae72"),
//     new THREE.Color("#ffe1a0"),
//   ];

//   function samplePalette(t: number) {
//     const clamped = THREE.MathUtils.clamp(t, 0, 1);
//     const scaled = clamped * (palette.length - 1);
//     const index = Math.floor(scaled);
//     const nextIndex = Math.min(index + 1, palette.length - 1);
//     const localT = scaled - index;

//     return palette[index].clone().lerp(palette[nextIndex], localT);
//   }

//   function getBandColor(u: number, v: number, bandProgress: number, offset: number) {
//     const verticalShift = (1 - v) * 0.11;
//     const horizontalShift = (u - 0.5) * 0.03;
//     const drift = Math.sin(v * Math.PI * 1.7 + offset) * 0.02;

//     const t = THREE.MathUtils.clamp(
//       0.07 + bandProgress * 0.8 + verticalShift + horizontalShift + drift,
//       0,
//       1
//     );

//     const color = samplePalette(t);

//     const highlight =
//       Math.sin(v * Math.PI * 2.8 + u * Math.PI * 1.8 + offset) * 0.5 + 0.5;

//     color.lerp(new THREE.Color("#fff7ea"), highlight * 0.06);

//     return color;
//   }

//   function createBand(bandIndex: number, totalBands: number): SilkBand {
//     const vertexCount = (widthSegments + 1) * (heightSegments + 1);

//     const positions = new Float32Array(vertexCount * 3);
//     const colorsArray = new Float32Array(vertexCount * 3);
//     const indices: number[] = [];

//     const bandProgress = totalBands === 1 ? 0 : bandIndex / (totalBands - 1);

// const bandWidth = 0.065 + Math.sin(bandProgress * Math.PI) * 0.015;
//     const offset = bandProgress * 0.75;
//     const depthOffset = (bandProgress - 0.5) * 0.18;

//     for (let y = 0; y <= heightSegments; y++) {
//       for (let x = 0; x <= widthSegments; x++) {
//         const u = x / widthSegments;
//         const v = y / heightSegments;
//         const index = y * (widthSegments + 1) + x;

//         positions[index * 3] = 0;
//         positions[index * 3 + 1] = 0;
//         positions[index * 3 + 2] = 0;

//         const color = getBandColor(u, v, bandProgress, offset);

//         colorsArray[index * 3] = color.r;
//         colorsArray[index * 3 + 1] = color.g;
//         colorsArray[index * 3 + 2] = color.b;
//       }
//     }

//     for (let y = 0; y < heightSegments; y++) {
//       for (let x = 0; x < widthSegments; x++) {
//         const a = y * (widthSegments + 1) + x;
//         const b = a + 1;
//         const c = a + (widthSegments + 1);
//         const d = c + 1;

//         indices.push(a, c, b);
//         indices.push(b, c, d);
//       }
//     }

//     const geometry = new THREE.BufferGeometry();
//     geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
//     geometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3));
//     geometry.setIndex(indices);

//     const opacity = 0.34 + Math.sin(bandProgress * Math.PI) * 0.12;

//     const material = new THREE.MeshBasicMaterial({
//       vertexColors: true,
//       transparent: true,
//       opacity,
//       side: THREE.DoubleSide,
//       depthWrite: false,
//       blending: THREE.NormalBlending,
//     });

//     const mesh = new THREE.Mesh(geometry, material);

//     return {
//       mesh,
//       geometry,
//       material,
//       bandIndex,
//       bandCount: totalBands,
//       width: bandWidth,
//       offset,
//       depthOffset,
//     };
//   }

//   function updateBandGeometry(band: SilkBand, time: number) {
//     const positions = band.geometry.getAttribute("position") as THREE.BufferAttribute;
//     const bandProgress =
//       band.bandCount === 1 ? 0 : band.bandIndex / (band.bandCount - 1);

//     for (let y = 0; y <= heightSegments; y++) {
//       for (let x = 0; x <= widthSegments; x++) {
//         const u = x / widthSegments;
//         const v = y / heightSegments;
//         const index = y * (widthSegments + 1) + x;

//         const centeredU = u - 0.5;

//         const overallWidth =
//           2.2 +
//           Math.sin(v * Math.PI) * 0.92 +
//           Math.sin(v * Math.PI * 2.05 + time * 0.18) * 0.1;

//         const bandCenterOffset = (bandProgress - 0.5) * overallWidth;

//         const mainSway =
//           Math.sin(v * Math.PI * 1.08 + time * 0.14 + band.offset) * 0.84 +
//           Math.sin(v * Math.PI * 2.0 + time * 0.08 + band.offset * 0.7) * 0.18;

//         const twist =
//           Math.sin(v * Math.PI * 2.65 + time * 0.44 + band.offset * 2.0) * 1.08;

//         const fold =
//           Math.sin(
//             centeredU * Math.PI * 2.0 +
//               v * Math.PI * 4.7 +
//               time * 0.68 +
//               band.offset
//           ) * 0.08;

//         const edgeWave =
//           Math.sin(v * Math.PI * 6.0 + time * 0.66 + band.offset) *
//           Math.abs(centeredU) *
//           0.09;

//         const verticalY =
//           3.85 -
//           v * 7.95 +
//           Math.sin(centeredU * Math.PI + v * Math.PI * 1.7 + time * 0.22) * 0.06;

//         const xPos =
//           mainSway +
//           bandCenterOffset +
//           centeredU * band.width +
//           Math.sin(twist) * 0.12 * v;

//         const yPos = verticalY;

//         const zPos =
//           Math.cos(twist + centeredU * Math.PI * 1.9) * 0.62 +
//           fold +
//           edgeWave +
//           band.depthOffset -
//           1.12;

//         positions.setXYZ(index, xPos, yPos, zPos);
//       }
//     }

//     positions.needsUpdate = true;
//     band.geometry.computeVertexNormals();
//   }

//   for (let i = 0; i < bandCount; i++) {
//     const band = createBand(i, bandCount);
//     bands.push(band);
//     updateBandGeometry(band, 0);
//     silkGroup.add(band.mesh);
//   }

//   const particleGeometry = new THREE.BufferGeometry();
//   const particleCount = 90;
//   const particlePositions = new Float32Array(particleCount * 3);

//   for (let i = 0; i < particleCount; i++) {
//     particlePositions[i * 3] = 1.0 + Math.random() * 5.8;
//     particlePositions[i * 3 + 1] = -3.6 + Math.random() * 7.2;
//     particlePositions[i * 3 + 2] = -3.2 + Math.random() * 2.8;
//   }

//   particleGeometry.setAttribute(
//     "position",
//     new THREE.BufferAttribute(particlePositions, 3)
//   );

//   const particleMaterial = new THREE.PointsMaterial({
//     color: "#ffffff",
//     size: 0.012,
//     transparent: true,
//     opacity: 0.12,
//     depthWrite: false,
//   });

//   const particles = new THREE.Points(particleGeometry, particleMaterial);
//   scene.add(particles);

//   let animationId = 0;
//   let time = 0;

//   const clock = new THREE.Clock();

//   function animate() {
//     const delta = clock.getDelta();
//     time += delta;

//     bands.forEach((band, index) => {
//       updateBandGeometry(band, time + index * 0.02);
//     });

//     silkGroup.rotation.y = -0.3 + Math.sin(time * 0.2) * 0.12;
//     silkGroup.rotation.x = 0.02 + Math.sin(time * 0.16) * 0.035;
//     silkGroup.rotation.z = 0.08 + Math.sin(time * 0.14) * 0.03;

//     silkGroup.position.y = 0.08 + Math.sin(time * 0.28) * 0.06;
//     silkGroup.position.x = 2.78 + Math.sin(time * 0.16) * 0.06;

//     particles.rotation.y += 0.00014;
//     particles.rotation.z += 0.00018;

//     renderer.render(scene, camera);
//     animationId = requestAnimationFrame(animate);
//   }

//   animate();

//   function onResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//   }

//   window.addEventListener("resize", onResize);

//   return () => {
//     cancelAnimationFrame(animationId);
//     window.removeEventListener("resize", onResize);
//   window.removeEventListener("scroll", updateCanvasLayer);

//     bands.forEach((band) => {
//       band.geometry.dispose();
//       band.material.dispose();
//     });

//     particleGeometry.dispose();
//     particleMaterial.dispose();

//     renderer.dispose();

//     if (renderer.domElement.parentElement) {
//       renderer.domElement.parentElement.removeChild(renderer.domElement);
//     }
//   };
// }

import * as THREE from "three";

type RibbonConfig = {
  width: number;
  height: number;
  x: number;
  y: number;
  z: number;
  rotationZ: number;
  rotationY: number;
  scale: number;
  opacity: number;
  palette: string[];
  glowColor: string;
  waveStrength: number;
  curlStrength: number;
  speed: number;
  phase: number;
};

type RibbonObject = {
  mesh: THREE.Mesh<THREE.BufferGeometry, THREE.MeshPhysicalMaterial>;
  edgeA: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
  edgeB: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
  geometry: THREE.BufferGeometry;
  config: RibbonConfig;
  basePositions: Float32Array;
};

export function initBuildingScene() {
  const mount = document.getElementById("camera-canvas") as HTMLDivElement | null;
  if (!mount) return;

  mount.innerHTML = "";

  const updateCanvasLayer = () => {
    if (window.scrollY > 40) {
      mount.classList.add("is-behind-header");
    } else {
      mount.classList.remove("is-behind-header");
    }
  };

  updateCanvasLayer();
  window.addEventListener("scroll", updateCanvasLayer, { passive: true });

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    36,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.set(0, 0, 10.5);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 0);

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  mount.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight("#ffffff", 1.55);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight("#ffffff", 2.2);
  keyLight.position.set(4, 5, 7);
  keyLight.castShadow = true;
  scene.add(keyLight);

  const blueLight = new THREE.DirectionalLight("#9fd7ff", 1.35);
  blueLight.position.set(-5, 2, 5);
  scene.add(blueLight);

  const orangeLight = new THREE.DirectionalLight("#ffb15d", 1.15);
  orangeLight.position.set(4, -2, 4);
  scene.add(orangeLight);

  const pinkLight = new THREE.PointLight("#ff6bc8", 1.8, 16);
  pinkLight.position.set(2.5, 2.3, 3.2);
  scene.add(pinkLight);

  const group = new THREE.Group();
  group.position.set(1.6, 0.2, -1.2);
  group.rotation.set(0.02, -0.12, 0);
  scene.add(group);

  const ribbons: RibbonObject[] = [];

  const ribbonConfigs: RibbonConfig[] = [
    {
      width: 4.7,
      height: 10.8,
      x: 2.5,
      y: 0.15,
      z: -0.4,
      rotationZ: -0.19,
      rotationY: -0.18,
      scale: 1.06,
      opacity: 0.82,
      palette: ["#fff3c7", "#ffce4b", "#ff9626", "#ff6a35", "#ec4b9b"],
      glowColor: "#ffd46b",
      waveStrength: 0.45,
      curlStrength: 1.45,
      speed: 0.7,
      phase: 0.2,
    },
    {
      width: 5.8,
      height: 10.2,
      x: 0.0,
      y: -0.1,
      z: -1.0,
      rotationZ: 0.32,
      rotationY: 0.22,
      scale: 1.02,
      opacity: 0.52,
      palette: ["#cbe5ff", "#bca9ff", "#d976ff", "#ff76d1", "#ffad69"],
      glowColor: "#e891ff",
      waveStrength: 0.52,
      curlStrength: 1.15,
      speed: 0.55,
      phase: 1.4,
    },
    {
      width: 3.7,
      height: 10.7,
      x: -2.55,
      y: 0.4,
      z: -0.7,
      rotationZ: 0.44,
      rotationY: 0.28,
      scale: 1.12,
      opacity: 0.42,
      palette: ["#ffffff", "#d8ecff", "#9cc8ff", "#bfa2ff", "#f7a3ff"],
      glowColor: "#dcecff",
      waveStrength: 0.34,
      curlStrength: 0.95,
      speed: 0.5,
      phase: 2.1,
    },
    {
      width: 2.7,
      height: 10.6,
      x: 4.25,
      y: -0.2,
      z: -0.2,
      rotationZ: -0.03,
      rotationY: -0.34,
      scale: 1.1,
      opacity: 0.62,
      palette: ["#ffd28d", "#ff9e4f", "#ff7770", "#ff67c7", "#834cff"],
      glowColor: "#ffb15d",
      waveStrength: 0.38,
      curlStrength: 1.28,
      speed: 0.62,
      phase: 3.2,
    },
  ];

  function samplePalette(colors: THREE.Color[], t: number) {
    const clamped = THREE.MathUtils.clamp(t, 0, 1);
    const scaled = clamped * (colors.length - 1);
    const index = Math.floor(scaled);
    const nextIndex = Math.min(index + 1, colors.length - 1);
    const localT = scaled - index;

    return colors[index].clone().lerp(colors[nextIndex], localT);
  }

  function createRibbon(config: RibbonConfig): RibbonObject {
    const widthSegments = 120;
    const heightSegments = 220;

    const geometry = new THREE.PlaneGeometry(
      config.width,
      config.height,
      widthSegments,
      heightSegments
    );

    const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
    const colorsArray = new Float32Array(positionAttr.count * 3);

    const palette = config.palette.map((color) => new THREE.Color(color));

    for (let i = 0; i < positionAttr.count; i++) {
      const x = positionAttr.getX(i);
      const y = positionAttr.getY(i);

      const u = (x + config.width / 2) / config.width;
      const v = (y + config.height / 2) / config.height;

      const fiber =
        Math.sin(u * Math.PI * 26 + v * Math.PI * 5.5) * 0.018 +
        Math.sin(u * Math.PI * 54 + v * Math.PI * 3.2) * 0.01;

      const lightStreak =
        Math.pow(
          Math.max(
            0,
            Math.sin(u * Math.PI * 1.7 + v * Math.PI * 0.75 + config.phase)
          ),
          6
        ) * 0.16;

      const colorT = THREE.MathUtils.clamp(
        u * 0.72 + (1 - v) * 0.22 + fiber + lightStreak,
        0,
        1
      );

      const color = samplePalette(palette, colorT);

      const sheen =
        Math.pow(
          Math.max(
            0,
            Math.sin(u * Math.PI * 9.0 + v * Math.PI * 1.5 + config.phase)
          ),
          8
        ) * 0.18;

      color.lerp(new THREE.Color("#ffffff"), sheen);

      colorsArray[i * 3] = color.r;
      colorsArray[i * 3 + 1] = color.g;
      colorsArray[i * 3 + 2] = color.b;
    }

    geometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3));

    const material = new THREE.MeshPhysicalMaterial({
      vertexColors: true,
      transparent: true,
      opacity: config.opacity,
      roughness: 0.18,
      metalness: 0.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.16,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(config.x, config.y, config.z);
    mesh.rotation.set(0, config.rotationY, config.rotationZ);
    mesh.scale.setScalar(config.scale);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    const edgeMaterialA = new THREE.LineBasicMaterial({
      color: config.glowColor,
      transparent: true,
      opacity: 0.34,
    });

    const edgeMaterialB = new THREE.LineBasicMaterial({
      color: "#ffffff",
      transparent: true,
      opacity: 0.22,
    });

    const edgeGeometryA = new THREE.BufferGeometry();
    const edgeGeometryB = new THREE.BufferGeometry();

    const edgeA = new THREE.Line(edgeGeometryA, edgeMaterialA);
    const edgeB = new THREE.Line(edgeGeometryB, edgeMaterialB);

    mesh.add(edgeA);
    mesh.add(edgeB);

    return {
      mesh,
      edgeA,
      edgeB,
      geometry,
      config,
      basePositions: new Float32Array(positionAttr.array),
    };
  }

  ribbonConfigs.forEach((config) => {
    const ribbon = createRibbon(config);
    ribbons.push(ribbon);
    group.add(ribbon.mesh);
  });

  const tempEdgeA: number[] = [];
  const tempEdgeB: number[] = [];

  function updateRibbon(ribbon: RibbonObject, time: number) {
    const { geometry, config, basePositions, edgeA, edgeB } = ribbon;
    const positions = geometry.attributes.position as THREE.BufferAttribute;

    const width = config.width;
    const height = config.height;

    tempEdgeA.length = 0;
    tempEdgeB.length = 0;

    const widthSegments = 120;
    const heightSegments = 220;
    const rowSize = widthSegments + 1;

    for (let i = 0; i < positions.count; i++) {
      const baseX = basePositions[i * 3];
      const baseY = basePositions[i * 3 + 1];

      const u = (baseX + width / 2) / width;
      const v = (baseY + height / 2) / height;

      const centeredU = u - 0.5;
      const centeredV = v - 0.5;

      const t = time * config.speed + config.phase;

      const randomSmoothA =
        Math.sin(t * 0.62 + config.phase) * 0.55 +
        Math.sin(t * 0.31 + config.phase * 2.1) * 0.45;

      const randomSmoothB =
        Math.sin(t * 0.47 + config.phase * 1.7) * 0.5 +
        Math.sin(t * 0.23 + config.phase * 0.8) * 0.5;

      const largeCurve =
        Math.sin(v * Math.PI * 1.2 + t * 0.52) * config.waveStrength +
        Math.sin(v * Math.PI * 2.1 + t * 0.28 + randomSmoothA) * 0.22;

      const diagonalSweep =
        Math.sin((u + v) * Math.PI * 1.1 + t * 0.38) * 0.28;

      const curl =
        Math.sin(centeredU * Math.PI * 1.8 + v * Math.PI * 1.35 + t * 0.48) *
        config.curlStrength;

      const edgeLift =
        Math.pow(Math.abs(centeredU), 1.55) *
        Math.sin(v * Math.PI * 2.3 + t * 0.55 + randomSmoothB) *
        0.52;

      const fiberDepth =
        Math.sin(u * Math.PI * 36 + v * Math.PI * 5.5 + t * 1.1) * 0.018;

      const widthEnvelope =
        0.76 + Math.sin(v * Math.PI) * 0.36;

      const x =
        baseX * widthEnvelope +
        largeCurve +
        Math.sin(curl) * 0.32 +
        diagonalSweep * 0.22;

      const y =
        baseY +
        Math.sin(u * Math.PI * 1.6 + t * 0.32) * 0.08 +
        Math.sin(v * Math.PI * 3.0 + t * 0.24) * 0.06;

      const z =
        Math.cos(curl + centeredV * Math.PI * 0.7) * 0.72 +
        edgeLift +
        fiberDepth -
        0.4;

      positions.setXYZ(i, x, y, z);
    }

    positions.needsUpdate = true;
    geometry.computeVertexNormals();

    for (let y = 0; y <= heightSegments; y++) {
      const leftIndex = y * rowSize;
      const rightIndex = y * rowSize + widthSegments;

      tempEdgeA.push(
        positions.getX(leftIndex),
        positions.getY(leftIndex),
        positions.getZ(leftIndex)
      );

      tempEdgeB.push(
        positions.getX(rightIndex),
        positions.getY(rightIndex),
        positions.getZ(rightIndex)
      );
    }

    edgeA.geometry.dispose();
    edgeB.geometry.dispose();

    edgeA.geometry = new THREE.BufferGeometry();
    edgeB.geometry = new THREE.BufferGeometry();

    edgeA.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(tempEdgeA, 3)
    );

    edgeB.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(tempEdgeB, 3)
    );
  }

  const particleGeometry = new THREE.BufferGeometry();
  const particleCount = 90;
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = -4.5 + Math.random() * 9;
    particlePositions[i * 3 + 1] = -4.2 + Math.random() * 8.4;
    particlePositions[i * 3 + 2] = -3.6 + Math.random() * 3.4;
  }

  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(particlePositions, 3)
  );

  const particleMaterial = new THREE.PointsMaterial({
    color: "#ffffff",
    size: 0.012,
    transparent: true,
    opacity: 0.12,
    depthWrite: false,
  });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  let animationId = 0;
  const clock = new THREE.Clock();
  let time = 0;

  function animate() {
    const delta = clock.getDelta();
    time += delta;

    ribbons.forEach((ribbon, index) => {
      updateRibbon(ribbon, time + index * 0.4);
    });

    group.rotation.y = -0.1 + Math.sin(time * 0.13) * 0.06;
    group.rotation.x = 0.02 + Math.sin(time * 0.09) * 0.025;
    group.rotation.z = Math.sin(time * 0.08) * 0.025;

    group.position.x = 1.6 + Math.sin(time * 0.11) * 0.09;
    group.position.y = 0.2 + Math.sin(time * 0.15) * 0.07;

    particles.rotation.y += 0.00012;
    particles.rotation.z += 0.00016;

    renderer.render(scene, camera);
    animationId = requestAnimationFrame(animate);
  }

  animate();

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.innerWidth < 768) {
      group.position.set(1.2, 0.15, -1.4);
      group.scale.setScalar(0.82);
    } else {
      group.position.set(1.6, 0.2, -1.2);
      group.scale.setScalar(1);
    }
  }

  onResize();
  window.addEventListener("resize", onResize);

  return () => {
    cancelAnimationFrame(animationId);

    window.removeEventListener("resize", onResize);
    window.removeEventListener("scroll", updateCanvasLayer);

    ribbons.forEach((ribbon) => {
      ribbon.geometry.dispose();
      ribbon.mesh.material.dispose();
      ribbon.edgeA.geometry.dispose();
      ribbon.edgeA.material.dispose();
      ribbon.edgeB.geometry.dispose();
      ribbon.edgeB.material.dispose();
    });

    particleGeometry.dispose();
    particleMaterial.dispose();

    renderer.dispose();

    if (renderer.domElement.parentElement) {
      renderer.domElement.parentElement.removeChild(renderer.domElement);
    }
  };
}