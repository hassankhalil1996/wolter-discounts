export type DailyHit = {
  date: string;
  count: number;
};

export type HitStatistics = {
  total: number;
  data: DailyHit[];
};

const API_URL = import.meta.env.VITE_API_URL;

export async function getDailyHits(
  adminKey: string
): Promise<HitStatistics> {
  const response = await fetch(`${API_URL}/admin/hits/daily`, {
    headers: {
      "x-admin-key": adminKey,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get statistics");
  }

  return response.json();
}