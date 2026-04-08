import Image from "next/image";
import { siteData } from "../../lib/site-data";

export default function HeroLogo() {
  return (
    <Image
      src="/images/logo-pedrotti.png"
      alt={siteData.company.shortName}
      width={360}
      height={160}
      priority
      className="mb-10 h-auto w-64 sm:w-80 md:w-96"
    />
  );
}