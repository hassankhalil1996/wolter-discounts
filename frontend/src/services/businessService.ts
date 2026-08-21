import type { Business } from "../types/Business";

export async function getBusinessesByRegion(
  region: string
): Promise<Business[]> {
  const response = await fetch(
    `http://localhost:3000/businesses/region/${region}`
  );

  if (!response.ok) {
    throw new Error("Failed to get businesses");
  }

  return response.json();
}