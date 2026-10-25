"use client";

import Image from "next/image";
import Link from "next/link";
import InteractiveCard from "@/components/InteractiveCard";
import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function Card({
  vid,
  venueName,
  imgSrc,
  onRatingChange,
}: {
  vid: string;
  venueName: string;
  imgSrc: string;
  onRatingChange?: (venueName: string, rating: number) => void;
}) {
  const [rating, setRating] = useState<number | null>(0);

  const handleRatingChange = (_event: React.SyntheticEvent, value: number | null) => {
    setRating(value);
    onRatingChange?.(venueName, value ?? 0);
  };

  return (
    <InteractiveCard>
      <article className="group flex h-full flex-col overflow-hidden">
        <Link href={`/venue/${vid}`} className="block">
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
            <Image
              src={imgSrc}
              alt={venueName}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="px-5 pt-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700">FEATURED VENUE</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">{venueName}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              Beautifully prepared for celebrations, meetings, and intimate gatherings.
            </p>
          </div>
        </Link>
        {onRatingChange ? (
          <div className="mt-auto px-5 pb-5 pt-2">
            <Rating
              id={`${venueName} Rating`}
              name={`${venueName} Rating`}
              data-testid={`${venueName} Rating`}
              value={rating}
              onChange={handleRatingChange}
              aria-label={`${venueName} Rating`}
            />
          </div>
        ) : (
          <div className="pb-5" />
        )}
      </article>
    </InteractiveCard>
  );
}
