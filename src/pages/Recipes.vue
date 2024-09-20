<template>
	<SearchRecipes :recipes="recipes" :onFilter="setFilteredRecipes" />


	<v-main class="recipe-grid">

			<RecipeCard v-for="(recipe) in filteredRecipes" :key="recipe.idMeal" :recipe="recipe" />
		</v-main>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';


import {useRecipeService} from '../services/recipeService';
import RecipeCard from '../components/RecipeCard.vue';
import SearchRecipes from '../components/SearchRecipes.vue';


const recipes = ref([]);
const filteredRecipes = ref([]);
const {getRecipe} = useRecipeService();

const setFilteredRecipes = (filtered) => {
	filteredRecipes.value = filtered;
};


onMounted(async () => {
	recipes.value = await getRecipe();
	console.log(recipes.value);

	filteredRecipes.value = recipes.value;
});
</script>

<style scoped lang="scss">
.content {
	padding: 4rem 2rem 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	box-sizing: border-box;
}

.recipe-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1.5rem;
	width: 100%;
}


</style>
