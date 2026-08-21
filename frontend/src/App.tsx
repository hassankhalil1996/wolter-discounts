import { useState } from "react";
import "./App.css";

import RegionSelector from "./components/RegionSelector";
import BusinessList from "./components/BusinessList";
import { getBusinessesByRegion } from "./services/businessService";

import type { Business } from "./types/Business";

function App() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(false);

  async function selectRegion(region: string) {
    setSelectedRegion(region);
    setLoading(true);

    try {
      const data = await getBusinessesByRegion(region);
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
        <RegionSelector onSelectRegion={selectRegion} />
      ) : (
        <>
          <button className="back-button" onClick={goBack}>
            ← Back
          </button>

          <h2>{selectedRegion} TEL AVIV</h2>

          {loading ? (
            <p>Loading businesses...</p>
          ) : businesses.length === 0 ? (
            <p>No businesses in this region.</p>
          ) : (
            <BusinessList businesses={businesses} />
          )}
        </>
      )}
    </div>
  );
}

export default App;