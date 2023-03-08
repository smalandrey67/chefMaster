import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { Title } from "chefmaster-ui";

import type { RecipesProps } from "./Recipes.interface";

import styles from "./Recipes.module.scss";

export function Recipes({ popularRecipes }: RecipesProps): JSX.Element {
	return (
		<section className={styles.recipes}>
			<Title className={styles.recipesTitle} variant="big">
				Recipes
			</Title>
			<div className={styles.recipesWrapper}>
				{popularRecipes.map((recipe) => (
					<RecipeCard key={recipe._id} {...recipe} />
				))}
			</div>
		</section>
	);
}
