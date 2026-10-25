import Card from "@/components/Card";

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
  const venuesJsonReady = await venuesJson;

  return (
    <section className="mt-10" aria-labelledby="catalog-title">
      <div className="mb-8 text-center">
        <h1 id="catalog-title" className="text-3xl font-semibold tracking-tight text-stone-900">Select your venue</h1>
        <p className="mt-2 text-stone-600">Explore {venuesJsonReady.count} fabulous venues in our venue catalog</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {venuesJsonReady.data.map((venueItem: VenueItem) => (
          <Card key={venueItem.id} vid={venueItem.id} venueName={venueItem.name} imgSrc={venueItem.picture} />
        ))}
      </div>
    </section>
  );
}
