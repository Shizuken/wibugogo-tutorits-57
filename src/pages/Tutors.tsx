
import TutorCard from "@/components/TutorCard";

const Tutors = () => {
  const allTutors = [
    {
      name: "Dr. Ahmad Rahman S.Stat., M.Stat.",
      image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
      title: "Statistics & Data Science"
    },
    {
      name: "Prof Ir Budi Santoso ST MSc Eng PhD",
      image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
      title: "Mechanical Engineering"
    },
    {
      name: "Ir. Sri Maulidina S.Si., M.Si.",
      image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
      title: "Mathematics & Applied Math"
    },
    {
      name: "Dr. Indira Kusuma S.Mat., M.Sc.",
      image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
      title: "Mathematics & Applied Math"
    },
    {
      name: "Prof Dr. Hendra Wijaya S.T., M.T.",
      image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
      title: "Computer Science & AI"
    },
    {
      name: "Dr. Maya Sari S.E., M.M.",
      image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
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
