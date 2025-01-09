import { useAuth } from '../context/AuthContext';
import Map from '../components/Map';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {user && (
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h1 className="text-xl font-semibold text-blue-800">
              Welcome back, {user.email}!
            </h1>
          </div>
        )}
        
        <div className="space-y-8">
          <Map />
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">Featured Areas</h2>
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