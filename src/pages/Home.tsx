import { useAuth } from '../context/AuthContext';
import Mapp from '../components/Map';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {user && (
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h1 className="text-xl font-semibold text-blue-800">
             Hey {user.email},   Welcome back to Aquafine !
            </h1>
          </div>
        )}
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

        <div className="space-y-0">
          <Mapp /> 
          <div className="flex items-center justify-center h-[150px] ">
<Link
  to="/auth"
  className="bg-red-400 text-white px-6 py-3 rounded-md hover:bg-red-600  inline-flex items-center"
>
  Get Started
</Link>

</div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xxl transition-shadow duration-500 cursor-pointer">
            <h2 className="text-3xl font-semibold mb-4">Featured Areas</h2>
            <p className="text-gray-600">
              Explore our featured locations and discover detailed information about each area.
              Click to learn more about demographics, amenities, and local attractions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}