
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CourseVideoCard from "@/components/CourseVideoCard";

const Courses = () => {
  const coursesByCategory = {
    "Mathematics": [
      { 
        videoTitle: "Integral Parsial dan Substitusi", 
        major: "Matematika", 
        tutorName: "Dr. Ahmad Wijaya",
        image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
        price: "Rp 75.000",
        rating: 5,
        students: 234, 
        reviewCount: 89,
        viewCount: 567
      },
      { 
        videoTitle: "Limit dan Kontinuitas Fungsi", 
        major: "Matematika", 
        tutorName: "Prof. Sari Indahsari",
        image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
        price: "Rp 80.000",
        rating: 4,
        students: 189, 
        reviewCount: 67,
        viewCount: 423
      },
      { 
        videoTitle: "Matriks dan Determinan", 
        major: "Matematika", 
        tutorName: "Dr. Rizki Pratama",
        image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
        price: "Rp 65.000",
        rating: 5,
        students: 156, 
        reviewCount: 78,
        viewCount: 890
      },
      { 
        videoTitle: "Distribusi Probabilitas", 
        major: "Statistika", 
        tutorName: "Dr. Maya Sari",
        image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
        price: "Rp 90.000",
        rating: 4,
        students: 201, 
        reviewCount: 92,
        viewCount: 334
      }
    ],
    "Physics": [
      { 
        videoTitle: "Hukum Newton dan Aplikasinya", 
        major: "Fisika", 
        tutorName: "Prof. Budi Santoso",
        image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
        price: "Rp 70.000",
        rating: 5,
        students: 178, 
        reviewCount: 67,
        viewCount: 445
      },
      { 
        videoTitle: "Gelombang dan Bunyi", 
        major: "Fisika", 
        tutorName: "Dr. Dewi Maharani",
        image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
        price: "Rp 85.000",
        rating: 4,
        students: 298, 
        reviewCount: 134,
        viewCount: 678
      },
      { 
        videoTitle: "Kalor dan Perpindahan Energi", 
        major: "Fisika", 
        tutorName: "Dr. Dimas Prasetyo",
        image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
        price: "Rp 60.000",
        rating: 5,
        students: 134, 
        reviewCount: 56,
        viewCount: 234
      }
    ],
    "Chemistry": [
      { 
        videoTitle: "Reaksi Redoks dan Elektrolisis", 
        major: "Kimia", 
        tutorName: "Prof. Fitri Handayani",
        image: "/lovable-uploads/6ecc100c-45f5-4483-8f3b-727b5b51e6b4.png",
        price: "Rp 95.000",
        rating: 4,
        students: 156, 
        reviewCount: 78,
        viewCount: 512
      },
      { 
        videoTitle: "Struktur Molekul Organik", 
        major: "Kimia Organik", 
        tutorName: "Dr. Arief Wibowo",
        image: "/lovable-uploads/00e7448d-c73a-44f1-b2fe-bf376bfad6a9.png",
        price: "Rp 75.000",
        rating: 5,
        students: 123, 
        reviewCount: 89,
        viewCount: 367
      },
      { 
        videoTitle: "Titrasi dan Analisis Kuantitatif", 
        major: "Kimia Analitik", 
        tutorName: "Dr. Anisa Putri",
        image: "/lovable-uploads/e9f6ecf9-d5fd-4eef-a37d-96bfbce21f67.png",
        price: "Rp 55.000",
        rating: 4,
        students: 98, 
        reviewCount: 45,
        viewCount: 789
      }
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
                    <CourseVideoCard
                      key={index}
                      videoTitle={course.videoTitle}
                      major={course.major}
                      tutorName={course.tutorName}
                      image={course.image}
                      price={course.price}
                      rating={course.rating}
                      studentCount={course.students}
                      reviewCount={course.reviewCount}
                      viewCount={course.viewCount}
                    />
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
