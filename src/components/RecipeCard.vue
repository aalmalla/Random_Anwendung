<template>
	<v-card>
		<!-- Standardanzeige mit einem Button zum Laden eines zufälligen Rezepts -->
		<v-card-title v-if="!localRecipe">Entdecke Rezepte</v-card-title>
		<v-card-subtitle v-if="!localRecipe">Klicke auf den Button, um ein zufälliges Rezept zu laden</v-card-subtitle>
		<v-card-text v-if="!localRecipe">
			<v-btn color="primary" @click="loadRandomRecipe">Zufälliges Rezept</v-btn>
		</v-card-text>

		<!-- Anzeige eines Rezepts -->
		<v-card v-else>
			<v-img :src="localRecipe.strMealThumb" height="200px"></v-img>
			<v-card-title>{{ localRecipe.strMeal }}</v-card-title>
			<v-card-subtitle>Zutaten</v-card-subtitle>
			<v-list>
				<v-list-item v-for="ingredient in extractIngredients(localRecipe)" :key="ingredient.name">
					{{ ingredient.name }}: {{ ingredient.measure }}
				</v-list-item>
			</v-list>
			<v-card-subtitle>Zubereitung</v-card-subtitle>
			<div>{{ localRecipe.strInstructions }}</div>
		</v-card>
	</v-card>
</template>

<script>
import { fetchRandomRecipe } from "../services/RecipeService.js";
import { extractIngredients } from "../utils/recipeUtils.js";

export default {
	props: {
		recipe: {
			type: Object,
			default: null, // Wenn kein Rezept übergeben wird, ist der Standardwert null
		},
	},
	data() {
		return {
			localRecipe: this.recipe, // Lokales Rezept, das entweder übergeben wird oder durch Zufall geladen wird
		};
	},
	methods: {
		async loadRandomRecipe() {
			try {
				this.localRecipe = await fetchRandomRecipe();
			} catch (error) {
				console.error('Fehler beim Laden des Rezepts:', error);
			}
		},
		extractIngredients(recipe) {
			// Extrahiere die Zutaten aus dem Rezept
			return extractIngredients(recipe);
		},
	},
};
</script>

<style scoped>
/* Dein optionales Styling hier */
</style>
