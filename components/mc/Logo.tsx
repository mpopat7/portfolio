/**
 * The title treatment. Minecraft's logo is chiselled stone blocks; this draws
 * the same idea in CSS — layered hard shadows, no image to load or license.
 */
export default function Logo({ name }: { name: string }) {
  return (
    <div className="select-none text-center leading-none">
      <span
        className="block font-mc font-bold uppercase tracking-[0.04em] text-[#cfcfcf]"
        style={{
          fontSize: "calc(26 * var(--u))",
          textShadow:
            "3px 3px 0 #4a4a4a, 6px 6px 0 #2b2b2b, 0 0 calc(3 * var(--u)) rgba(0,0,0,0.6)",
        }}
      >
        {name}
      </span>
    </div>
  );
}
