
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TutorCard from "@/components/TutorCard";

const Tutors = () => {
  const allTutors = [
    {
      name: "Rizki Pratama",
      image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
      title: "Statistik & Data Science",
      specialization: "Semester 6",
      price: "Rp 75.000/jam",
      rating: 5,
      studentCount: 245,
      reviewCount: 89,
      workingHours: 1240
    },
    {
      name: "Sari Indahsari",
      image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
      title: "Teknik Mesin",
      specialization: "Semester 4",
      price: "Rp 85.000/jam",
      rating: 4,
      studentCount: 156,
      reviewCount: 67,
      workingHours: 780
    },
    {
      name: "Ahmad Fauzi",
      image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
      title: "Matematika Terapan",
      specialization: "Semester 3",
      price: "Rp 70.000/jam",
      rating: 5,
      studentCount: 312,
      reviewCount: 124,
      workingHours: 1560
    },
    {
      name: "Dewi Maharani",
      image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
      title: "Fisika Dasar",
      specialization: "Semester 2",
      price: "Rp 65.000/jam",
      rating: 4,
      studentCount: 198,
      reviewCount: 78,
      workingHours: 990
    },
    {
      name: "Budi Santoso",
      image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
      title: "Pemrograman Python",
      specialization: "Semester 5",
      price: "Rp 95.000/jam",
      rating: 5,
      studentCount: 423,
      reviewCount: 156,
      workingHours: 2115
    },
    {
      name: "Nia Ramadhani",
      image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
      title: "Ekonomi Bisnis",
      specialization: "Semester 7",
      price: "Rp 60.000/jam",
      rating: 4,
      studentCount: 167,
      reviewCount: 92,
      workingHours: 835
    },
    {
      name: "Dimas Prasetyo",
      image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
      title: "Kimia Organik",
      specialization: "Semester 4",
      price: "Rp 80.000/jam",
      rating: 5,
      studentCount: 134,
      reviewCount: 56,
      workingHours: 670
    },
    {
      name: "Fitri Handayani",
      image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
      title: "Algoritma & Struktur Data",
      specialization: "Semester 3",
      price: "Rp 90.000/jam",
      rating: 4,
      studentCount: 289,
      reviewCount: 98,
      workingHours: 1445
    },
    {
      name: "Arief Wibowo",
      image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
      title: "Kalkulus Diferensial",
      specialization: "Semester 1",
      price: "Rp 75.000/jam",
      rating: 5,
      studentCount: 356,
      reviewCount: 134,
      workingHours: 1780
    },
    {
      name: "Maya Sari",
      image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
      title: "Manajemen Keuangan",
      specialization: "Semester 8",
      price: "Rp 70.000/jam",
      rating: 4,
      studentCount: 187,
      reviewCount: 71,
      workingHours: 935
    },
    {
      name: "Hendri Gunawan",
      image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
      title: "Database Management",
      specialization: "Semester 6",
      price: "Rp 85.000/jam",
      rating: 5,
      studentCount: 234,
      reviewCount: 87,
      workingHours: 1170
    },
    {
      name: "Anisa Putri",
      image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
      title: "Termodinamika",
      specialization: "Semester 2",
      price: "Rp 80.000/jam",
      rating: 4,
      studentCount: 123,
      reviewCount: 45,
      workingHours: 615
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
                     specialization={tutor.specialization}
                     price={tutor.price}
                     rating={tutor.rating}
                     studentCount={tutor.studentCount}
                     reviewCount={tutor.reviewCount}
                     workingHours={tutor.workingHours}
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
