import type { Business } from "../types/Business";

type Props = {
  business: Business;
};

function BusinessCard({ business }: Props) {
  return (
    <div className="business">
      <h3>{business.name}</h3>

      <p>
        <strong>Discount:</strong> {business.discount}
      </p>

      <p>
        <strong>City:</strong> {business.city}
      </p>
    </div>
  );
}

export default BusinessCard;