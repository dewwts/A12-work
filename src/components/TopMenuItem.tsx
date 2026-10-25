import Link from "next/link";
import type { ReactNode } from "react";

export default function TopMenuItem({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="rounded-full px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-100 hover:text-emerald-800">{children}</Link>;
}
