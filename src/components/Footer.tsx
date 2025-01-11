export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 text-right">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-left">About Us</h3>
            <p className="text-gray-300 text-left">
              Providing detailed area information and mapping services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-right">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white text-right">Home</a></li>
              <li><a href="/details" className="text-gray-300 hover:text-white">Area Details</a></li>
              <li><a href="/signup" className="text-gray-300 hover:text-white">Sign Up</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; 2024 Aqua AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}