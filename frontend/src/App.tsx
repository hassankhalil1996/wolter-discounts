import { useState } from "react";
import "./App.css";

type Business = {
  id: number;
  name: string;
  city: string;
  discount: string;
  region: string;
};

function App() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(false);

  async function selectRegion(region: string) {
    setSelectedRegion(region);
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:3000/businesses/region/${region}`
      );

      if (!response.ok) {
        throw new Error("Failed to get businesses");
      }

      const data: Business[] = await response.json();

      setBusinesses(data);
    } catch (error) {
      console.error(error);
      setBusinesses([]);
    } finally {
      setLoading(false);
    }
  }

  function goBack() {
    setSelectedRegion(null);
    setBusinesses([]);
  }

  return (
    <div className="app">
      <h1>Courier Discounts</h1>

      {selectedRegion === null ? (
        <>
          <h2>Choose your region</h2>

          <div className="regions">
            <button onClick={() => selectRegion("NORTH")}>
              North Tel Aviv
            </button>

            <button onClick={() => selectRegion("CENTRAL")}>
              Central Tel Aviv
            </button>

            <button onClick={() => selectRegion("SOUTH")}>
              South Tel Aviv
            </button>

            <button onClick={() => selectRegion("EAST")}>
              East Tel Aviv
            </button>
          </div>
        </>
      ) : (
        <>
          <button className="back-button" onClick={goBack}>← Back</button>

          <h2>{selectedRegion} Business in TEL AVIV</h2>

          {loading ? (
            <p>Loading businesses...</p>
          ) : businesses.length === 0 ? (
            <p>No businesses in this region.</p>
          ) : (
            businesses.map((business) => (
              <div className="business" key={business.id}>
                <h3>{business.name}</h3>

                <p>
                  <strong>Discount:</strong> {business.discount}
                </p>

                <p>
                  <strong>City:</strong> {business.city}
                </p>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
}

export default App;