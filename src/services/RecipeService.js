import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

const handleRequest = async (url) => {
	try {
		const response = await axios.get(url);
		return response.data.meals;
	} catch (error) {
		console.error("Error fetching data:", error);
		return null;
	}
};

export const useRecipeService = () => ({
	getRandomRecipes: () => handleRequest(`${API_URL}random.php`),
	getRecipe: () => handleRequest(`${API_URL}search.php?s=`),
	getRecipeById: (id) => handleRequest(`${API_URL}lookup.php?i=${id}`),
});

/**
export const useRecipeService = () => {
	// ein Rezept zufällig abrufen
	const getRandomRecipes = async () => {
		try {
			const response = await axios.get(`${API_URL}random.php`);
			return response.data.meals;
		} catch (error) {
			console.error("Error fetching a random recipe:", error);
		}
	};
	// ruf alle verfügbaren Rezepte ab
	const getRecipe = async () => {
		try {
			const response = await axios.get(`${API_URL}/search.php?s=`);
			return response.data.meals;
		} catch (error) {
			console.error("Error fetching the recipe :", error);
		}
	};

	return {
		getRandomRecipes,
		getRecipe
	};
*/


