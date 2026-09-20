const API_URL = import.meta.env.VITE_API_URL;

export async function registerHit() {
    const response = await fetch(`${API_URL}/hits`, {
        method: "POST",
    });
    if (!response.ok) {
        throw new Error("Failed to register hit");
    }
}
//# sourceMappingURL=hitService.js.map