
import CourseCard from "@/components/CourseCard";
import TutorCard from "@/components/TutorCard";

const Dashboard = () => {
  const courses = [
    { title: "Kalkulus I" },
    { title: "Fisika Mekanik" },
    { title: "Kimia Industri" },
    { title: "Kalkulus II" },
    { title: "Lembaga" }
  ];

  const tutors = [
    {
      name: "Dr. xxx aaaa S.Stat., M.Stat.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      title: "Statistics Professor"
    },
    {
      name: "Prof Ir xxxx ST MSc Eng PhD",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
      title: "Engineering Professor"
    },
    {
      name: "Ir. Sri Maulidina S.Si., M.Si.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face",
      title: "Science Lecturer"
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
