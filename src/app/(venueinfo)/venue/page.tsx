import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default async function VenuePage() {
  const venues = getVenues();

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-2 sm:px-8">
      <VenueCatalog venuesJson={venues} />
    </main>
  );
}
