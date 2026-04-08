import { siteData } from "../../lib/site-data";

export default function HeroContent() {
  return (
    <>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
        {siteData.hero.badge}
      </p>

      <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        {siteData.hero.title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
        {siteData.hero.subtitle}
      </p>
    </>
  );
}