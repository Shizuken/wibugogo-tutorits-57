
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
      name: "Dr. Ahmad Rahman S.Stat., M.Stat.",
      image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
      title: "Mathematics Professor"
    },
    {
      name: "Prof. Ir. Budi Santoso ST. MSc. Eng PhD.",
      image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
      title: "Engineering Professor"
    },
    {
      name: "Ir. Sri Maulidina S.Si., M.Si.",
      image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
      title: "Mathematics Lecturer"
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="p-6 space-y-8">
            {/* Explore Courses Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {courses.map((course, index) => (
                  <CourseCard key={index} title={course.title} />
                ))}
              </div>
            </section>

            {/* Popular Tutors Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Tutors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutors.map((tutor, index) => (
                  <TutorCard
                    key={index}
                    name={tutor.name}
                    image={tutor.image}
                    title={tutor.title}
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
