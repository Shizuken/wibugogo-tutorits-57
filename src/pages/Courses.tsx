
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
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">All Courses</h1>
      
      {Object.entries(coursesByCategory).map(([category, courses]) => (
        <section key={category}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="space-y-3">
                <CourseCard title={course.title} />
                <div className="text-sm text-gray-600 space-y-1">
                  <p>{course.students} students enrolled</p>
                  <p className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{course.rating}/5.0</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Courses;
