<template>
	<v-container>

		<v-card class="mx-auto my-6" >

			<v-card-title>
				{{ recipe.strMeal }}
				<v-card-subtitle>
					{{ recipe.strCategory }}
				</v-card-subtitle>
			</v-card-title>

			<v-img :src="recipe.strMealThumb"></v-img>
			<v-card-text>
				<h3>Ingredients:</h3>
				<v-chip-group column class="ingredients-list">
					<v-chip
						v-for="(ingredient, index) in ingredients" :key="index">{{ ingredient }}
					</v-chip>
				</v-chip-group>
				<h3>Instructions:</h3>
				<p>{{ recipe.strInstructions }}</p>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
	recipe: {
		type: Object,
		required: true,
	},
});

const ingredients = computed(() => {
	const ingredients = [];
	let i = 1;  // Startet den Zähler bei 1
	// Die Schleife durchläuft bis keine Zutaten mehr gefunden werden.
	while (props.recipe[`strIngredient${i}`]) {
		const ingredient = props.recipe[`strIngredient${i}`];
		const measure = props.recipe[`strMeasure${i}`];
		// Zutat und Maßangabe hinzufügen, wenn sie Zutat vorhanden ist.
		if (ingredient) {
			ingredients.push(`${measure ? measure + ' ' : ''}${ingredient}`);
		}
		i++;
	}
	return ingredients;
});
</script>



