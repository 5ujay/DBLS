import HeroSection from "../components/HeroSection";
import WorkPreview from "../components/WorkPreview";
import GalleryPreview from "../components/GalleryPreview";
import OfferingsPreview from "../components/OfferingsPreview";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <HeroSection />
      <WorkPreview />
      <GalleryPreview />
      <OfferingsPreview />
      <ContactCTA />
    </div>
  );
}
