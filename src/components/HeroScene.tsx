import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { useTheme } from "../ThemeProvider";

const CODE_LINES = [
  "const engineer = {",
  '  name: "Vismay",',
  '  focus: ["backend",',
  '    "data", "cloud", "AI"],',
  '  motto: "build things',
  '    that hold up",',
  "};",
  "",
  "while (alive) {",
  "  learn();",
  "  build();",
  "  ship();",
  "}",
];

function makeScreen() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 384;
  const ctx = canvas.getContext("2d")!;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;

  const draw = (lineIdx: number, charIdx: number, cursorOn: boolean) => {
    ctx.fillStyle = "#1b1613";
    ctx.fillRect(0, 0, 512, 384);
    ctx.font = "500 22px Menlo, 'SF Mono', monospace";

    const lineH = 27;
    const top = 34;
    for (let i = 0; i <= lineIdx && i < CODE_LINES.length; i++) {
      const full = CODE_LINES[i];
      const text = i < lineIdx ? full : full.slice(0, charIdx);
      // strings in lavender, the rest warm amber
      let x = 26;
      let inStr = false;
      for (const ch of text) {
        if (ch === '"') inStr = !inStr;
        ctx.fillStyle = inStr || ch === '"' ? "#b9a8e6" : "#e2b077";
        ctx.fillText(ch, x, top + i * lineH);
        x += ctx.measureText(ch).width;
      }
      if (i === lineIdx && cursorOn) {
        ctx.fillStyle = "#e8a7b8";
        ctx.fillRect(x + 2, top + i * lineH - 18, 11, 22);
      }
    }
    texture.needsUpdate = true;
  };

  return { texture, draw };
}

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dark = theme === "dark";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0, 0);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      50,
    );
    camera.position.set(0, 0.3, 7);

    // ── Soft pastel lighting ──
    scene.add(new THREE.AmbientLight(0xfff2e0, dark ? 0.55 : 0.95));
    const key = new THREE.DirectionalLight(0xfff6e8, dark ? 1.3 : 1.1);
    key.position.set(2.5, 3.5, 4);
    scene.add(key);
    const roseFill = new THREE.DirectionalLight(0xe8a7b8, dark ? 0.85 : 0.55);
    roseFill.position.set(-4, 1, 2.5);
    scene.add(roseFill);
    const lavFill = new THREE.DirectionalLight(0xb3a3d8, dark ? 0.75 : 0.45);
    lavFill.position.set(4, -1.5, 2);
    scene.add(lavFill);

    // ── Materials ──
    const cream = dark ? 0xd9cdb8 : 0xf0e7d6;
    const bodyMat = new THREE.MeshStandardMaterial({
      color: cream,
      roughness: 0.55,
      metalness: 0.05,
    });
    const bezelMat = new THREE.MeshStandardMaterial({ color: 0x2a241e, roughness: 0.6 });
    const slotMat = new THREE.MeshStandardMaterial({ color: 0x3a332b, roughness: 0.7 });

    const group = new THREE.Group();
    const computer = new THREE.Group();

    // ── Monitor body ──
    const body = new THREE.Mesh(new RoundedBoxGeometry(2.3, 2.1, 1.7, 4, 0.14), bodyMat);
    computer.add(body);

    // Screen bezel + live screen
    const bezel = new THREE.Mesh(new RoundedBoxGeometry(1.78, 1.4, 0.1, 3, 0.05), bezelMat);
    bezel.position.set(0, 0.16, 0.83);
    computer.add(bezel);

    const { texture: screenTex, draw: drawScreen } = makeScreen();
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTex });
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.2), screenMat);
    screen.position.set(0, 0.16, 0.892);
    computer.add(screen);

    // Floppy slit + rose power dot
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.045, 0.04), slotMat);
    slot.position.set(0.45, -0.79, 0.86);
    computer.add(slot);
    const dotMat = new THREE.MeshStandardMaterial({
      color: 0xe8a7b8,
      emissive: 0xe8a7b8,
      emissiveIntensity: dark ? 0.9 : 0.4,
      roughness: 0.4,
    });
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.035, 16, 16), dotMat);
    dot.position.set(-0.85, -0.79, 0.87);
    computer.add(dot);

    // ── Keyboard ──
    const kbGroup = new THREE.Group();
    const kbBase = new THREE.Mesh(new RoundedBoxGeometry(2.1, 0.13, 0.78, 3, 0.05), bodyMat);
    kbGroup.add(kbBase);

    const keyGeo = new RoundedBoxGeometry(0.125, 0.05, 0.125, 2, 0.02);
    const keyMat = new THREE.MeshStandardMaterial({
      color: dark ? 0xcabfa9 : 0xe6dcc8,
      roughness: 0.5,
    });
    const ROWS = 4,
      COLS = 13;
    const keys = new THREE.InstancedMesh(keyGeo, keyMat, ROWS * COLS + 1);
    const tmp = new THREE.Object3D();
    const accents: Record<number, THREE.Color> = {
      3: new THREE.Color(0xe8a7b8),
      17: new THREE.Color(0xb3a3d8),
      38: new THREE.Color(0xe2b077),
      44: new THREE.Color(0xe8a7b8),
    };
    let idx = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        tmp.position.set(-0.9 + c * 0.15, 0.08, -0.24 + r * 0.15);
        tmp.updateMatrix();
        keys.setMatrixAt(idx, tmp.matrix);
        keys.setColorAt(idx, accents[idx] ?? new THREE.Color(dark ? 0xcabfa9 : 0xe6dcc8));
        idx++;
      }
    }
    // space bar
    tmp.position.set(0, 0.08, 0.28);
    tmp.scale.set(4.5, 1, 1);
    tmp.updateMatrix();
    keys.setMatrixAt(idx, tmp.matrix);
    keys.setColorAt(idx, new THREE.Color(dark ? 0xcabfa9 : 0xe6dcc8));
    kbGroup.add(keys);

    kbGroup.position.set(0, -1.28, 1.35);
    kbGroup.rotation.x = -0.06;
    computer.add(kbGroup);

    computer.position.y = 0.18;
    group.add(computer);

    // ── Floating pastel orbs ──
    const orbMat1 = new THREE.MeshStandardMaterial({ color: 0xe8a7b8, roughness: 0.35 });
    const orbMat2 = new THREE.MeshStandardMaterial({ color: 0xb3a3d8, roughness: 0.35 });
    const orb1 = new THREE.Mesh(new THREE.SphereGeometry(0.16, 32, 32), orbMat1);
    const orb2 = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), orbMat2);
    group.add(orb1, orb2);

    scene.add(group);

    const layout = () => {
      const aspect = canvas.clientWidth / canvas.clientHeight;
      group.position.x = aspect > 1.05 ? Math.min(1.8, aspect * 0.8) : 0;
      group.scale.setScalar(aspect > 1.05 ? 1 : 0.72);
    };
    layout();

    // ── Typing state ──
    let lineIdx = 0,
      charIdx = 0,
      typeAcc = 0,
      pauseAcc = 0;
    drawScreen(0, 0, true);

    let mx = 0.5,
      my = 0.5,
      scroll = 0;
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth;
      my = 1 - e.clientY / window.innerHeight;
    };
    const onScroll = () => {
      scroll = window.scrollY;
    };
    if (!coarse) window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    const clock = new THREE.Clock();
    let t = 0;
    let smx = 0.5,
      smy = 0.5;

    const renderFrame = () => {
      smx += (mx - smx) * 0.04;
      smy += (my - smy) * 0.04;

      group.rotation.y = -0.28 + (smx - 0.5) * 0.5;
      group.rotation.x = -(smy - 0.5) * 0.28 + scroll * 0.0004;
      group.position.y = Math.sin(t * 0.5) * 0.09 + scroll * 0.0011;

      orb1.position.set(
        Math.sin(t * 0.35) * 2.0,
        Math.cos(t * 0.28) * 1.2 + 0.3,
        Math.sin(t * 0.22) * 0.6,
      );
      orb2.position.set(
        Math.cos(t * 0.26) * -1.7,
        Math.sin(t * 0.31) * -1.0,
        Math.cos(t * 0.2) * 0.5,
      );

      renderer.render(scene, camera);
    };

    if (reduced) {
      lineIdx = CODE_LINES.length - 1;
      charIdx = CODE_LINES[lineIdx].length;
      drawScreen(lineIdx, charIdx, false);
      renderFrame();
    } else {
      const tick = () => {
        raf = requestAnimationFrame(tick);
        const dt = clock.getDelta();
        t += dt;

        // typing rhythm
        if (lineIdx < CODE_LINES.length) {
          typeAcc += dt;
          if (typeAcc > 0.07) {
            typeAcc = 0;
            charIdx++;
            if (charIdx > CODE_LINES[lineIdx].length) {
              lineIdx++;
              charIdx = 0;
            }
            const li = Math.min(lineIdx, CODE_LINES.length - 1);
            drawScreen(
              li,
              lineIdx < CODE_LINES.length ? charIdx : CODE_LINES[li].length,
              Math.floor(t * 2) % 2 === 0,
            );
          }
        } else {
          pauseAcc += dt;
          if (Math.floor(t * 2) % 2 === 0 || pauseAcc > 3.2) {
            drawScreen(
              CODE_LINES.length - 1,
              CODE_LINES[CODE_LINES.length - 1].length,
              Math.floor(t * 2) % 2 === 0,
            );
          }
          if (pauseAcc > 3.5) {
            pauseAcc = 0;
            lineIdx = 0;
            charIdx = 0;
          }
        }

        renderFrame();
      };
      tick();
    }

    const ro = new ResizeObserver(() => {
      const w = canvas.clientWidth,
        h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      layout();
      if (reduced) renderFrame();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      if (!coarse) window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh) o.geometry.dispose();
      });
      [bodyMat, bezelMat, slotMat, screenMat, dotMat, keyMat, orbMat1, orbMat2].forEach((m) =>
        m.dispose(),
      );
      screenTex.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0 h-full w-full" />
  );
}
