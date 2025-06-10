
import { Button } from "@/components/ui/button";
import { Play, Clock, Users } from "lucide-react";

const FeaturedCourse = () => {
  return (
    <section className="py-16 bg-pastel-sky-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <div className="relative">
            <div className="bg-cream-white rounded-3xl p-8 shadow-xl">
              <div className="bg-scholarly-blue rounded-2xl p-8 text-center mb-6">
                <div className="w-20 h-20 bg-bright-mustard rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-10 w-10 text-deep-navy" />
                </div>
                <h3 className="text-2xl font-bold text-white">Algebra Basics</h3>
                <p className="text-blue-100 mt-2">Learn fundamental concepts step by step</p>
              </div>
              
              {/* Course stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Clock className="h-5 w-5 text-scholarly-blue mx-auto mb-1" />
                  <div className="text-sm text-graphite-gray">2h 30m</div>
                </div>
                <div>
                  <Users className="h-5 w-5 text-scholarly-blue mx-auto mb-1" />
                  <div className="text-sm text-graphite-gray">15K students</div>
                </div>
                <div>
                  <div className="text-bright-mustard text-lg font-bold">★★★★★</div>
                  <div className="text-sm text-graphite-gray">4.9/5</div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-bright-mustard text-deep-navy px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              Featured
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-deep-navy mb-4">
                Pengantar Analisis Regresi
              </h2>
              <p className="text-xl text-graphite-gray leading-relaxed">
                Pelajari dasar-dasar analisis regresi linear dan non-linear untuk penelitian dan analisis data. 
                Cocok untuk mahasiswa statistik, ekonomi, dan teknik industri ITS.
              </p>
            </div>

            {/* Progress bar */}
            <div className="bg-cream-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-deep-navy font-medium">Your Progress</span>
                <span className="text-scholarly-blue font-bold">60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                <div className="bg-bright-mustard h-3 rounded-full w-3/5 transition-all duration-1000"></div>
              </div>
              <p className="text-graphite-gray text-sm">Lesson 6 of 10 completed</p>
            </div>

            {/* Speech bubble */}
            <div className="bg-white rounded-2xl p-6 relative shadow-md border-l-4 border-bright-mustard">
              <div className="absolute -left-2 top-6 w-4 h-4 bg-white border-l border-b border-gray-200 transform rotate-45"></div>
              <p className="text-deep-navy font-medium">
                "You're doing great! Keep up the momentum and you'll master algebra in no time."
              </p>
              <p className="text-graphite-gray text-sm mt-2">- Your Learning Assistant</p>
            </div>

            <Button 
              size="lg"
              className="bg-scholarly-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Continue Course
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
