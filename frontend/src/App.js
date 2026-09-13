import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "./App.css";
import RegionSelector from "./components/RegionSelector";
import BusinessList from "./components/BusinessList";
import { getBusinessesByRegion } from "./services/businessService";
import { registerHit } from "./services/hitService";
import FeedbackSection from "./components/FeedbackSection";
function App() {
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [businesses, setBusinesses] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        registerHit().catch((error) => {
            console.error("Failed to register hit:", error);
        });
    }, []);
    async function selectRegion(region) {
        setSelectedRegion(region);
        setLoading(true);
        try {
            const data = await getBusinessesByRegion(region);
            setBusinesses(data);
        }
        catch (error) {
            console.error(error);
            setBusinesses([]);
        }
        finally {
            setLoading(false);
        }
    }
    function goBack() {
        setSelectedRegion(null);
        setBusinesses([]);
    }
    return (_jsxs("div", { className: "app", children: [_jsx("h1", { children: "Courier Discounts" }), selectedRegion === null ? (_jsx(RegionSelector, { onSelectRegion: selectRegion })) : (_jsxs(_Fragment, { children: [_jsx("button", { className: "back-button", onClick: goBack, children: "\u2190 Back" }), _jsxs("h2", { children: [selectedRegion, " TEL AVIV"] }), loading ? (_jsx("p", { children: "Loading businesses..." })) : businesses.length === 0 ? (_jsx("p", { children: "No businesses in this region." })) : (_jsx(BusinessList, { businesses: businesses }))] })), _jsx(FeedbackSection, {})] }));
}
export default App;
//# sourceMappingURL=App.js.map