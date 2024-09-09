<!-- src/App.vue -->
<template>
	<v-app>
		<app-bar></app-bar>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script setup>
import AppBar from './components/AppBar.vue';
</script>
