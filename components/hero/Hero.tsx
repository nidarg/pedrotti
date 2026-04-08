import HeroLogo from "./HeroLogo";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroLocations from "./HeroLocations";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16">
      <div className="max-w-4xl">
        <HeroLogo />
        <HeroContent />
        <HeroActions />
        <HeroLocations />
      </div>
    </section>
  );
}