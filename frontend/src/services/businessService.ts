const API_URL = import.meta.env.VITE_API_URL;

import type { Business } from "../types/Business";

export async function getBusinessesByRegion(
  region: string
): Promise<Business[]> {
  const response = await fetch(
    `${API_URL}/businesses/region/${region}`
  );

  if (!response.ok) {
    throw new Error("Failed to get businesses");
  }

  return response.json();
}