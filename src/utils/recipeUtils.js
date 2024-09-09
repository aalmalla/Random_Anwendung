// src/utils/recipeUtils.js
export function extractIngredients(meal) {
	const ingredients = [];
	for (let i = 1; i <= 20; i++) {
		const ingredientName = meal[`strIngredient${i}`];
		const measure = meal[`strMeasure${i}`];
		if (ingredientName) {
			ingredients.push({ name: ingredientName, measure: measure });
		}
	}
	return ingredients;
}
