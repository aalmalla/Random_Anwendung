<!-- SearchRecipes.vue -->
<template>
	<div class="center-container">
		<v-text-field v-model="searchRecipe" label="Suche Rezept" outlined dense style="height: 50px;"></v-text-field>
	</div>
</template>

<script setup lang="ts">
import {defineProps, ref, watch} from 'vue';

const props = defineProps({
	recipes: Array,
	onFilter: Function
});

const searchRecipe = ref("");


watch(searchRecipe, (newValue) => {
	const filteredRecipes = props.recipes.filter(recipe =>
		recipe.strMeal.toLowerCase().includes(newValue.toLowerCase())
	);
	props.onFilter(filteredRecipes);
});
</script>

<style scoped>
.center-container {
	min-height: 5vh;
	margin: auto;
	width: 400px;
	height: 1px;
}
</style>
