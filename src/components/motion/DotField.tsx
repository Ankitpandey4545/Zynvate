"use client";

import { useEffect, useRef } from "react";

const DEFAULT_COLORS = ["#7A4426", "#9A5B36", "#B58468", "#2B1A10"];

type DotFieldProps = {
  className?: string;
  colors?: string[];
  ringGap?: number;
  dotSpacing?: number;
  centerX?: number;
  centerY?: number;
  innerRadius?: number;
  interaction?: number;
  lineWidth?: number;
  dashScale?: number;
};

type Ripple = { x: number; y: number; t0: number; amp: number };

export function DotField({
  className = "",
  colors = DEFAULT_COLORS,
  ringGap = 24,
  dotSpacing = 30,
  centerX = 0.5,
  centerY = 0.5,
  innerRadius = 0.14,
  interaction = 1,
  lineWidth = 2.2,
  dashScale = 1,
}: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let maxR = 1;
    let r0 = 1;
    let N = 0;
    let R = new Float32Array(0);
    let A = new Float32Array(0);
    let S = new Float32Array(0);
    let B = new Uint8Array(0);
    let OX = new Float32Array(0);
    let OY = new Float32Array(0);

    const pointer = { x: -9999, y: -9999 };
    const ripples: Ripple[] = [];
    let lastSpawn = { x: -9999, y: -9999, t: 0 };
    let visible = true;
    let raf = 0;

    const build = () => {
      const cx = w * centerX;
      const cy = h * centerY;
      maxR = Math.hypot(Math.max(cx, w - cx), Math.max(cy, h - cy));
      r0 = Math.min(w, h) * innerRadius;

      const rs: number[] = [];
      const as: number[] = [];
      for (let r = r0; r < maxR; r += ringGap * (1 + ((r - r0) / maxR) * 0.6)) {
        const n = Math.floor((2 * Math.PI * r) / dotSpacing);
        const offset = Math.random() * Math.PI * 2;
        for (let i = 0; i < n; i++) {
          if (Math.random() < 0.22) continue;
          rs.push(r + (Math.random() - 0.5) * ringGap * 0.6);
          as.push(offset + (i / n) * Math.PI * 2 + (Math.random() - 0.5) * (dotSpacing / r) * 0.6);
        }
      }
      N = rs.length;
      R = Float32Array.from(rs);
      A = Float32Array.from(as);
      S = new Float32Array(N).map(() => Math.random());
      B = new Uint8Array(N).map(() => Math.floor(Math.random() * colors.length));
      OX = new Float32Array(N);
      OY = new Float32Array(N);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      draw(performance.now(), reduceMotion);
    };

    const draw = (now: number, still = false) => {
      const t = still ? 0 : now / 1000;
      const cx = w * centerX;
      const cy = h * centerY;

      while (ripples.length) {
        const head = ripples[0];
        if (!head || t - head.t0 <= 3.5) break;
        ripples.shift();
      }

      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineWidth = lineWidth;

      const pushRadius = 130 * interaction;
      const paths: Path2D[] = colors.map(() => new Path2D());

      for (let i = 0; i < N; i++) {
        const r = R[i];
        const baseAng = A[i];
        const seed = S[i];
        const ox = OX[i];
        const oy = OY[i];
        const bucket = B[i];
        if (
          r === undefined ||
          baseAng === undefined ||
          seed === undefined ||
          ox === undefined ||
          oy === undefined ||
          bucket === undefined
        ) {
          continue;
        }
        const path = paths[bucket];
        if (!path) continue;

        const ang = baseAng + t * 0.06 * Math.sqrt(r0 / r);
        const rad = r + Math.sin(r * 0.014 - t * 1.1 + seed * 0.5) * 7;
        const cosA = Math.cos(ang);
        const sinA = Math.sin(ang);
        const x = cx + cosA * rad;
        const y = cy + sinA * rad;

        let tx = 0;
        let ty = 0;
        if (!still && interaction > 0) {
          let dx = x - pointer.x;
          let dy = y - pointer.y;
          let d2 = dx * dx + dy * dy;
          if (d2 < pushRadius * pushRadius) {
            const d = Math.sqrt(d2) || 1;
            const f = Math.pow(1 - d / pushRadius, 2) * 38 * interaction;
            tx += (dx / d) * f;
            ty += (dy / d) * f;
          }
          for (let k = 0; k < ripples.length; k++) {
            const rp = ripples[k];
            if (!rp) continue;
            dx = x - rp.x;
            dy = y - rp.y;
            d2 = dx * dx + dy * dy;
            const d = Math.sqrt(d2) || 1;
            const age = t - rp.t0;
            const diff = d - age * 320;
            const env = Math.exp(-(diff * diff) / (2 * 34 * 34)) * Math.exp(-age * 1.3) * rp.amp;
            tx += (dx / d) * env * 26 * interaction;
            ty += (dy / d) * env * 26 * interaction;
          }
        }

        const nextOx = ox + (tx - ox) * 0.14;
        const nextOy = oy + (ty - oy) * 0.14;
        OX[i] = nextOx;
        OY[i] = nextOy;

        const fx = x + nextOx;
        const fy = y + nextOy;
        const mag = Math.hypot(nextOx, nextOy);

        const edgeFade = 1 - Math.min(r / maxR, 1) * 0.35;
        const len = (3 + seed * 4) * dashScale * edgeFade + Math.min(mag * 0.35, 8);
        const skew = (seed - 0.5) * 0.9;
        const dxs = Math.cos(ang + skew) * len * 0.5;
        const dys = Math.sin(ang + skew) * len * 0.5;

        path.moveTo(fx - dxs, fy - dys);
        path.lineTo(fx + dxs, fy + dys);
      }

      for (let b = 0; b < colors.length; b++) {
        const color = colors[b];
        const path = paths[b];
        if (!color || !path) continue;
        ctx.strokeStyle = color;
        ctx.globalAlpha = b === colors.length - 1 ? 0.55 : 0.85;
        ctx.stroke(path);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now: number) => {
      if (visible) draw(now);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        pointer.x = pointer.y = -9999;
        return;
      }
      pointer.x = x;
      pointer.y = y;

      const t = performance.now() / 1000;
      const moved = Math.hypot(x - lastSpawn.x, y - lastSpawn.y);
      if (moved > 28 || (t - lastSpawn.t > 0.12 && moved > 4)) {
        ripples.push({ x, y, t0: t, amp: Math.min(1, 0.45 + moved / 120) });
        if (ripples.length > 14) ripples.shift();
        lastSpawn = { x, y, t };
      }
    };
    const onLeave = () => {
      pointer.x = pointer.y = -9999;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    resize();

    if (!reduceMotion) {
      raf = requestAnimationFrame(loop);
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [colors, ringGap, dotSpacing, centerX, centerY, innerRadius, interaction, lineWidth, dashScale]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}

export default DotField;
