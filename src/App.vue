<script setup lang="ts">

import AppBar from './components/AppBar.vue';
</script>

<template>
	<v-app>
		<app-bar></app-bar>
		<v-main>
			<router-view></router-view>
		</v-main>
		<Footer></Footer>
	</v-app>
</template>


