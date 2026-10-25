"use client";

import type { ReactNode } from "react";
import { useState } from "react";

export default function InteractiveCard({ children }: { children: ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${isHovered ? "shadow-2xl bg-neutral-200" : "shadow-lg bg-white"} h-full rounded-lg transition-shadow`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
