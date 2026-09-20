const API_URL = import.meta.env.VITE_API_URL;


export async function getBusinessesByRegion(region) {
    const response = await fetch(`${API_URL}/businesses/region/${region}`);
    if (!response.ok) {
        throw new Error("Failed to get businesses");
    }
    return response.json();
}
//# sourceMappingURL=businessService.js.map