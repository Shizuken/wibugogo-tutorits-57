
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/landing/HeroSection";
import SubjectCarousel from "@/components/landing/SubjectCarousel";
import FeaturedCourse from "@/components/landing/FeaturedCourse";
import ProgressDashboard from "@/components/landing/ProgressDashboard";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";
import NewsletterStrip from "@/components/landing/NewsletterStrip";
import LandingHeader from "@/components/landing/LandingHeader";

const LandingPage = () => {
  return (
    <div className="flex h-screen bg-cream-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <LandingHeader />
        <main className="flex-1 overflow-auto bg-cream-white">
          <HeroSection />
          <SubjectCarousel />
          <FeaturedCourse />
          <ProgressDashboard />
          <Testimonials />
          <NewsletterStrip />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
