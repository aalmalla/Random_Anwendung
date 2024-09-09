<template>
	<div>
		<v-container>
			<v-row>
				<v-col v-for="recipe in recipes" :key="recipe.idMeal" cols="12" sm="6" md="4">
					<RecipeCard :recipe="recipe" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import RecipeCard from "../components/RecipeCard.vue";
import { fetchAllRecipes } from "../services/RecipeService.js";

export default {
	name: 'StartSeite',
	components: {
		RecipeCard,
	},
	data() {
		return {
			recipes: [],
		};
	},
	async created() {
		try {
			this.recipes = await fetchAllRecipes();
		} catch (error) {
			console.error('Fehler beim Laden der Rezepte:', error);
		}
	},
};
</script>

<style scoped>
/* Dein optionales Styling hier */
</style>
