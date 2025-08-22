import React, { useRef, useState } from "react";

export default function GlowHeading() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setPos({ x: -9999, y: -9999 }); // Hide glow when not hovering
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-50 mb-20 text-center select-none"
    >
      <h1 className="text-4xl lg:text-6xl md:text-7xl font-bold text-white font-sans relative">
        <span
          className="relative z-10"
          style={{
            maskImage: `radial-gradient(180px at ${pos.x}px ${pos.y}px, white 0%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(180px at ${pos.x}px ${pos.y}px, white 0%, transparent 80%)`,
            WebkitMaskRepeat: "no-repeat",
            color: "white",
          }}
        >
          Track your energy usage.
          <div className="mt-3">Spot Savings</div>
        </span>

        {/* Glow effect background */}
        <span
          className="absolute top-0 left-0 w-full h-full text-cyan-300 pointer-events-none blur-2xl"
          style={{
            maskImage: `radial-gradient(180px at ${pos.x}px ${pos.y}px, white 0%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(180px at ${pos.x}px ${pos.y}px, white 0%, transparent 80%)`,
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          Track your energy usage.
          <div className="mt-3">Spot Savings</div>
        </span>
      </h1>
    </div>
  );
}
