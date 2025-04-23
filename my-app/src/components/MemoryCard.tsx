
import { Heart } from "lucide-react";
import { Memory } from "../lib/types";

interface MemoryCardProps {
  memory: Memory;
  showActions?: boolean;
}

const getMoodColor = (mood: string): string => {
  switch (mood) {
    case 'happy': return 'from-yellow-400 to-yellow-300';
    case 'sad': return 'from-blue-400 to-blue-300';
    case 'moody': return 'from-purple-400 to-purple-300';
    case 'cozy': return 'from-orange-400 to-orange-300';
    case 'angry': return 'from-red-400 to-red-300';
    default: return 'from-gray-400 to-gray-300';
  }
};

const MemoryCard = ({ memory, showActions = true }: MemoryCardProps) => {
  return (
    <div className="bg-[#221F26] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-[#403E43]">
      {memory.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={memory.image} 
            alt={memory.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-white">{memory.title}</h3>
          <div className={`px-2 py-1 rounded text-xs font-semibold bg-gradient-to-r ${getMoodColor(memory.mood)}`}>
            {memory.mood}
          </div>
        </div>
        
        <p className="text-sm text-gray-300 mb-3 line-clamp-2">{memory.content}</p>
        
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>{memory.userName}</span>
          <span>{new Date(memory.createdAt).toLocaleDateString()}</span>
        </div>
        
        {showActions && (
          <div className="mt-3 flex justify-between items-center">
            <button className="flex items-center gap-1 text-[#9b87f5] hover:text-[#7E69AB] transition-colors">
              <Heart size={16} />
              <span>{memory.likes}</span>
            </button>
            <button className="text-[#9b87f5] hover:text-[#7E69AB] transition-colors text-sm">
              View Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoryCard;
