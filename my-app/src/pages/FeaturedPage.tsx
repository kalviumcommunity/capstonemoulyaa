
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import NavBar from "../components/NavBar";
import MemoryCard from "../components/MemoryCard";
import { Memory, Mood } from "../lib/types";

// Mock data for demonstration
const popularMemories: Memory[] = [
  {
    id: "1",
    title: "First Day at Hogwarts",
    mood: "happy",
    content: "The Great Hall was even more magnificent than I had imagined. The enchanted ceiling reflected the night sky, and the floating candles created a magical atmosphere.",
    createdAt: "2025-04-15T10:30:00Z",
    userId: "user1",
    userName: "Luna Lovegood",
    likes: 42,
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2600&auto=format"
  },
  {
    id: "2",
    title: "Quidditch Practice",
    mood: "cozy",
    content: "Flying through the air on my broomstick gives me a sense of freedom like nothing else.",
    createdAt: "2025-04-10T15:20:00Z",
    userId: "user2",
    userName: "Ginny Weasley",
    likes: 38,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2600&auto=format"
  },
  {
    id: "3",
    title: "Potions Class Disaster",
    mood: "angry",
    content: "My cauldron exploded AGAIN. Professor Snape was not amused.",
    createdAt: "2025-04-08T09:15:00Z",
    userId: "user3",
    userName: "Neville Longbottom",
    likes: 27
  },
  {
    id: "4",
    title: "Hogsmeade Weekend",
    mood: "happy",
    content: "Butterbeer at Three Broomsticks with friends is the perfect way to spend a Saturday.",
    createdAt: "2025-04-05T16:45:00Z",
    userId: "user4",
    userName: "Ron Weasley",
    likes: 35,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2600&auto=format"
  }
];

const userMemories: Memory[] = [
  {
    id: "5",
    title: "Patronus Practice",
    mood: "moody",
    content: "I finally produced a corporeal Patronus today! It's a stag, just like my father's.",
    createdAt: "2025-04-14T11:20:00Z",
    userId: "currentUser",
    userName: "Harry Potter",
    likes: 0
  },
  {
    id: "6",
    title: "Divination Class",
    mood: "sad",
    content: "Professor Trelawney predicted my doom again. Getting tired of it.",
    createdAt: "2025-04-09T14:30:00Z",
    userId: "currentUser",
    userName: "Harry Potter",
    likes: 0,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2600&auto=format"
  }
];

const FeaturedPage = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | 'all'>('all');
  
  const filteredPopularMemories = selectedMood === 'all' 
    ? popularMemories 
    : popularMemories.filter(memory => memory.mood === selectedMood);
    
  const filteredUserMemories = selectedMood === 'all' 
    ? userMemories 
    : userMemories.filter(memory => memory.mood === selectedMood);
  
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#9b87f5]">Featured Memories</h1>
          <Link to="/add">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
              <Plus size={18} className="mr-1" />
              Add Memory
            </Button>
          </Link>
        </div>
        
        <Tabs defaultValue="popular" className="mb-8">
          <TabsList className="bg-[#221F26] border border-[#403E43]">
            <TabsTrigger value="popular" className="data-[state=active]:bg-[#403E43] data-[state=active]:text-white">
              Popular Memories
            </TabsTrigger>
            <TabsTrigger value="yours" className="data-[state=active]:bg-[#403E43] data-[state=active]:text-white">
              Your Memories
            </TabsTrigger>
          </TabsList>
          
          <div className="my-4 flex flex-wrap gap-2">
            <Button 
              variant={selectedMood === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedMood('all')}
              className={selectedMood === 'all' ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : 'border-[#9b87f5] text-[#9b87f5]'}
              size="sm"
            >
              All
            </Button>
            {['happy', 'sad', 'moody', 'cozy', 'angry'].map((mood) => (
              <Button 
                key={mood}
                variant={selectedMood === mood ? 'default' : 'outline'}
                onClick={() => setSelectedMood(mood as Mood)}
                className={selectedMood === mood ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : 'border-[#9b87f5] text-[#9b87f5]'}
                size="sm"
              >
                {mood.charAt(0).toUpperCase() + mood.slice(1)}
              </Button>
            ))}
          </div>
          
          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPopularMemories.map(memory => (
                <MemoryCard key={memory.id} memory={memory} />
              ))}
            </div>
            
            {filteredPopularMemories.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-400">No memories found for this mood.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="yours" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredUserMemories.map(memory => (
                <MemoryCard key={memory.id} memory={memory} />
              ))}
              
              <Link to="/add" className="flex items-center justify-center h-64 bg-[#221F26] rounded-lg border border-dashed border-[#403E43] hover:border-[#9b87f5] transition-colors">
                <div className="text-center">
                  <Plus size={36} className="mx-auto mb-2 text-[#9b87f5]" />
                  <p className="text-[#9b87f5]">Add New Memory</p>
                </div>
              </Link>
            </div>
            
            {filteredUserMemories.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-400">No memories found for this mood.</p>
                <Link to="/add">
                  <Button className="mt-4 bg-[#9b87f5] hover:bg-[#7E69AB]">
                    Create Your First Memory
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FeaturedPage;
