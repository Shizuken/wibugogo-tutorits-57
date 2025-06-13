
const SimpleHeader = () => {
  return (
    <header className="bg-cream-white border-b border-pastel-sky-blue px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold text-deep-navy">TutorITS</h1>
          <p className="text-graphite-gray text-sm">
            Platform belajar mahasiswa ITS
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-graphite-gray">🔍</span>
            </div>
            <input
              type="text"
              placeholder="Cari tutor atau topik yang kamu butuhkan..."
              className="w-full pl-10 pr-4 py-3 border border-pastel-sky-blue rounded-full focus:outline-none focus:ring-2 focus:ring-scholarly-blue focus:border-transparent bg-white shadow-sm text-deep-navy placeholder:text-graphite-gray"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-bright-mustard hover:bg-yellow-400 text-deep-navy font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
            Mulai Belajar
          </button>
          <button className="border-2 border-scholarly-blue text-scholarly-blue hover:bg-scholarly-blue hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
            Jadi Tutor
          </button>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
