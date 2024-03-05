export async function fetchCountries() {
    try {
        const response = await fetch("/data/countries.json", { cache: "no-store" });
        const data = await response.json();
        console.log(data);  
        return data;
    } catch (error) {
        console.error("API Error", error);
        throw new Error("Failed to fetch countries.");
    }
}
