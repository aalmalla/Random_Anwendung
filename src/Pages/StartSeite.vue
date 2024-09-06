<script setup lang="ts">

import {router} from '../router';

defineProps<{ msg: string }>()

</script>

<template>

	<div>
		<a href="https://www.themealdb.com/api.php" target="_blank">
			<img src="/src/assets/img/billd.jpg" class="logo" />
		</a>
	</div>

	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="() => router.push({name: 'Ger'}) ">Rezeptsuchen</button>
	</div>

</template>

