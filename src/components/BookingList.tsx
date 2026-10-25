"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

const venueNames: Record<string, string> = {
  Bloom: "The Bloom Pavilion",
  Spark: "Spark Space",
  GrandTable: "The Grand Table",
};

export default function BookingList() {
  const bookItems = useSelector((state: { bookSlice: { bookItems: BookingItem[] } }) => state.bookSlice.bookItems);
  const dispatch = useDispatch();

  if (bookItems.length === 0) {
    return <p className="text-lg text-stone-600">No Venue Booking</p>;
  }

  return (
    <div className="space-y-4">
      {bookItems.map((item) => (
        <div
          key={`${item.venue}-${item.bookDate}`}
          className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="space-y-1 text-sm text-stone-700">
            <p><span className="font-semibold text-stone-900">Name-Lastname:</span> {item.nameLastname}</p>
            <p><span className="font-semibold text-stone-900">Contact-Number:</span> {item.tel}</p>
            <p><span className="font-semibold text-stone-900">Venue:</span> {venueNames[item.venue] ?? item.venue} ({item.venue})</p>
            <p><span className="font-semibold text-stone-900">Booking Date:</span> {item.bookDate}</p>
          </div>
          <button
            type="button"
            name="Cancel Booking"
            onClick={() => dispatch(removeBooking(item))}
            className="rounded-full border border-red-700 px-5 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
          >
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  );
}
