import type { Feedback } from "../types/Feedback";

export async function getFeedback(): Promise<Feedback[]> {
  const response = await fetch("http://localhost:3000/feedback");

  if (!response.ok) {
    throw new Error("Failed to get feedback");
  }

  return response.json();
}

export async function addFeedback(comment: string): Promise<Feedback> {
  const response = await fetch("http://localhost:3000/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add feedback");
  }

  return response.json();
}