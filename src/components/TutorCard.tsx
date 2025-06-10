
interface TutorCardProps {
  name: string;
  image: string;
  title: string;
}

const TutorCard = ({ name, image, title }: TutorCardProps) => {
  return (
    <div className="bg-[#93AAC7] rounded-2xl p-4 text-white cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105">
      <div className="aspect-video bg-gray-300 rounded-lg mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-sm">{name}</h3>
        <p className="text-xs opacity-90">{title}</p>
      </div>
    </div>
  );
};

export default TutorCard;
