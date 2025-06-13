import { Star, Users, MessageSquare, Clock } from "lucide-react";

interface CourseVideoCardProps {
  videoTitle: string;
  major: string;
  tutorName: string;
  image: string;
  price: string;
  rating: number;
  studentCount: number;
  reviewCount: number;
  viewCount: number;
}

const CourseVideoCard = ({ 
  videoTitle, 
  major, 
  tutorName, 
  image, 
  price, 
  rating, 
  studentCount, 
  reviewCount, 
  viewCount 
}: CourseVideoCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-pastel-sky-blue shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer overflow-hidden">
      {/* Course Image */}
      <div className="aspect-square bg-cream-white overflow-hidden relative">
        <img 
          src={image} 
          alt={videoTitle}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Video Title, Major, and Tutor */}
        <div className="space-y-1">
          <h3 className="font-semibold text-deep-navy text-sm leading-tight">{videoTitle}</h3>
          <p className="text-xs text-graphite-gray">{major}</p>
          <p className="text-xs text-scholarly-blue font-medium">{tutorName}</p>
        </div>
        
        {/* Price and About Tutor */}
        <div className="flex gap-2">
          <div className="bg-bright-mustard text-deep-navy text-xs font-semibold px-2 py-1 rounded-md">
            {price}
          </div>
          <button className="bg-pastel-sky-blue text-deep-navy text-xs font-medium px-2 py-1 rounded-md hover:bg-scholarly-blue hover:text-white transition-colors">
            About Tutor
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
        
        {/* Student Count and View Count */}
        <div className="flex items-center justify-between text-xs text-graphite-gray">
          <div className="flex items-center gap-1">
            <Users size={12} />
            <span>{studentCount} siswa</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{viewCount} kali ditonton</span>
          </div>
        </div>
        
        {/* Buy Now Button */}
        <button className="w-full bg-bright-mustard hover:bg-bright-mustard/80 text-deep-navy text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200 mb-2">
          Beli Sekarang
        </button>
        
        {/* Review Button */}
        <button className="w-full bg-scholarly-blue hover:bg-pastel-sky-blue text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1 mb-2">
          <MessageSquare size={12} />
          Lihat Review
        </button>
        
        {/* Preview Course Button */}
        <button className="w-full bg-pastel-sky-blue hover:bg-scholarly-blue text-deep-navy hover:text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200">
          Lihat Preview Course
        </button>
      </div>
    </div>
  );
};

export default CourseVideoCard;