<template>
	<v-app>
		<v-container>
			<v-row>
				<v-col>
					<v-card>
						<v-card-title>Entdecke Rezepte</v-card-title>
						<v-card-subtitle>Klicke auf den Button, um ein zufälliges Rezept zu laden</v-card-subtitle>
						<v-card-text>
							<v-btn color="primary" @click="loadRandomRecipe">Zufälliges Rezept</v-btn>
						</v-card-text>
						<v-card-text v-if="recipe">
							<v-img :src="recipe.strMealThumb" height="200px"></v-img>
							<v-card-title>{{ recipe.strMeal }}</v-card-title>
							<v-card-subtitle>Zutaten</v-card-subtitle>
							<v-list>
								<v-list-item v-for="ingredient in extractIngredients(recipe)" :key="ingredient.name">
									{{ ingredient.name }}: {{ ingredient.measure }}
								</v-list-item>
							</v-list>
							<v-card-subtitle>Zubereitung</v-card-subtitle>
							<div>{{ recipe.strInstructions }}</div>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			recipe: null
		};
	},
	methods: {
		async loadRandomRecipe() {
			try {
				const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
				this.recipe = response.data.meals[0];
			} catch (error) {
				console.error('Fehler beim Laden des Rezepts:', error);
			}
		},
		extractIngredients(meal) {
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
	}
};
</script>
