"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer({ vdoSrc, isPlaying }: { vdoSrc: string; isPlaying: boolean }) {
  const vdoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      vdoRef.current?.play();
    } else {
      vdoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={vdoRef}
      src={vdoSrc}
      className="w-full rounded-xl object-cover md:w-80"
      controls
      loop
      muted
      playsInline
    />
  );
}
