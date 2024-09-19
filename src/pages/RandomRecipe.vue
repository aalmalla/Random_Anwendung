<template>
	<div class="recipe-container">

		<div class="button-container">
			<v-btn @click="loadRandomRecipe">Random Recipe</v-btn>
		</div>

		<RecipeDetail :recipe="recipe" v-if="recipe" />
	</div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import RecipeDetail from '../components/RecipeDetail.vue';
import { useRecipeService } from '../services/RecipeService';
//import RandomButton from '../components/RandomButton.vue';

const recipe = ref(null);
const { getRandomRecipes } = useRecipeService();

const loadRandomRecipe = async () => {
	const randomRecipeData = await getRandomRecipes();
	recipe.value = randomRecipeData[0];
};

onMounted(loadRandomRecipe);
</script>


<style scoped>
.recipe-container {
	text-align: center;
	gap: 1.5rem;
	width: 50%;
	margin: auto;
}
.button-container {
	align-self: flex-end;
	width: 100%;
}
</style>

