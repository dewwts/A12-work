import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import TopMenuItem from "./TopMenuItem";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <header className="border-b border-stone-200 bg-[#fdfcf9]/95">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
        <div className="flex items-center gap-6">
          {session ? (
            <Link href="/api/auth/signout" className="text-sm font-semibold text-amber-900 underline underline-offset-4 hover:text-emerald-800">Sign-Out of {session.user?.name}</Link>
          ) : (
            <Link href="/api/auth/signin" className="text-sm font-semibold text-amber-900 underline underline-offset-4 hover:text-emerald-800">Sign-In</Link>
          )}
          <Link href="/mybooking" className="text-sm font-semibold text-amber-900 underline underline-offset-4 hover:text-emerald-800">My Booking</Link>
        </div>
        <div className="flex items-center gap-2">
          <TopMenuItem href="/booking">Booking</TopMenuItem>
          <Image src="/img/logo.png" alt="Venue Explorer" width={132} height={36} priority />
        </div>
      </nav>
    </header>
  );
}
