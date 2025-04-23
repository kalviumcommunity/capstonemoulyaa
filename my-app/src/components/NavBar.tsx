
import { Link, useLocation } from "react-router-dom";
import { Home, User, LogOut, Book, Star } from "lucide-react";

const NavBar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-[#1A1F2C] text-white p-4 shadow-lg border-b border-[#6E59A5]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/featured" className="flex items-center gap-2">
          <span className="text-xl font-serif font-bold text-[#9b87f5]">Pensieve</span>
          <Book className="text-[#9b87f5]" size={20} />
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/featured" className={`flex items-center gap-1 hover:text-[#9b87f5] transition-colors ${location.pathname === '/featured' ? 'text-[#9b87f5]' : 'text-white'}`}>
            <Home size={18} />
            <span className="hidden md:inline">Featured</span>
          </Link>
          
          <Link to="/add" className={`flex items-center gap-1 hover:text-[#9b87f5] transition-colors ${location.pathname === '/add' ? 'text-[#9b87f5]' : 'text-white'}`}>
            <Star size={18} />
            <span className="hidden md:inline">Add Pensieve</span>
          </Link>
          
          <Link to="/profile" className={`flex items-center gap-1 hover:text-[#9b87f5] transition-colors ${location.pathname === '/profile' ? 'text-[#9b87f5]' : 'text-white'}`}>
            <User size={18} />
            <span className="hidden md:inline">Profile</span>
          </Link>
          
          <Link to="/" className="flex items-center gap-1 hover:text-[#9b87f5] transition-colors">
            <LogOut size={18} />
            <span className="hidden md:inline">Logout</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
