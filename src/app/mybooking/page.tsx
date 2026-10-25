import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
      <p className="text-xs font-semibold tracking-[0.22em] text-emerald-700">VENUE EXPLORER</p>
      <h1 className="mb-10 mt-3 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">My Booking</h1>
      <BookingList />
    </main>
  );
}
