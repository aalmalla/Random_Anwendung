import {createRouter, createWebHashHistory} from 'vue-router'

import Generator from '../Pages/Generator.vue';
import StartSeite from '../Pages/StartSeite.vue';

const routes = [

	{path: '/', component: StartSeite},
	{path: '/recipe', component: Generator, name:"Ger"},
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});