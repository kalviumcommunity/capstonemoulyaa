
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Mood } from "../lib/types";
import NavBar from "../components/NavBar";

const moods: Mood[] = ["happy", "sad", "moody", "cozy", "angry"];

const AddPensievePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    mood: "happy" as Mood
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pensieve data:", formData);
    navigate("/memory-content");
  };
  
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-[#9b87f5]">Add to Your Pensieve</h1>
          <p className="text-gray-400 mt-2">Capture your thoughts and feelings</p>
        </div>
        
        <div className="bg-[#221F26] p-6 rounded-lg shadow-lg border border-[#403E43]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white">Name Your Pensieve Memory</Label>
              <Input
                id="title"
                name="title"
                placeholder="Potion Class Triumph"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="bg-[#1A1F2C] border-[#403E43] text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mood" className="text-white">Current Mood</Label>
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

export default AddPensievePage;
