import { Search, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

export default function Navbar() {
  const { user } = useAuth();
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
              Aquafine
            </Link>
          </div>

          {/* Right Side Navigation */}
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
            {!user ? (
              <Link
                to="/signup"
                className="px-3 py-2 rounded-md text-sm font-medium text-green-700 hover:text-green-400 hover:bg-green-50 transition ease-in-out duration-300 transform hover:scale-105"
              >
                Sign up
              </Link>
            ) : (
              <button
                onClick={handleSignOut}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition ease-in-out duration-300 transform hover:scale-105"
              >
                <LogOut size={16} className="mr-2" />
                Sign out
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Search.."
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <Search size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
}
