
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
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Explore All Courses</h1>
      
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-[#93AAC7] text-[#93AAC7] hover:bg-[#93AAC7] hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allCourses.map((course, index) => (
          <div key={index} className="space-y-2">
            <CourseCard title={course.title} />
            <p className="text-sm text-gray-500 text-center">{course.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
