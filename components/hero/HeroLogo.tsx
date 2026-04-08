import Image from "next/image";
import { siteData } from "../../lib/site-data";

export default function HeroLogo() {
  return (
    <div className="mb-6 w-full">
      <Image
        src="/images/logo-pedrotti.png"
        alt={siteData.company.shortName}
        width={1400}
        height={320}
        priority
        className="h-auto w-56 sm:w-72 md:w-96 lg:w-[520px]"
      />
    </div>
  );
}