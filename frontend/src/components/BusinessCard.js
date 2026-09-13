import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function BusinessCard({ business }) {
    return (_jsxs("div", { className: "business", children: [_jsx("h3", { children: business.name }), _jsxs("p", { children: [_jsx("strong", { children: "Discount:" }), " ", business.discount] }), _jsxs("p", { children: [_jsx("strong", { children: "City:" }), " ", business.city] })] }));
}
export default BusinessCard;
//# sourceMappingURL=BusinessCard.js.map