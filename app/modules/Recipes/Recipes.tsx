import { RecipeCard } from "@/common/RecipeCard/RecipeCard";

import styles from "./Recipes.module.scss";

export function Recipes(): JSX.Element {
	return (
		<section className={styles.recipes}>
			<h2 className={styles.recipesTitle}>Recipes</h2>
			<div className={styles.recipesWrapper}>
				{new Array(6).fill("item").map((_, index) => (
					<RecipeCard
						key={index}
						image="https://lh3.googleusercontent.com/Y20edJ0vrR3C30AfkzRxfzHFisrmfZWTmRxbsV0o8WkAR53fY8KufSlVbK4737dWz3A_fK6FufPDSHYIlXngXxDCHbmvFvFUcf9a3Lj8WPr2tqVB451pceS2na7YI24lM9xKDQyGgA=w2400"
						title="burger"
						readyIn="40 min"
						level="easy lvl"
						id="test"
					/>
				))}
			</div>
		</section>
	);
}
