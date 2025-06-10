
import { cn } from "@/lib/utils";

interface CourseCardProps {
  title: string;
  className?: string;
}

const CourseCard = ({ title, className }: CourseCardProps) => {
  return (
    <div className={cn(
      "bg-[#93AAC7] rounded-2xl p-6 text-white cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105",
      className
    )}>
      <h3 className="font-medium text-lg">{title}</h3>
    </div>
  );
};

export default CourseCard;
