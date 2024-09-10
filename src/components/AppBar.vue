<!-- src/components/AppBar.vue -->
<template>
	<v-app-bar app>
		<v-toolbar-title>Rezepte App</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn text @click="goStartSeitS">Startseite</v-btn>
		<v-btn text @click="goToGenerator">Generator</v-btn>
	</v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();

function goStartSeitS() {
	router.push({ name: 'StartSeite' });
}

function goToGenerator() {
	router.push({ name: 'Generator' });
}
</script>
