
const SimpleHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream-white via-pastel-sky-blue to-scholarly-blue py-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-bright-mustard rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-scholarly-blue rounded-full opacity-15 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-deep-navy leading-tight">
                Belajar bareng mahasiswa ITS,{" "}
                <span className="text-scholarly-blue">kapan saja</span>,{" "}
                <span className="text-bright-mustard">di mana saja</span>
              </h1>
              <p className="text-xl text-graphite-gray leading-relaxed">
                Platform peer-to-peer learning yang dikembangkan oleh dan untuk mahasiswa Institut Teknologi Sepuluh Nopember. 
                Temukan tutor terbaik, ikuti kursus berkualitas, dan tingkatkan prestasi akademikmu bersama.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-bright-mustard hover:bg-yellow-400 text-deep-navy font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Mulai Belajar
              </button>
              <button className="border-2 border-scholarly-blue text-scholarly-blue hover:bg-scholarly-blue hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Jadi Tutor
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-bright-mustard rounded-full mx-auto mb-2">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="text-2xl font-bold text-deep-navy">500+</div>
                <div className="text-sm text-graphite-gray">Kursus</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-scholarly-blue rounded-full mx-auto mb-2">
                  <span className="text-2xl text-white">👥</span>
                </div>
                <div className="text-2xl font-bold text-deep-navy">2000+</div>
                <div className="text-sm text-graphite-gray">Mahasiswa</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-bright-mustard rounded-full mx-auto mb-2">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="text-2xl font-bold text-deep-navy">ITS</div>
                <div className="text-sm text-graphite-gray">Community</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Study Group illustration */}
                <div className="bg-gradient-to-r from-scholarly-blue to-pastel-sky-blue rounded-2xl p-6 text-center">
                  <div className="flex justify-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-scholarly-blue text-sm font-bold">👩‍🎓</span>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-scholarly-blue text-sm font-bold">👨‍🎓</span>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-scholarly-blue text-sm font-bold">👩‍🎓</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Collaborative Learning</h3>
                  <p className="text-blue-100 mt-2">Belajar bersama sesama mahasiswa ITS</p>
                </div>
                
                {/* Learning Progress */}
                <div className="bg-cream-white rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-deep-navy font-medium">Progress Minggu Ini</span>
                    <span className="text-scholarly-blue font-bold">85%</span>
                  </div>
                  <div className="w-full bg-pastel-sky-blue rounded-full h-3">
                    <div className="bg-bright-mustard h-3 rounded-full w-4/5 transition-all duration-1000"></div>
                  </div>
                  <p className="text-graphite-gray text-sm mt-2">4 dari 5 sesi telah selesai</p>
                </div>
              </div>
            </div>
            
            {/* Floating ITS Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-bright-mustard rounded-full flex items-center justify-center animate-bounce">
              <span className="text-2xl">🎓</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-scholarly-blue rounded-full flex items-center justify-center animate-bounce">
              <span className="text-xl text-white font-bold">ITS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHeroSection;
