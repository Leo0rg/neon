import AboutHero from "../components/AboutHero";
import BioSection from '../components/BioSection';
import MissionSection from '../components/MissionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

interface AboutPageProps {
  onOpenSurvey: () => void;
}

function AboutPage({ onOpenSurvey }: AboutPageProps) {
  return (
    <>
      <AboutHero />
      <ContactSection onOpenSurvey={onOpenSurvey} />
      <BioSection />
      <MissionSection />
      <TestimonialsSection />
    </>
  );
}

export default AboutPage; 