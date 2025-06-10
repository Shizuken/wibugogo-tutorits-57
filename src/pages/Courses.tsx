
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";

const Courses = () => {
  const coursesByCategory = {
    "Mathematics": [
      { title: "Kalkulus I", students: 234, rating: 4.8 },
      { title: "Kalkulus II", students: 189, rating: 4.7 },
      { title: "Aljabar Linear", students: 156, rating: 4.6 },
      { title: "Statistika", students: 201, rating: 4.9 }
    ],
    "Physics": [
      { title: "Fisika Mekanik", students: 178, rating: 4.7 },
      { title: "Fisika Dasar", students: 298, rating: 4.8 },
      { title: "Termodinamika", students: 134, rating: 4.5 }
    ],
    "Chemistry": [
      { title: "Kimia Industri", students: 156, rating: 4.6 },
      { title: "Kimia Organik", students: 123, rating: 4.7 },
      { title: "Kimia Analitik", students: 98, rating: 4.5 }
    ]
  };

  return (
    <div className="flex h-screen bg-cream-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto bg-cream-white">
          <div className="p-6 space-y-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-scholarly-blue to-pastel-sky-blue rounded-xl shadow-sm p-8 text-center">
              <h1 className="text-4xl font-bold text-deep-navy mb-4">Course Catalog</h1>
              <p className="text-graphite-gray text-lg">Comprehensive courses designed to help you master any subject</p>
            </section>

            {/* Course Categories */}
            {Object.entries(coursesByCategory).map(([category, courses]) => (
              <section key={category} className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-deep-navy">{category}</h2>
                  <span className="bg-bright-mustard text-deep-navy px-4 py-2 rounded-full text-sm font-medium">
                    {courses.length} courses
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {courses.map((course, index) => (
                    <div key={index} className="space-y-3">
                      <CourseCard title={course.title} />
                      <div className="bg-pastel-sky-blue rounded-lg p-3 text-sm space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-graphite-gray">{course.students} students enrolled</span>
                          <div className="flex items-center">
                            <span className="text-bright-mustard text-lg">★</span>
                            <span className="ml-1 text-deep-navy font-medium">{course.rating}/5.0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Call to Action */}
            <section className="bg-bright-mustard rounded-xl shadow-sm p-8 text-center">
              <h3 className="text-2xl font-bold text-deep-navy mb-4">Can't find what you're looking for?</h3>
              <p className="text-graphite-gray mb-6">Request a new course and we'll work with our tutors to create it</p>
              <button className="bg-deep-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-graphite-gray transition-colors">
                Request Course
              </button>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Courses;
