"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);

  // Glow besar: mengikuti lebih lambat
  const bigX = useSpring(x, { stiffness: 80, damping: 20, mass: 0.6 });
  const bigY = useSpring(y, { stiffness: 80, damping: 20, mass: 0.6 });

  // Titik kecil: mengikuti lebih cepat
  const dotX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.4 });
  const dotY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.4 });

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hanya aktif di perangkat dengan mouse, dan hormati pengaturan reduced motion
    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasMouse || reduced) return;

    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Glow besar */}
      <motion.div
        style={{
          x: bigX,
          y: bigY,
          background:
            "radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)",
        }}
        className="absolute left-0 top-0 -ml-[300px] -mt-[300px] h-[600px] w-[600px] rounded-full"
      />

      {/* Cahaya inti */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          background:
            "radial-gradient(circle, rgba(216,180,254,0.35) 0%, rgba(168,85,247,0.12) 45%, transparent 70%)",
        }}
        className="absolute left-0 top-0 -ml-[60px] -mt-[60px] h-[120px] w-[120px] rounded-full blur-[2px]"
      />
    </div>
  );
}