
import TutorCard from "@/components/TutorCard";

const Tutors = () => {
  const allTutors = [
    {
      name: "Dr. Ahmad Rahman S.Stat., M.Stat.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      title: "Statistics & Data Science"
    },
    {
      name: "Prof Ir Budi Santoso ST MSc Eng PhD",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
      title: "Mechanical Engineering"
    },
    {
      name: "Ir. Sri Maulidina S.Si., M.Si.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face",
      title: "Chemistry & Materials Science"
    },
    {
      name: "Dr. Indira Kusuma S.Mat., M.Sc.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
      title: "Mathematics & Applied Math"
    },
    {
      name: "Prof Dr. Hendra Wijaya S.T., M.T.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=300&fit=crop&crop=face",
      title: "Computer Science & AI"
    },
    {
      name: "Dr. Maya Sari S.E., M.M.",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=300&fit=crop&crop=face",
      title: "Economics & Business"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Tutors</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allTutors.map((tutor, index) => (
          <TutorCard
            key={index}
            name={tutor.name}
            image={tutor.image}
            title={tutor.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Tutors;
