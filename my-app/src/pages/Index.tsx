
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// This is the index page that will redirect to the welcome page
const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/");
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1F2C] text-white">
      <div className="text-center">
        <h1 className="text-3xl font-serif font-bold text-[#9b87f5]">Loading Pensieve...</h1>
        <div className="mt-4 w-12 h-12 border-4 border-[#9b87f5] border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
};

export default Index;
