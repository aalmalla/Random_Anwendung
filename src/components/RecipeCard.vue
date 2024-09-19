<template>
	<v-card class="recipe-card" @click="navigateToRecipe">
		<v-img :src="recipe.strMealThumb" alt="Recipe Image" class="recipe-image" ></v-img>
		<v-card-title class="recipe-name">{{ recipe.strMeal }}</v-card-title>
	</v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  recipe: {
    idMeal: string;
    strMealThumb: string;
    strMeal: string;
  };
}>();

const router = useRouter();

const navigateToRecipe = () => {
  router.push({ name: 'Recipe', params: { id: props.recipe.idMeal } });
};
</script>



