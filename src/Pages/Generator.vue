<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="4" v-for="recipe in recipes" :key="recipe.id">
				<v-card>
					<v-img :src="recipe.image" height="500px"></v-img>
					<v-card-title>{{ recipe.name }}</v-card-title>
					<v-card-subtitle>Zutaten</v-card-subtitle>
					<v-card-text>
						<ul>
							<li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
						</ul>
						<p>{{ recipe.steps.join(". ") }}.</p>
					</v-card-text>
					<v-card-actions>
						<v-btn text @click="viewRecipe(recipe.id)">Mehr sehen</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			recipes: [
				{
					id: 1,
					name: "Spaghetti Carbonara",
					image: "link-to-image.jpg",
					ingredients: ["Spaghetti", "Eier", "Speck"],
					steps: ["Wasser kochen", "Spaghetti kochen", "Speck braten", "Alles vermischen"]
				}
				// Weitere Rezepte hinzufügen
			]
		};
	},
	methods: {
		viewRecipe(id) {
			console.log("Anzeigen von Rezept ", id);
		}
	}
};
</script>

<style scoped>
</style>
