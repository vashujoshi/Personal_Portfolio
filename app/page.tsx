import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Recentprojects from "@/components/Recentprojects";

export default function Home() {
  return (
    <main className="relative flex bg-black-100 justify-center overflow-hidden items-center mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Recentprojects />
      </div>
    </main>
  );
}
