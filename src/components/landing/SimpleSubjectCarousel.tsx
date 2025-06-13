
const subjects = [
  { 
    name: "Matematika", 
    emoji: "🧮",
    color: "bg-bright-mustard",
    description: "Kalkulus, Aljabar, Statistik",
    students: "1,234"
  },
  { 
    name: "Pemrograman", 
    emoji: "💻",
    color: "bg-scholarly-blue",
    description: "Python, Java, Web Development", 
    students: "987"
  },
  { 
    name: "Fisika Dasar", 
    emoji: "🔬",
    color: "bg-bright-mustard",
    description: "Mekanika, Listrik, Magnet",
    students: "756"
  },
  { 
    name: "Ekonomi Mikro", 
    emoji: "📈",
    color: "bg-scholarly-blue",
    description: "Pasar, Permintaan, Penawaran",
    students: "543"
  },
  { 
    name: "Kimia Industri", 
    emoji: "📚",
    color: "bg-bright-mustard",
    description: "Organik, Anorganik, Fisika",
    students: "432"
  },
  { 
    name: "Teknik Sipil", 
    emoji: "🎓",
    color: "bg-scholarly-blue",
    description: "Struktur, Konstruksi, Material",
    students: "321"
  },
];

const SimpleSubjectCarousel = () => {
  return (
    <section className="py-16 bg-cream-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-deep-navy mb-4">
            Kategori Populer
          </h2>
          <p className="text-xl text-graphite-gray">
            Jelajahi mata kuliah favorit mahasiswa ITS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="bg-white rounded-2xl p-6 text-center border border-pastel-sky-blue group-hover:border-scholarly-blue transition-all duration-300 shadow-sm hover:shadow-lg">
                <div className={`w-16 h-16 ${subject.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce`}>
                  <span className="text-2xl">{subject.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-2">{subject.name}</h3>
                <p className="text-sm text-graphite-gray mb-3">{subject.description}</p>
                <div className="flex items-center justify-center text-scholarly-blue mb-4">
                  <span className="text-xl mr-1">📚</span>
                  <span className="text-sm font-medium">{subject.students} mahasiswa</span>
                </div>
                
                {/* Hover CTA */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-scholarly-blue hover:bg-deep-navy text-white rounded-full font-semibold px-4 py-2 text-sm transition-all duration-300">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleSubjectCarousel;
