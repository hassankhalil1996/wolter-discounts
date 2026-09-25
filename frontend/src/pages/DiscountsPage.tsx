import { useEffect, useState } from "react";
import "./DiscountsPage.css";

import RegionSelector from "../components/RegionSelector";
import BusinessList from "../components/BusinessList";
import { getBusinessesByRegion } from "../services/businessService";

import { registerHit } from "../services/hitService";
import type { Business } from "../types/Business";

import FeedbackSection from "../components/FeedbackSection";

function App() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    registerHit().catch((error) => {
      console.error("Failed to register hit:", error);
    });
  }, []);

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
    <div className="app" dir="rtl">
      <h1>הנחות לשליחי וולט</h1>

      {selectedRegion === null ? (
        <RegionSelector onSelectRegion={selectRegion} />
      ) : (
        <>
          <button className="back-button" onClick={goBack}>
            חזרה ←
          </button>

          <h2>תל אביב - {selectedRegion}</h2>

          {loading ? (
            <p>טוען עסקים...</p>
          ) : businesses.length === 0 ? (
            <p>אין עסקים באזור זה.</p>
          ) : (
            <BusinessList businesses={businesses} />
          )}
        </>
      )}

      <FeedbackSection />
    </div>
  );
}

export default App;