
import { Star, Users, MessageSquare } from "lucide-react";

interface TutorCardProps {
  name: string;
  image: string;
  title: string;
  specialization: string;
  price: string;
  rating: number;
  studentCount: number;
  reviewCount: number;
}

const TutorCard = ({ name, image, title, specialization, price, rating, studentCount, reviewCount }: TutorCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-pastel-sky-blue shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer overflow-hidden">
      {/* Profile Image */}
      <div className="aspect-square bg-cream-white overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Name and Title */}
        <div className="space-y-1">
          <h3 className="font-semibold text-deep-navy text-sm leading-tight">{name}</h3>
          <p className="text-xs text-graphite-gray">{title}</p>
          <p className="text-xs text-scholarly-blue font-medium">{specialization}</p>
        </div>
        
        {/* Price */}
        <div className="bg-bright-mustard text-deep-navy text-xs font-semibold px-2 py-1 rounded-md inline-block">
          {price}
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                size={12}
                className={`${
                  star <= rating 
                    ? "fill-bright-mustard text-bright-mustard" 
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-graphite-gray ml-1">({reviewCount})</span>
        </div>
        
        {/* Student Count */}
        <div className="flex items-center gap-1 text-xs text-graphite-gray">
          <Users size={12} />
          <span>{studentCount} siswa</span>
        </div>
        
        {/* Hire Now Button */}
        <button className="w-full bg-bright-mustard hover:bg-bright-mustard/80 text-deep-navy text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200 mb-2">
          Sewa Sekarang
        </button>
        
        {/* Review Button */}
        <button className="w-full bg-scholarly-blue hover:bg-pastel-sky-blue text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1">
          <MessageSquare size={12} />
          Lihat Review
        </button>
      </div>
    </div>
  );
};

export default TutorCard;
