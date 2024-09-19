<template>
	<v-app-bar app>
		<v-toolbar-title>Rezepte App</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn text @click="goToRcipes">Recipes</v-btn>
		<v-btn text @click="goToRandomRecipe">Random Recipe</v-btn>
	</v-app-bar>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToRcipes() {
	router.push({ name: "Recipes" });
}

function goToRandomRecipe() {
	router.push({ name: "RandomRecipe" });
}
</script>



