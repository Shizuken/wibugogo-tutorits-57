
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
      name: "Dr. xxx aaaa S.Stat., M.Stat.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      title: "Mathematics Professor"
    },
    {
      name: "Prof Ir xxxx ST MSc Eng PhD",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Engineering Professor"
    },
    {
      name: "Ir. Sri Maulidina S.Si., M.Si.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Mathematics Lecturer"
    }
  ];

  return (
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
  );
};

export default Dashboard;
