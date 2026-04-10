import SectionContainer from "../layout/SectionContainer";
import HeroLogo from "./HeroLogo";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
// import HeroLocations from "./HeroLocations";

export default function Hero() {
  return (
<SectionContainer className="pt-4 pb-16 md:pt-6 md:pb-16">      <div>
        <HeroLogo />
        <HeroContent />
        <HeroActions />
        {/* <HeroLocations /> */}
      </div>
    </SectionContainer>
  );
}