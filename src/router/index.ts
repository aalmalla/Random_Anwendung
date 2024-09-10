import {createRouter, createWebHashHistory} from 'vue-router'

import Generator from '../Pages/Generator.vue';
import StartSeite from '../Pages/StartSeite.vue';
import RecipeCard from '../components/RecipeCard.vue';

const routes = [
	{ path: '/', name: 'StartSeite', component: StartSeite },
	{ path: '/generator', name: 'Generator', component: Generator },
	{ path: '/recipe/:id', name: 'RecipeDetail', component: RecipeCard, props: true }, // Neue Route für Rezeptdetails
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});