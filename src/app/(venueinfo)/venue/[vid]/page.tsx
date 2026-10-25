import Image from "next/image";
import Link from "next/link";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = await params;
  const venueDetail = await getVenue(vid);
  const venue = venueDetail.data;

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 sm:px-8">
      <Link href="/venue" className="text-sm font-semibold text-stone-600 hover:text-emerald-800">
        &larr; All venues
      </Link>
      <h1 className="mt-6 text-center text-3xl font-semibold tracking-tight text-stone-900">{venue.name}</h1>
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center">
        <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
          <Image src={venue.picture} alt={venue.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 448px" />
        </div>
        <div className="space-y-1 text-stone-700">
          <p>Name: {venue.name}</p>
          <p>Address: {venue.address}</p>
          <p>District: {venue.district}</p>
          <p>Province: {venue.province}</p>
          <p>Postal Code: {venue.postalcode}</p>
          <p>Tel: {venue.tel}</p>
          <p>Daily Rate: {venue.dailyrate}</p>
        </div>
      </div>
    </main>
  );
}
