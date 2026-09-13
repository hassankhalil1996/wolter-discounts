export async function getBusinessesByRegion(region) {
    const response = await fetch(`http://localhost:3000/businesses/region/${region}`);
    if (!response.ok) {
        throw new Error("Failed to get businesses");
    }
    return response.json();
}
//# sourceMappingURL=businessService.js.map