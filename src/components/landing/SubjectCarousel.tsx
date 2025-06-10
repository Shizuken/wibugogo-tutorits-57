
import { 
  Calculator, 
  BookOpen, 
  Microscope, 
  TrendingUp, 
  Monitor, 
  GraduationCap 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const subjects = [
  { name: "Math", icon: Calculator, color: "bg-bright-mustard" },
  { name: "Reading", icon: BookOpen, color: "bg-scholarly-blue" },
  { name: "Science", icon: Microscope, color: "bg-bright-mustard" },
  { name: "Economics", icon: TrendingUp, color: "bg-scholarly-blue" },
  { name: "Computer Science", icon: Monitor, color: "bg-bright-mustard" },
  { name: "SAT Prep", icon: GraduationCap, color: "bg-scholarly-blue" },
];

const SubjectCarousel = () => {
  return (
    <section className="py-16 bg-soft-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-deep-navy mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-graphite-gray">
            Explore subjects that spark your curiosity
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="bg-cream-white rounded-2xl p-6 text-center border border-gray-100 group-hover:border-scholarly-blue group-hover:bg-pastel-sky-blue transition-all duration-300">
                <div className={`w-16 h-16 ${subject.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-subtle`}>
                  <subject.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-deep-navy mb-3">{subject.name}</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-scholarly-blue text-scholarly-blue hover:bg-scholarly-blue hover:text-white transition-all duration-300"
                >
                  Start Learning
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectCarousel;
