import { useEffect, useRef } from "react";
import { useTheme } from "../theme.jsx";

// Fond animé « constellation de données » : des points qui dérivent lentement et
// se relient quand ils sont proches, avec une légère attraction vers la souris.
// - densité adaptée à la taille de l'écran
// - pause quand l'onglet est caché
// - image fixe si l'utilisateur préfère réduire les animations
export default function Background() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const css = getComputedStyle(document.documentElement);
    const accent = css.getPropertyValue("--accent").trim() || "#f2c57c";
    const rgb = hexToRgb(accent);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let points = [];
    let frame = 0;
    const mouse = { x: -9999, y: -9999 };
    const LINK = 140;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(90, Math.max(28, (width * height) / 16000)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.6 + 0.8,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (const p of points) {
        if (!reduceMotion) {
          // légère attraction vers la souris
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 200 * 200) {
            p.vx += dx * 0.00002;
            p.vy += dy * 0.00002;
          }
          p.vx = clamp(p.vx, -0.5, 0.5);
          p.vy = clamp(p.vy, -0.5, 0.5);
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }
      }

      // liens entre points proches
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${rgb}, ${(1 - d / LINK) * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // lien vers la souris
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < LINK * 1.3) {
          ctx.strokeStyle = `rgba(${rgb}, ${(1 - dm / (LINK * 1.3)) * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      for (const p of points) {
        ctx.fillStyle = `rgba(${rgb}, 0.55)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      draw();
      frame = requestAnimationFrame(loop);
    }

    function start() {
      cancelAnimationFrame(frame);
      if (reduceMotion) draw();
      else loop();
    }

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (reduceMotion) draw();
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(frame) : start());
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        start();
      }, 150);
    };

    resize();
    start();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [theme]); // on relance pour reprendre la couleur d'accent du thème

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}
