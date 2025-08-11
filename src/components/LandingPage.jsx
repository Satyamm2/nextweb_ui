import Home from "./Home";
import ClientsSection from "./ClientsSection";
import OffshoreSection from "./OffshoreSection";
import OffshoreSection2 from "./OffshoreSection2";
import OffshoreSection3 from "./OffshoreSection3";
import SliderSection from "./SliderSection";
import StatsSection from "./StatsSection";
import FAQ from "./Faq";
import TestimonialSlider from "./TestimonialSlider";
import TechnologiesSection from "./TechnologiesSection";
import RelatedBlogs from "./RelatedBlogs";
import ContactSection from "./ContactSection";

export default function LandingPage() {
  return (
    <>
    <div className="overflow-hidden">
      <Home />
      <OffshoreSection />
      <OffshoreSection2 />
      <StatsSection />
      <SliderSection />
      <ClientsSection />
      <OffshoreSection3 />
      <FAQ />
      <TestimonialSlider />
      <TechnologiesSection />
      <RelatedBlogs />
      <ContactSection />
      </div>
    </>
  );
}
