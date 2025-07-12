import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import AboutTeam from './components/AboutTeam';
import ContactSection from './components/ContactSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function Landing() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <FAQ />
      <AboutTeam />
      <ContactSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Landing; 