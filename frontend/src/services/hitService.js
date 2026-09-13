export async function registerHit() {
    const response = await fetch("http://localhost:3000/hits", {
        method: "POST",
    });
    if (!response.ok) {
        throw new Error("Failed to register hit");
    }
}
//# sourceMappingURL=hitService.js.map