
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
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
