
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import NavBar from "../components/NavBar";
import MemoryCard from "../components/MemoryCard";
import { Memory, User } from "../lib/types";

// Mock data
const user: User = {
  id: "user123",
  name: "Harry Potter",
  email: "harry@hogwarts.edu",
  memories: 12,
  happyMemories: 5,
  sadMemories: 2,
  moodyMemories: 1,
  cozyMemories: 3,
  angryMemories: 1
};

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
  },
  {
    id: "7",
    title: "Hogsmeade Visit",
    mood: "happy",
    content: "Spent the day at Hogsmeade with Ron and Hermione. Butterbeer was fantastic!",
    createdAt: "2025-04-01T16:45:00Z",
    userId: "currentUser",
    userName: "Harry Potter",
    likes: 0,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2600&auto=format"
  }
];

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-[#221F26] rounded-xl overflow-hidden shadow-xl border border-[#403E43] mb-8">
          <div 
            className="h-32 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2600&auto=format')" }}
          ></div>
          
          <div className="flex flex-col md:flex-row p-6">
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="w-24 h-24 rounded-full bg-[#9b87f5] flex items-center justify-center -mt-16 border-4 border-[#221F26] text-white text-2xl font-bold">
                {user.name.charAt(0)}
              </div>
            </div>
            
            <div className="flex-grow mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h1 className="text-2xl font-bold text-[#9b87f5]">{user.name}</h1>
              <p className="text-gray-400">{user.email}</p>
              <p className="mt-2">Total Memories: {user.memories}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-[#221F26] p-6 rounded-lg shadow-lg border border-[#403E43]">
            <h2 className="text-xl font-bold mb-4 text-[#9b87f5]">Mood Distribution</h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Happy</span>
                  <span>{Math.round((user.happyMemories / user.memories) * 100)}%</span>
                </div>
                <Progress value={(user.happyMemories / user.memories) * 100} className="h-2 bg-[#1A1F2C]" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>Sad</span>
                  <span>{Math.round((user.sadMemories / user.memories) * 100)}%</span>
                </div>
                <Progress value={(user.sadMemories / user.memories) * 100} className="h-2 bg-[#1A1F2C]" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>Moody</span>
                  <span>{Math.round((user.moodyMemories / user.memories) * 100)}%</span>
                </div>
                <Progress value={(user.moodyMemories / user.memories) * 100} className="h-2 bg-[#1A1F2C]" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>Cozy</span>
                  <span>{Math.round((user.cozyMemories / user.memories) * 100)}%</span>
                </div>
                <Progress value={(user.cozyMemories / user.memories) * 100} className="h-2 bg-[#1A1F2C]" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>Angry</span>
                  <span>{Math.round((user.angryMemories / user.memories) * 100)}%</span>
                </div>
                <Progress value={(user.angryMemories / user.memories) * 100} className="h-2 bg-[#1A1F2C]" />
              </div>
            </div>
          </div>
          
          <div className="bg-[#221F26] p-6 rounded-lg shadow-lg border border-[#403E43]">
            <h2 className="text-xl font-bold mb-4 text-[#9b87f5]">Magical Insights</h2>
            
            <div className="space-y-4 text-gray-300">
              <p>Your most common mood is <span className="text-yellow-300 font-semibold">Happy</span>.</p>
              <p>You've been recording memories for <span className="text-[#9b87f5] font-semibold">3 months</span>.</p>
              <p>Your mood has improved by <span className="text-green-400 font-semibold">15%</span> in the last month.</p>
              <p>You tend to feel most <span className="text-orange-300 font-semibold">Cozy</span> on weekends.</p>
            </div>
            
            <Button className="w-full mt-4 bg-[#9b87f5] hover:bg-[#7E69AB]">
              View Detailed Analysis
            </Button>
          </div>
          
          <div className="bg-[#221F26] p-6 rounded-lg shadow-lg border border-[#403E43]">
            <h2 className="text-xl font-bold mb-4 text-[#9b87f5]">House Points</h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-red-500">Gryffindor</span>
                <span>473</span>
              </div>
              <Progress value={47.3} className="h-2 bg-[#1A1F2C]" />
              
              <div className="flex items-center justify-between">
                <span className="font-semibold text-green-500">Slytherin</span>
                <span>426</span>
              </div>
              <Progress value={42.6} className="h-2 bg-[#1A1F2C]" />
              
              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-500">Ravenclaw</span>
                <span>398</span>
              </div>
              <Progress value={39.8} className="h-2 bg-[#1A1F2C]" />
              
              <div className="flex items-center justify-between">
                <span className="font-semibold text-yellow-500">Hufflepuff</span>
                <span>352</span>
              </div>
              <Progress value={35.2} className="h-2 bg-[#1A1F2C]" />
            </div>
            
            <div className="mt-4 text-center text-sm text-gray-400">
              Your contributions have earned 23 points for Gryffindor!
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#9b87f5]">Recent Memories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userMemories.map(memory => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
