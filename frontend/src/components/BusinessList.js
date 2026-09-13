import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import BusinessCard from "./BusinessCard";
function BusinessList({ businesses }) {
    return (_jsx(_Fragment, { children: businesses.map((business) => (_jsx(BusinessCard, { business: business }, business.id))) }));
}
export default BusinessList;
//# sourceMappingURL=BusinessList.js.map