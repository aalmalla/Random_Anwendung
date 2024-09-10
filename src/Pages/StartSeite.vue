<template>
	<div>
		<v-container>
			<v-row>
				<v-col v-for="recipe in recipes" :key="recipe.idMeal" cols="12" sm="6" md="4">
					<router-link :to="{ name: 'RecipeDetail', params: { id: recipe.idMeal } }">
						<SimpleRecipeCard :recipe="recipe" />
					</router-link>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>


<script>
import SimpleRecipeCard from "../components/SimpleRecipeCard.vue"; // geänderter Import
import { fetchAllRecipes } from "../services/RecipeService.js";

export default {
	name: 'StartSeite',
	components: {
		SimpleRecipeCard, // geänderte Komponente
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
