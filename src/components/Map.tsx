import { useEffect, useRef } from 'react';

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show a placeholder div with a message when no API key is available
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
          <div class="text-center p-8">
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Map Preview</h3>
            <p class="text-gray-600">To enable Google Maps, please add your API key to the Map component.</p>
          </div>
        </div>
      `;
    }
  }, []);

  return (
    <div ref={mapRef} className="w-full h-[400px] rounded-lg shadow-lg" />
  );
}