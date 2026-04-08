import SectionContainer from "./layout/SectionContainer";
import { siteData } from "../lib/site-data";

export default function LegalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <SectionContainer className="py-6">
        <p className="text-center text-sm text-zinc-500">
          © {currentYear} {siteData.company.name}. All rights reserved.
        </p>
      </SectionContainer>
    </footer>
  );
}