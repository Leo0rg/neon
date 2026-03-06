import WorksHero from '../components/WorksHero';
import ContactSection from '../components/ContactSection';
import WorksMenu from '../components/WorksMenu';

interface WorksPageProps {
  onOpenSurvey: () => void;
}

const WorksPage = ({ onOpenSurvey }: WorksPageProps) => {
  return (
    <>
      <WorksHero />
      <ContactSection onOpenSurvey={onOpenSurvey} />
      <WorksMenu />
    </>
  );
};

export default WorksPage; 