import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClientsPage from './pages/ClientsPage';
import ServicesPage from './pages/ServicesPage';
import ContactsPage from './pages/ContactsPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import WorksPage from './pages/WorksPage';
import PolicyPage from './pages/PolicyPage';
import PostPage from './pages/PostPage';
import SurveyModal from './components/SurveyModal';


function App() {
  const [isSurveyOpen, setSurveyOpen] = useState(false);

  return (
    <Router>
      <Header onOpenSurvey={() => setSurveyOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onOpenSurvey={() => setSurveyOpen(true)} />} />
        <Route path="/about" element={<AboutPage onOpenSurvey={() => setSurveyOpen(true)} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/works" element={<WorksPage onOpenSurvey={() => setSurveyOpen(true)} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/blog/:slug" element={<PostPage />} />
      </Routes>
      <Footer />
      <SurveyModal isOpen={isSurveyOpen} onClose={() => setSurveyOpen(false)} />
    </Router>
  );
}

export default App;
