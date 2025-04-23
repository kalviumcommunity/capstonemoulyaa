
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image } from "lucide-react";
import NavBar from "../components/NavBar";
import { Mood } from "../lib/types";

const moods: Mood[] = ["happy", "sad", "moody", "cozy", "angry"];

const UploadMemoryPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    mood: "happy" as Mood,
    image: null as File | null,
    imagePreview: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ 
      ...prev, 
      mood: e.target.value as Mood 
    }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ 
          ...prev, 
          image: file,
          imagePreview: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Memory data:", formData);
    navigate("/memory-content");
  };
  
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-[#9b87f5]">Upload New Memory</h1>
          <p className="text-gray-400 mt-2">Add an image to your pensieve</p>
        </div>
        
        <div className="bg-[#221F26] p-6 rounded-lg shadow-lg border border-[#403E43]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white">Memory Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Magical Moment"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="bg-[#1A1F2C] border-[#403E43] text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mood" className="text-white">Memory Mood</Label>
              <select
                id="mood"
                name="mood"
                value={formData.mood}
                onChange={handleSelectChange}
                required
                className="bg-[#1A1F2C] border-[#403E43] text-white w-full rounded-md h-10 px-3"
              >
                {moods.map(mood => (
                  <option key={mood} value={mood}>
                    {mood.charAt(0).toUpperCase() + mood.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image" className="text-white">Memory Image</Label>
              <div className="border-2 border-dashed border-[#403E43] rounded-lg p-4 text-center hover:border-[#9b87f5] transition-colors">
                {formData.imagePreview ? (
                  <div className="relative">
                    <img 
                      src={formData.imagePreview} 
                      alt="Memory preview" 
                      className="max-h-64 mx-auto rounded"
                    />
                    <button 
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, image: null, imagePreview: "" }))}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="py-8">
                    <Image className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-400">Click to upload or drag and drop</p>
                    <p className="text-gray-500 text-sm mt-1">PNG, JPG, GIF up to 10MB</p>
                  </div>
                )}
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={formData.imagePreview ? "hidden" : "absolute inset-0 w-full h-full opacity-0 cursor-pointer"}
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                Continue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadMemoryPage;
