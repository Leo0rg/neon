import AdvantagesSection from "../components/AdvantagesSection";
import CategoriesSection from "../components/CategoriesSection";
import GiftSection from "../components/GiftSection";
import HeroSection from "../components/HeroSection";
import PricingSection from "../components/PricingSection";
import VideoSection from "../components/VideoSection";
import WorkflowSection from "../components/WorkflowSection";

interface HomePageProps {
  onOpenSurvey: () => void;
}

function HomePage({ onOpenSurvey }: HomePageProps) {
  return (
    <>
      <HeroSection onOpenSurvey={onOpenSurvey} />
      <AdvantagesSection />
      <GiftSection onOpenSurvey={onOpenSurvey} />
      <CategoriesSection />
      <VideoSection />
      <WorkflowSection />
      <PricingSection />
    </>
  );
}

export default HomePage; 