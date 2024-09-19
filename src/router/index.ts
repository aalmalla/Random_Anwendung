import { createRouter, createWebHistory } from 'vue-router';
import Recipes from '../pages/Recipes.vue';
import RandomRecipe from '../pages/RandomRecipe.vue';
import Recipe from '../pages/Recipe.vue';

const routes = [
	{ path: '/', name: 'Recipes', component: Recipes },
	{ path: '/:id?', name: 'Recipe', component: Recipe },
	{ path: '/randomRecipe/', name: 'RandomRecipe', component: RandomRecipe },
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
