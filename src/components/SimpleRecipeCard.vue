<template>
	<v-card>
		<v-img :src="localRecipe.strMealThumb" height="200px"></v-img>
		<v-card-title>{{ localRecipe.strMeal }}</v-card-title>
	</v-card>
</template>

<script>
import RecipeCard from './RecipeCard.vue';

export default {
	extends: RecipeCard,
};
</script>

<style scoped>

</style>
