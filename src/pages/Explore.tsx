
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";

const Explore = () => {
  const allCourses = [
    { title: "Kalkulus I", category: "Mathematics" },
    { title: "Kalkulus II", category: "Mathematics" },
    { title: "Fisika Mekanik", category: "Physics" },
    { title: "Fisika Dasar", category: "Physics" },
    { title: "Kimia Industri", category: "Chemistry" },
    { title: "Kimia Organik", category: "Chemistry" },
    { title: "Algoritma", category: "Computer Science" },
    { title: "Struktur Data", category: "Computer Science" },
    { title: "Lembaga Ekonomi", category: "Economics" },
    { title: "Mikroekonomi", category: "Economics" }
  ];

  const categories = ["All", "Mathematics", "Physics", "Chemistry", "Computer Science", "Economics"];

  return (
    <div className="flex h-screen bg-cream-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto bg-cream-white">
          <div className="p-6 space-y-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-scholarly-blue to-pastel-sky-blue rounded-xl shadow-sm p-8 text-center">
              <h1 className="text-4xl font-bold text-deep-navy mb-4">Explore All Courses</h1>
              <p className="text-graphite-gray text-lg">Discover thousands of courses across different subjects</p>
            </section>
            
            {/* Category Filter */}
            <section className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
              <h2 className="text-xl font-semibold text-deep-navy mb-4">Filter by Category</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-2 rounded-full border-2 border-scholarly-blue text-scholarly-blue hover:bg-scholarly-blue hover:text-white transition-all duration-300 font-medium"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            {/* Courses Grid */}
            <section className="bg-white rounded-xl shadow-sm border border-pastel-sky-blue p-6">
              <h2 className="text-2xl font-bold text-deep-navy mb-6">All Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allCourses.map((course, index) => (
                  <div key={index} className="space-y-3">
                    <CourseCard title={course.title} />
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 bg-bright-mustard text-deep-navy text-sm font-medium rounded-full">
                        {course.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Explore;
