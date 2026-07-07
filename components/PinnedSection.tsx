"use client";

import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  height?: string; // total scroll distance, e.g. "350vh"
  className?: string;
  children: ReactNode;
};

// A tall section whose content stays pinned (CSS sticky) for the section's
// full height. Consumers attach scrubbed timelines with the forwarded ref
// as the ScrollTrigger trigger (start "top top", end "bottom bottom").
const PinnedSection = forwardRef<HTMLElement, Props>(function PinnedSection(
  { id, height = "300vh", className, children },
  ref
) {
  return (
    <section id={id} ref={ref} className={cn("relative", className)} style={{ height }}>
      <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
    </section>
  );
});

export default PinnedSection;
