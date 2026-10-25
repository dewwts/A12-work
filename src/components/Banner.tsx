"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";

const covers = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section
      className="relative isolate cursor-pointer overflow-hidden rounded-3xl bg-stone-900 px-7 py-20 shadow-sm sm:px-14 sm:py-28"
      aria-labelledby="banner-title"
      onClick={() => setIndex((index + 1) % covers.length)}
    >
      <Image src={covers[index]} alt="A welcoming event venue" fill priority className="-z-20 object-cover" sizes="(max-width: 1200px) 100vw, 1152px" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/85 via-stone-900/60 to-stone-900/15" />
      {session?.user?.name ? (
        <p className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-stone-900 shadow-md">Welcome {session.user.name}</p>
      ) : null}
      <div className="max-w-xl text-white">
        <p className="text-xs font-semibold tracking-[0.25em] text-emerald-200">VENUE EXPLORER</p>
        <h1 id="banner-title" className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Where every event finds its venue.</h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-stone-100 sm:text-lg">Discover welcoming spaces for celebrations, meetings, and the moments worth gathering for.</p>
      </div>
      <button
        type="button"
        className="absolute bottom-5 right-5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 shadow-md transition hover:bg-emerald-100"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/venue");
        }}
      >
        Select Venue
      </button>
    </section>
  );
}
