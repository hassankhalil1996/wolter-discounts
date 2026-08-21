import type { Business } from "../types/Business";
import BusinessCard from "./BusinessCard";

type Props = {
  businesses: Business[];
};

function BusinessList({ businesses }: Props) {
  return (
    <>
      {businesses.map((business) => (
        <BusinessCard
          key={business.id}
          business={business}
        />
      ))}
    </>
  );
}

export default BusinessList;