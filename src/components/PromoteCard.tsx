"use client";

import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <section className="mt-10 flex flex-col gap-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
      <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={playing} />
      <div className="flex flex-col items-start gap-5">
        <p className="text-2xl font-semibold tracking-tight text-stone-900">Book your venue today.</p>
        <button
          type="button"
          className="rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </section>
  );
}
