export type DailyHit = {
  date: string;
  count: number;
};

export type HitStatistics = {
  total: number;
  data: DailyHit[];
};

const API_URL = "http://localhost:3000";

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