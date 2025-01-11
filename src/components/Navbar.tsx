import { Search, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

export default function Navbar() {
  const { } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Side */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-semibold text-gray-700 hover:text-gray-900"
            >
              Aquafine AI
            </Link>
          </div>

        
          <div className="flex space-x-4 items-center">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-yellow-500 hover:text-yellow-400 hover:bg-yellow-50 transition ease-in-out duration-300 transform hover:scale-105"
            >
              Home page
            </Link>
            <Link
              to="/details"
              className="px-3 py-2 rounded-md text-sm font-medium text-pink-700 hover:text-pink-400 hover:bg-pink-50 transition ease-in-out duration-300 transform hover:scale-105"
            >
              Details of Area
            </Link>
            <button
            onClick={handleSignOut}
           
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </button>
           
          </div>
        </div>
      </div>

    
    </nav>
  );
}
