import {createRouter, createWebHashHistory} from 'vue-router'

import Generator from '../Pages/Generator.vue';
import StartSeite from '../Pages/StartSeite.vue';

const routes = [
	{ path: '/', name: 'StartSeite', component: StartSeite },
	{ path: '/generator', name: 'Generator', component: Generator },
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});