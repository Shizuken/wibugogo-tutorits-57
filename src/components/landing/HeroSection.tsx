
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-soft-white via-pastel-sky-blue to-scholarly-blue">
      {/* Wave Background */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1200 400" className="w-full h-full opacity-30">
          <path
            d="M0,300 Q300,200 600,250 T1200,200 L1200,400 L0,400 Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--scholarly-blue))" />
              <stop offset="100%" stopColor="hsl(var(--bright-mustard))" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-deep-navy leading-tight">
                Explore Free Lessons in{" "}
                <span className="text-scholarly-blue">Math</span>,{" "}
                <span className="text-bright-mustard">Science</span>,{" "}
                <span className="text-scholarly-blue">Arts</span> & More
              </h1>
              <p className="text-xl text-graphite-gray leading-relaxed">
                Join millions of learners making progress at their own pace. 
                Discover interactive lessons, engaging exercises, and personalized learning paths.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-bright-mustard hover:bg-yellow-400 text-deep-navy font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-scholarly-blue text-scholarly-blue hover:bg-scholarly-blue hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Browse Courses
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-bright-mustard rounded-full mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-deep-navy" />
                </div>
                <div className="text-2xl font-bold text-deep-navy">1000+</div>
                <div className="text-sm text-graphite-gray">Lessons</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-scholarly-blue rounded-full mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-deep-navy">50M+</div>
                <div className="text-sm text-graphite-gray">Learners</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-bright-mustard rounded-full mx-auto mb-2">
                  <Award className="h-6 w-6 text-deep-navy" />
                </div>
                <div className="text-2xl font-bold text-deep-navy">Free</div>
                <div className="text-sm text-graphite-gray">Forever</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="bg-cream-white rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Bookshelf illustration */}
                <div className="bg-scholarly-blue rounded-2xl p-6 text-center">
                  <BookOpen className="h-16 w-16 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">Interactive Learning</h3>
                  <p className="text-blue-100 mt-2">Hands-on exercises and instant feedback</p>
                </div>
                
                {/* Progress visualization */}
                <div className="bg-pastel-sky-blue rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-deep-navy font-medium">Today's Progress</span>
                    <span className="text-scholarly-blue font-bold">75%</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-3">
                    <div className="bg-bright-mustard h-3 rounded-full w-3/4 transition-all duration-1000"></div>
                  </div>
                  <p className="text-graphite-gray text-sm mt-2">3 of 4 lessons completed</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-bright-mustard rounded-full flex items-center justify-center animate-bounce-subtle">
              <span className="text-2xl">📚</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-scholarly-blue rounded-full flex items-center justify-center animate-bounce-subtle" style={{animationDelay: '0.5s'}}>
              <span className="text-xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
