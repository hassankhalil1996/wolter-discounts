const API_URL = import.meta.env.VITE_API_URL;

export async function getFeedback() {
    const response = await fetch(`${API_URL}/feedback`);
    if (!response.ok) {
        throw new Error("Failed to get feedback");
    }
    return response.json();
}
export async function addFeedback(comment) {
    const response = await fetch(`${API_URL}/feedback`, {
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
//# sourceMappingURL=feedbackService.js.map