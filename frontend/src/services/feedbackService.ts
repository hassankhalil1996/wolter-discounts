const API_URL = import.meta.env.VITE_API_URL;

import type { Feedback } from "../types/Feedback";

export async function getFeedback(): Promise<Feedback[]> {
  const response = await fetch(`${API_URL}/feedback`);

  if (!response.ok) {
    throw new Error("Failed to get feedback");
  }

  return response.json();
}

export async function addFeedback(
  comment: string,
  isPublic: boolean
) {
  const response = await fetch(`${API_URL}/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment,
      isPublic,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add feedback");
  }

  return response.json();
}