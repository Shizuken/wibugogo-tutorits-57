
import Sidebar from "@/components/Sidebar";
import SimpleHeroSection from "@/components/landing/SimpleHeroSection";
import SimpleSubjectCarousel from "@/components/landing/SimpleSubjectCarousel";
import FeaturedCourse from "@/components/landing/FeaturedCourse";
import ProgressDashboard from "@/components/landing/ProgressDashboard";
import Testimonials from "@/components/landing/Testimonials";
import SimpleFooter from "@/components/landing/SimpleFooter";
import NewsletterStrip from "@/components/landing/NewsletterStrip";
import SimpleHeader from "@/components/landing/SimpleHeader";

const SimpleLandingPage = () => {
  return (
    <div className="flex h-screen bg-cream-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <SimpleHeader />
        <main className="flex-1 overflow-auto bg-cream-white">
          <SimpleHeroSection />
          <SimpleSubjectCarousel />
          <FeaturedCourse />
          <ProgressDashboard />
          <Testimonials />
          <NewsletterStrip />
          <SimpleFooter />
        </main>
      </div>
    </div>
  );
};

export default SimpleLandingPage;
