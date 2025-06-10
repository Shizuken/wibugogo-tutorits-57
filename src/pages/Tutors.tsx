
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TutorCard from "@/components/TutorCard";

const Tutors = () => {
  const allTutors = [
    {
      name: "Rizki Pratama",
      image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
      title: "Statistik & Data Science",
      rating: 5,
      studentCount: 245,
      reviewCount: 89
    },
    {
      name: "Sari Indahsari",
      image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
      title: "Teknik Mesin",
      rating: 4,
      studentCount: 156,
      reviewCount: 67
    },
    {
      name: "Ahmad Fauzi",
      image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
      title: "Matematika Terapan",
      rating: 5,
      studentCount: 312,
      reviewCount: 124
    },
    {
      name: "Dewi Maharani",
      image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
      title: "Fisika Dasar",
      rating: 4,
      studentCount: 198,
      reviewCount: 78
    },
    {
      name: "Budi Santoso",
      image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
      title: "Pemrograman Python",
      rating: 5,
      studentCount: 423,
      reviewCount: 156
    },
    {
      name: "Nia Ramadhani",
      image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
      title: "Ekonomi Bisnis",
      rating: 4,
      studentCount: 167,
      reviewCount: 92
    },
    {
      name: "Dimas Prasetyo",
      image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
      title: "Kimia Organik",
      rating: 5,
      studentCount: 134,
      reviewCount: 56
    },
    {
      name: "Fitri Handayani",
      image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
      title: "Algoritma & Struktur Data",
      rating: 4,
      studentCount: 289,
      reviewCount: 98
    },
    {
      name: "Arief Wibowo",
      image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
      title: "Kalkulus Diferensial",
      rating: 5,
      studentCount: 356,
      reviewCount: 134
    },
    {
      name: "Maya Sari",
      image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
      title: "Manajemen Keuangan",
      rating: 4,
      studentCount: 187,
      reviewCount: 71
    },
    {
      name: "Hendri Gunawan",
      image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
      title: "Database Management",
      rating: 5,
      studentCount: 234,
      reviewCount: 87
    },
    {
      name: "Anisa Putri",
      image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
      title: "Termodinamika",
      rating: 4,
      studentCount: 123,
      reviewCount: 45
    }
  ];

  return (
    <div className="flex h-screen bg-cream-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto bg-cream-white">
          <div className="p-6 space-y-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-scholarly-blue to-pastel-sky-blue rounded-xl shadow-sm p-8 text-center">
              <h1 className="text-4xl font-bold text-deep-navy mb-4">Meet Our Expert Tutors</h1>
              <p className="text-graphite-gray text-lg">Learn from world-class educators and industry professionals</p>
            </section>

            {/* Tutors Grid */}
            <section className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
              <h2 className="text-2xl font-bold text-deep-navy mb-6">Our Teaching Faculty</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allTutors.map((tutor, index) => (
                  <TutorCard
                    key={index}
                    name={tutor.name}
                    image={tutor.image}
                    title={tutor.title}
                    rating={tutor.rating}
                    studentCount={tutor.studentCount}
                    reviewCount={tutor.reviewCount}
                  />
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-bright-mustard rounded-xl shadow-sm p-8 text-center">
              <h3 className="text-2xl font-bold text-deep-navy mb-4">Want to become a tutor?</h3>
              <p className="text-graphite-gray mb-6">Join our community of expert educators and help students around the world</p>
              <button className="bg-deep-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-graphite-gray transition-colors">
                Apply to Teach
              </button>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tutors;
