import { useEffect, useRef, useState } from "react";

// Client-only three.js flowing ribbon background.
// Loaded dynamically to avoid SSR window errors.
export function FlowingBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || !mountRef.current) return;
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const THREE = await import("three");
      if (cancelled || !mountRef.current) return;

      const el = mountRef.current;
      const w = el.clientWidth;
      const h = el.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
      camera.position.z = 6;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);
      renderer.setClearColor(0x000000, 0);
      el.appendChild(renderer.domElement);

      // Flowing organic ribbons using tube geometries along curves
      const group = new THREE.Group();
      scene.add(group);

      const makeRibbon = (color: number, offset: number, radius: number) => {
        const points: InstanceType<typeof THREE.Vector3>[] = [];
        for (let i = 0; i < 60; i++) {
          const t = i / 59;
          const angle = t * Math.PI * 4 + offset;
          points.push(
            new THREE.Vector3(
              Math.cos(angle) * (2.5 + Math.sin(t * 6) * 0.6),
              (t - 0.5) * 8,
              Math.sin(angle) * (2.5 + Math.cos(t * 5) * 0.6),
            ),
          );
        }
        const curve = new THREE.CatmullRomCurve3(points);
        const geom = new THREE.TubeGeometry(curve, 64, radius, 8, false);
        const mat = new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.35,
        });
        return new THREE.Mesh(geom, mat);
      };

      const r1 = makeRibbon(0x6b3a2a, 0, 0.05); // wine
      const r2 = makeRibbon(0xb8d4be, 1.2, 0.06); // mint
      const r3 = makeRibbon(0xd4b48c, 2.4, 0.04); // gold
      group.add(r1, r2, r3);

      // Ambient soft glow spheres
      for (let i = 0; i < 8; i++) {
        const g = new THREE.SphereGeometry(0.15 + Math.random() * 0.2, 16, 16);
        const m = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xb8d4be : 0x9a4a3a,
          transparent: true,
          opacity: 0.25,
        });
        const s = new THREE.Mesh(g, m);
        s.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 4,
        );
        group.add(s);
      }

      let raf = 0;
      let mouseX = 0;
      let mouseY = 0;
      const onMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.6;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.6;
      };
      window.addEventListener("mousemove", onMove);

      const animate = () => {
        raf = requestAnimationFrame(animate);
        const t = performance.now() * 0.0002;
        group.rotation.y = t + mouseX * 0.5;
        group.rotation.x = Math.sin(t * 0.7) * 0.15 + mouseY * 0.3;
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        if (!el) return;
        const nw = el.clientWidth;
        const nh = el.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener("resize", onResize);

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [ready]);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-70"
    />
  );
}
