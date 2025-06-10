
import { Flame, Award, TrendingUp, Calendar } from "lucide-react";

const ProgressDashboard = () => {
  return (
    <section className="py-16 bg-soft-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-deep-navy mb-4">
            Track Your Learning Journey
          </h2>
          <p className="text-xl text-graphite-gray">
            See your progress and celebrate your achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Streak */}
          <div className="bg-cream-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-bright-mustard rounded-full flex items-center justify-center mx-auto mb-4">
              <Flame className="h-8 w-8 text-deep-navy" />
            </div>
            <div className="text-3xl font-bold text-deep-navy mb-2">7</div>
            <div className="text-graphite-gray">Day Streak</div>
          </div>

          {/* Badges */}
          <div className="bg-cream-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-scholarly-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-deep-navy mb-2">12</div>
            <div className="text-graphite-gray">Badges Earned</div>
          </div>

          {/* Hours */}
          <div className="bg-cream-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-bright-mustard rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-deep-navy" />
            </div>
            <div className="text-3xl font-bold text-deep-navy mb-2">48</div>
            <div className="text-graphite-gray">Hours Learned</div>
          </div>

          {/* Calendar */}
          <div className="bg-cream-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-scholarly-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-deep-navy mb-2">23</div>
            <div className="text-graphite-gray">Days Active</div>
          </div>
        </div>

        {/* Speech bubble motivation */}
        <div className="max-w-md mx-auto">
          <div className="bg-bright-mustard rounded-2xl p-6 relative shadow-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-bright-mustard rotate-45"></div>
            <p className="text-deep-navy font-semibold text-center text-lg">
              🎉 You're on a 3-day learning streak! Keep it up!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;
