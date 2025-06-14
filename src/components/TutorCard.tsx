
import { Star, Users, MessageSquare, Phone, Clock } from "lucide-react";

interface TutorCardProps {
  name: string;
  image: string;
  title: string;
  specialization: string;
  price: string;
  rating: number;
  studentCount: number;
  reviewCount: number;
  workingHours: number;
}

const TutorCard = ({ name, image, title, specialization, price, rating, studentCount, reviewCount, workingHours }: TutorCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-pastel-sky-blue shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer overflow-hidden">
      {/* Profile Image */}
      <div className="aspect-square bg-cream-white overflow-hidden relative">
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
        
        {/* Price and Area of Expertise */}
        <div className="flex gap-2">
          <div className="bg-bright-mustard text-deep-navy text-xs font-semibold px-2 py-1 rounded-md">
            {price}
          </div>
          <button className="bg-pastel-sky-blue text-deep-navy text-xs font-medium px-2 py-1 rounded-md hover:bg-scholarly-blue hover:text-white transition-colors">
            Area Keahlian
          </button>
        </div>
        
        {/* Rating and Social Media */}
        <div className="flex items-center justify-between">
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
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-1">
            <img 
              src="/lovable-uploads/b97ee208-03f1-4a66-ab86-5713f53729cc.png" 
              alt="WhatsApp" 
              className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform"
            />
            <img 
              src="/lovable-uploads/a384c0f5-12ab-4db0-a146-f7eceb12935d.png" 
              alt="Instagram" 
              className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform"
            />
            <img 
              src="/lovable-uploads/0712c07a-1fcb-4200-9545-be83b90991b4.png" 
              alt="LinkedIn" 
              className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>
        
        {/* Student Count and Working Hours */}
        <div className="flex items-center justify-between text-xs text-graphite-gray">
          <div className="flex items-center gap-1">
            <Users size={12} />
            <span>{studentCount} siswa</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{workingHours} jam kerja</span>
          </div>
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
