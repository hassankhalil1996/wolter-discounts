import type { Business } from "../types/Business";
import "./BusinessCard.css";

type Props = {
  business: Business;
};

function BusinessCard({ business }: Props) {
  return (
    <div className="business-card" dir="rtl">
      <div className="business-card-header">
        <div className="business-icon">
          {business.name.charAt(0)}
        </div>

        <div className="business-title">
          <h3>{business.name}</h3>
          <span className="business-city">
            {business.city}
          </span>
        </div>
      </div>

      <div className="business-card-content">
        <span className="discount-label">הטבה לשליחים</span>

        <div className="discount-value">
          {business.discount}
        </div>
      </div>

      <div className="business-card-footer">
        <span>📍 {business.city}</span>
        <span className="courier-badge">לשליחי Wolt</span>
      </div>
    </div>
  );
}

export default BusinessCard;