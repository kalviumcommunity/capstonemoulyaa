
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NavBar from "../components/NavBar";

// AI suggestion templates based on moods
const suggestions = {
  happy: [
    "Write in your physical journal about what made you happy today",
    "Share your positive experience with a friend or loved one",
    "Take a nature walk to further enhance your mood",
    "Practice a gratitude meditation to reinforce positive feelings",
    "Create something artistic inspired by this happy memory"
  ],
  sad: [
    "Try a 10-minute breathing exercise to center yourself",
    "Write a letter to yourself expressing how you feel (you don't need to send it)",
    "Listen to uplifting music that resonates with you",
    "Connect with a supportive friend or family member",
    "Practice gentle yoga or stretching to release tension"
  ],
  moody: [
    "Take 5 minutes for mindful breathing to stabilize your emotions",
    "Journal about what might be triggering these fluctuating feelings",
    "Go for a brisk walk to clear your head",
    "Create a playlist that matches and then gradually shifts your mood",
    "Practice grounding techniques by focusing on your five senses"
  ],
  cozy: [
    "Create a special relaxation corner in your home",
    "Try a calming tea ritual before bed",
    "Practice progressive muscle relaxation",
    "Read something purely for pleasure",
    "Take a warm bath with essential oils"
  ],
  angry: [
    "Try a physical release activity like running or punching a pillow",
    "Write down your thoughts without judgment",
    "Practice counting to 10 and deep breathing",
    "Use visualization to imagine your anger dissolving",
    "Try the 5-4-3-2-1 grounding technique to center yourself"
  ]
};

const AiAnalysisPage = () => {
  const navigate = useNavigate();
  const [currentMood, setCurrentMood] = useState<keyof typeof suggestions>("happy");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  
  useEffect(() => {
    // Simulate AI analysis loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // For demo, randomly select a mood
      const moods = ["happy", "sad", "moody", "cozy", "angry"] as const;
      setCurrentMood(moods[Math.floor(Math.random() * moods.length)]);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const toggleTask = (task: string) => {
    if (selectedTasks.includes(task)) {
      setSelectedTasks(selectedTasks.filter(t => t !== task));
    } else {
      setSelectedTasks([...selectedTasks, task]);
    }
  };
  
  const handleFinish = () => {
    console.log("Selected tasks:", selectedTasks);
    navigate("/featured");
  };
  
  // Determine background gradient based on mood
  const getMoodGradient = () => {
    switch(currentMood) {
      case "happy": return "from-yellow-700/20 to-yellow-900/10";
      case "sad": return "from-blue-700/20 to-blue-900/10";
      case "moody": return "from-purple-700/20 to-purple-900/10";
      case "cozy": return "from-orange-700/20 to-orange-900/10";
      case "angry": return "from-red-700/20 to-red-900/10";
      default: return "from-gray-700/20 to-gray-900/10";
    }
  };
  
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <NavBar />
      
      <div className={`container mx-auto px-4 py-8 max-w-3xl bg-gradient-to-b ${getMoodGradient()}`}>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-[#9b87f5]">
            Magical Insights
          </h1>
          <p className="text-gray-400 mt-2">
            Based on your memory, here are personalized recommendations
          </p>
        </div>
        
        {isLoading ? (
          <div className="bg-[#221F26] p-8 rounded-lg shadow-lg border border-[#403E43] text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 border-4 border-[#9b87f5] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xl font-serif text-[#9b87f5]">The Pensieve is analyzing your memory...</p>
              <p className="text-gray-400">Our magical AI is crafting personalized insights for you</p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-[#221F26] p-6 rounded-lg shadow-lg border border-[#403E43]">
              <h2 className="text-xl font-bold text-[#9b87f5] mb-4">Memory Analysis</h2>
              
              <div className="space-y-4">
                <p>
                  Your memory reveals a predominantly <span className="font-bold text-[#9b87f5]">{currentMood}</span> mood.
                </p>
                
                <p className="text-gray-300">
                  {currentMood === "happy" && "Your positive emotions are powerful. This memory shows your capacity for joy and appreciation of life's beautiful moments."}
                  {currentMood === "sad" && "It's okay to feel sadness. Your memory shows depth of emotion and sensitivity, which are valuable qualities."}
                  {currentMood === "moody" && "Your changing emotions show complexity and depth. This memory reveals how multifaceted your inner world is."}
                  {currentMood === "cozy" && "You've captured a moment of comfort and security. This memory shows your appreciation for life's simple pleasures."}
                  {currentMood === "angry" && "Your anger reveals what matters to you. This memory shows passion and conviction about your values."}
                </p>
                
                <Separator className="bg-[#403E43]" />
                
                <div>
                  <h3 className="font-semibold text-[#9b87f5] mb-2">Magical Patterns</h3>
                  <p className="text-gray-300">
                    Our enchanted analysis has identified recurring themes in your memories related to:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-300">
                    <li>Connections with others</li>
                    <li>Appreciation for magical moments</li>
                    <li>Finding wonder in everyday experiences</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-[#221F26] p-6 rounded-lg shadow-lg border border-[#403E43]">
              <h2 className="text-xl font-bold text-[#9b87f5] mb-4">Recommended Enchantments</h2>
              <p className="text-gray-300 mb-4">
                Select tasks you'd like to try to enhance your well-being:
              </p>
              
              <div className="space-y-3">
                {suggestions[currentMood].map((task, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-md border cursor-pointer transition-all ${
                      selectedTasks.includes(task) 
                        ? 'border-[#9b87f5] bg-[#9b87f5]/10' 
                        : 'border-[#403E43] hover:border-[#9b87f5]/50'
                    }`}
                    onClick={() => toggleTask(task)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        selectedTasks.includes(task) 
                          ? 'bg-[#9b87f5]' 
                          : 'border border-[#403E43]'
                      }`}>
                        {selectedTasks.includes(task) && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span>{task}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button 
                  onClick={handleFinish}
                  className="bg-[#9b87f5] hover:bg-[#7E69AB] px-8"
                >
                  Apply These Magical Remedies
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiAnalysisPage;
