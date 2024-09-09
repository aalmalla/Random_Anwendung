// src/services/RecipeService.js
import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Diese Funktion holt ein zufälliges Rezept
export async function fetchRandomRecipe() {
	try {
		const response = await axios.get(`${BASE_URL}/random.php`);
		return response.data.meals[0];
	} catch (error) {
		console.error('Fehler beim Laden des Rezepts:', error);
		throw error; // Weitergeben des Fehlers für eventuelle Fehlerbehandlung in der Komponente
	}
}

// Diese Funktion holt alle verfügbaren Rezepte
export async function fetchAllRecipes() {
	try {
		const response = await axios.get(`${BASE_URL}/search.php?s=`);
		return response.data.meals;
	} catch (error) {
		console.error('Fehler beim Laden der Rezepte:', error);
		throw error;
	}
}
