import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    import('./public/data.json') // Dynamically import the JSON file
      .then((module) => setData(module.default))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div>
      <h1>   your Generated Data (in json format),  for beta version we take only one geolocation</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

