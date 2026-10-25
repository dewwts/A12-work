"use client";

import { useReducer } from "react";
import Card from "@/components/Card";

const mockVenueRepo = [
  { vid: "001", name: "The Bloom Pavilion", image: "/img/bloom.jpg" },
  { vid: "002", name: "Spark Space", image: "/img/sparkspace.jpg" },
  { vid: "003", name: "The Grand Table", image: "/img/grandtable.jpg" },
];

type RatingAction = { venueName: string; rating: number } | { venueName: string };

function ratingsReducer(ratings: Map<string, number>, action: RatingAction) {
  const nextRatings = new Map(ratings);

  if ("rating" in action) {
    nextRatings.set(action.venueName, action.rating);
  } else {
    nextRatings.delete(action.venueName);
  }

  return nextRatings;
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(
    ratingsReducer,
    new Map(mockVenueRepo.map(({ name }) => [name, 0])),
  );

  return (
    <section className="mt-14" aria-labelledby="featured-title">
      <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-emerald-700">FEATURED VENUES</p>
          <h2 id="featured-title" className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">A place for every occasion</h2>
        </div>
        <p className="text-sm text-stone-500">Curated spaces for memorable gatherings.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {mockVenueRepo.map((venue) => (
          <Card
            key={venue.vid}
            vid={venue.vid}
            venueName={venue.name}
            imgSrc={venue.image}
            onRatingChange={(venueName, rating) => dispatch({ venueName, rating })}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-2" aria-label="Venue ratings">
        {[...ratings].map(([venueName, rating]) => (
          <button
            type="button"
            key={venueName}
            data-testid={venueName}
            onClick={() => dispatch({ venueName })}
            className="w-fit text-left text-sm font-semibold text-stone-700 hover:text-emerald-800"
          >
            {venueName} Rating : {rating}
          </button>
        ))}
      </div>
    </section>
  );
}
