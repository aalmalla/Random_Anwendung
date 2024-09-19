<--Es wird nicht benutzt-->
<template>
	<v-btn loadRandomRecipe @click="loadRandomRecipe">Random Recipe</v-btn>
</template>

<script setup>
import { ref } from "vue";
import { useRecipeService } from "../services/RecipeService";

const recipe = ref(null);
const { getRandomRecipes } = useRecipeService();

const loadRandomRecipe = async () => {
	const randomRecipeData = await getRandomRecipes();
	recipe.value = randomRecipeData[0];
};

</script>