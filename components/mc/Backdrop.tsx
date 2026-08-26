/**
 * The tiled dirt backdrop every Minecraft menu sits on, dimmed so white text
 * clears WCAG contrast against it. The tile is generated, not extracted —
 * see scripts/gen-textures.mjs.
 */
export default function Backdrop() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <div
        className="mc-drift absolute inset-0"
        style={{
          backgroundImage: "url(/textures/dirt.png)",
          backgroundSize: "64px 64px",
          backgroundRepeat: "repeat",
          animation: "mc-drift 90s linear infinite",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/55" />
    </div>
  );
}
