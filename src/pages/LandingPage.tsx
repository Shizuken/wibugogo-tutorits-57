
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import SubjectCarousel from "@/components/landing/SubjectCarousel";
import FeaturedCourse from "@/components/landing/FeaturedCourse";
import ProgressDashboard from "@/components/landing/ProgressDashboard";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";
import NewsletterStrip from "@/components/landing/NewsletterStrip";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-soft-white">
      <Navigation />
      <HeroSection />
      <SubjectCarousel />
      <FeaturedCourse />
      <ProgressDashboard />
      <Testimonials />
      <NewsletterStrip />
      <Footer />
    </div>
  );
};

export default LandingPage;
