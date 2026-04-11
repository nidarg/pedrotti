import SectionContainer from "../layout/SectionContainer";
import HeroLogo from "./HeroLogo";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";

export default function Hero() {
  return (
    <SectionContainer className="pt-8 pb-16 md:pt-10 md:pb-16">
      <div>
        <HeroLogo />
        <HeroContent />
        <HeroActions />
      </div>
    </SectionContainer>
  );
}