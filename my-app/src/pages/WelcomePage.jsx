
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WelcomePage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2600&auto=format')",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="text-center max-w-3xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          Welcome to your <span className="text-[#9b87f5]">Pensieve</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Store your memories, track your moods, and find magical insights to improve your well-being.
        </p>
        
        <div className="space-y-4 md:space-y-0 md:flex md:gap-4 md:justify-center">
          <Link to="/signup">
            <Button className="w-full md:w-auto bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-semibold py-2 px-6 rounded-md text-lg">
              Join the Order
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="w-full md:w-auto border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white font-semibold py-2 px-6 rounded-md text-lg">
              Enter Your Common Room
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-center text-white">
        <p className="text-sm opacity-70">Unlock the magic within your memories</p>
      </div>
    </div>
  );
};

export default WelcomePage;
