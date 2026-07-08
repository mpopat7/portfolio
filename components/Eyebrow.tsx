export default function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
      <span aria-hidden className="h-px w-8 bg-ember/70" />
      {children}
    </p>
  );
}
