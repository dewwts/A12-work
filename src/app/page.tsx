import Banner from "@/components/Banner";
import PromoteCard from "@/components/PromoteCard";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 sm:px-8">
      <Banner />
      <PromoteCard />
    </main>
  );
}
