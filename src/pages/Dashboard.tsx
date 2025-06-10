
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import TutorCard from "@/components/TutorCard";

const Dashboard = () => {
  const courses = [
    { title: "Kalkulus I" },
    { title: "Fisika Mekanik" },
    { title: "Kimia Industri" },
    { title: "Kalkulus II" },
    { title: "Lembaga Keuangan" }
  ];

  const tutors = [
    {
      name: "Rizki Pratama",
      image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
      title: "Statistik & Data Science",
      specialization: "Analisis Data & Probabilitas",
      price: "Rp 80.000/jam",
      rating: 5,
      studentCount: 245,
      reviewCount: 89
    },
    {
      name: "Sari Indahsari",
      image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
      title: "Teknik Mesin",
      specialization: "Dinamika & Getaran Mesin",
      price: "Rp 85.000/jam",
      rating: 4,
      studentCount: 156,
      reviewCount: 67
    },
    {
      name: "Ahmad Fauzi",
      image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
      title: "Matematika Terapan",
      specialization: "Persamaan Diferensial & Numerik",
      price: "Rp 75.000/jam",
      rating: 5,
      studentCount: 312,
      reviewCount: 124
    }
  ];

  return (
    <div className="flex h-screen bg-cream-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto bg-cream-white">
          <div className="p-6 space-y-8">
            {/* Welcome Section */}
            <section className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
              <h1 className="text-3xl font-bold text-deep-navy mb-2">Welcome back to TutorITS!</h1>
              <p className="text-graphite-gray">Continue your learning journey with our expert tutors and courses.</p>
            </section>

            {/* Explore Courses Section */}
            <section className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
              <h2 className="text-2xl font-bold text-deep-navy mb-6">Explore Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {courses.map((course, index) => (
                  <CourseCard key={index} title={course.title} />
                ))}
              </div>
            </section>

            {/* Popular Tutors Section */}
            <section className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
              <h2 className="text-2xl font-bold text-deep-navy mb-6">Popular Tutors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutors.map((tutor, index) => (
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
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
