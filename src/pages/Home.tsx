import { useAuth } from '../context/AuthContext';
import Mapp from '../components/Map';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {user && (
          <div className="mb-8 bg-white-500 border border-blue-300 rounded-lg p-2">
            <h1 className="text-xl font-semibold text-blue-400">
             Hey {user.email},   Welcome back !
            </h1>
          </div>
        )}

        <h1 className="text-1xl hover:to-slate-600 mb-8">  Efficient fish production planning is crucial for meeting market demands and sustaining aquaculture operations. Current methods depend heavily on manual surveys, which are labor-intensive, prone to inaccuracies, and lack the scalability to cover vast or remote water bodies. This leads to suboptimal use of resources and missed opportunities for aquaculture optimization.</h1>
   

        <div className="space-y-0">
          <Mapp /> 
          
          <div className="flex items-center justify-center h-[150px]">
<Link
  to="/auth"
  className="relative overflow-hidden group bg-gradient-to-r from-red-400 to-pink-500 text-white px-8 py-4 rounded-lg inline-flex items-center transition-all duration-300 ease-in-out hover:from-red-500 hover:to-pink-600 hover:shadow-lg hover:-translate-y-1"
  >
    <span className="relative z-10 font-semibold">
      Get Started
    </span>
    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out" />
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