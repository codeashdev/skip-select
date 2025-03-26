const API_BASE_URL = "https://app.wewantwaste.co.uk/api";

export const fetchSkips = async (
	postcode: string,
	area: string,
): Promise<Skip[]> => {
	const response = await fetch(
		`${API_BASE_URL}/skips/by-location?postcode=${encodeURIComponent(postcode)}&area=${encodeURIComponent(area)}`,
	);

	if (!response.ok) {
		throw new Error("Failed to fetch skips");
	}

	return response.json();
};
