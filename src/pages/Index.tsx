import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Goals from '@/components/Goals';
import Syllabus from '@/components/Syllabus';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Goals />
      <Syllabus />
      <HowItWorks />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
