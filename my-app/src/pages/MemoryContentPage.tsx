
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, MicOff } from "lucide-react";
import NavBar from "../components/NavBar";

const MemoryContentPage = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  
  const startRecording = () => {
    try {
      // This is a mock implementation for demo purposes
      // In a real app, you would use the Web Speech API
      const mockRecognition = {
        start: () => {
          console.log("Started recording");
          setIsRecording(true);
          // Simulate receiving transcription results
          setTimeout(() => {
            const transcript = "This is a simulated voice recording. In a real app, this would capture your actual speech.";
            setContent(prev => prev + " " + transcript);
            stopRecording();
          }, 3000);
        },
        stop: () => {
          console.log("Stopped recording");
          setIsRecording(false);
        }
      };
      
      setRecognition(mockRecognition);
      mockRecognition.start();
    } catch (error) {
      console.error("Error starting voice recognition:", error);
      alert("Voice recognition is not supported in your browser");
    }
  };
  
  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
    }
  };
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Memory content:", content);
    navigate("/ai-analysis");
  };
  
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-[#9b87f5]">Capture Your Memory</h1>
          <p className="text-gray-400 mt-2">Describe your experience in detail</p>
        </div>
        
        <div className="bg-[#221F26] p-6 rounded-lg shadow-lg border border-[#403E43]">
          <Tabs defaultValue="text" className="mb-6">
            <TabsList className="bg-[#1A1F2C] border border-[#403E43]">
              <TabsTrigger value="text" className="data-[state=active]:bg-[#403E43] data-[state=active]:text-white">
                Text Input
              </TabsTrigger>
              <TabsTrigger value="voice" className="data-[state=active]:bg-[#403E43] data-[state=active]:text-white">
                Voice Input
              </TabsTrigger>
            </TabsList>
            
            <form onSubmit={handleSubmit}>
              <TabsContent value="text" className="mt-6">
                <Textarea
                  placeholder="Describe your memory... What happened? How did it make you feel?"
                  value={content}
                  onChange={handleContentChange}
                  required
                  className="bg-[#1A1F2C] border-[#403E43] text-white min-h-[200px]"
                />
              </TabsContent>
              
              <TabsContent value="voice" className="mt-6">
                <div className="space-y-4">
                  <Textarea
                    placeholder="Your transcribed speech will appear here..."
                    value={content}
                    onChange={handleContentChange}
                    required
                    className="bg-[#1A1F2C] border-[#403E43] text-white min-h-[200px]"
                  />
                  
                  <div className="flex justify-center">
                    {isRecording ? (
                      <Button 
                        type="button"
                        onClick={stopRecording}
                        variant="destructive"
                        className="flex items-center gap-2"
                      >
                        <MicOff />
                        Stop Recording
                      </Button>
                    ) : (
                      <Button 
                        type="button"
                        onClick={startRecording}
                        className="bg-[#9b87f5] hover:bg-[#7E69AB] flex items-center gap-2"
                      >
                        <Mic />
                        Start Recording
                      </Button>
                    )}
                  </div>
                  
                  {isRecording && (
                    <div className="text-center mt-4">
                      <div className="inline-flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="ml-2 text-gray-300">Recording...</span>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <div className="mt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
                  disabled={!content.trim()}
                >
                  Save to Pensieve
                </Button>
              </div>
            </form>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MemoryContentPage;
