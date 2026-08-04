/** Fixed page-wide atmosphere: dot grid + two slow ember drifts. */
export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(244,241,234,0.055) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(120% 80% at 50% 0%, #000 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(120% 80% at 50% 0%, #000 20%, transparent 75%)",
        }}
      />
      <div className="absolute -right-[15%] top-[-10%] h-[60vw] w-[60vw] animate-drift rounded-full bg-ember/[0.055] blur-[140px]" />
      <div className="absolute -left-[20%] top-[55%] h-[45vw] w-[45vw] animate-drift-slow rounded-full bg-[#3d6fb5]/[0.05] blur-[150px]" />
    </div>
  );
}
