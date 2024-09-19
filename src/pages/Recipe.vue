<template>
	<div class="recipe-container">
		<RecipeDetail :recipe="recipe" v-if="recipe" />
	</div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import RecipeDetail from '../components/RecipeDetail.vue';
import { useRecipeService } from '../services/RecipeService';

const recipe = ref(null);
const route = useRoute();
const { getRecipeById } = useRecipeService();

onMounted(async () => {

	const recipeData = await getRecipeById( route.params.id);
	recipe.value = recipeData[0];
});
</script>


<style scoped>
.recipe-container {
	text-align: center;
	gap: 1.5rem;
	width: 50%;
	margin: auto;
}
</style>

