<template>
	<div class="center-container">
		<v-text-field v-model="searchRecipe" label="Suche Rezept" outlined dense style="height: 50px;"></v-text-field>

	</div>

	<v-main class="recipe-grid">

			<RecipeCard v-for="(recipe) in filteredRecipes" :key="recipe.idMeal" :recipe="recipe" />
		</v-main>
</template>

<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';


import {useRecipeService} from '../services/recipeService';
import RecipeCard from '../components/RecipeCard.vue';


const recipes = ref([]);
const searchRecipe = ref("");
const {getRecipe} = useRecipeService();

const filteredRecipes = computed(() => {
	return recipes.value.filter(recipe => recipe.strMeal.toLowerCase().includes(searchRecipe.value.toLowerCase()));
});


onMounted(async () => {
	recipes.value = await getRecipe();
	console.log(recipes.value);
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
.center-container {

	min-height: 5vh;
	margin: auto;
	width: 400px;
	height: 1px;

}


</style>
