import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function RegionSelector({ onSelectRegion }) {
    return (_jsxs(_Fragment, { children: [_jsx("h2", { children: "Choose your region" }), _jsxs("div", { className: "regions", children: [_jsx("button", { onClick: () => onSelectRegion("NORTH"), children: "North Tel Aviv" }), _jsx("button", { onClick: () => onSelectRegion("CENTRAL"), children: "Central Tel Aviv" }), _jsx("button", { onClick: () => onSelectRegion("SOUTH"), children: "South Tel Aviv" }), _jsx("button", { onClick: () => onSelectRegion("EAST"), children: "East Tel Aviv" })] })] }));
}
export default RegionSelector;
//# sourceMappingURL=RegionSelector.js.map