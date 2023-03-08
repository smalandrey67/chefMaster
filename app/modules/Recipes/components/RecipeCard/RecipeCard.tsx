import Image from "next/image";

import type { Recipe } from "@/interfaces/Recipe.interface";

import styles from "./RecipeCard.module.scss";

export function RecipeCard({ image, title, cookTime, cookLevel, _id }: Recipe): JSX.Element {
	return (
		<article className={styles.recipe}>
			<div className={styles.recipeHeader}>
				<Image src={image} width={130} height={130} alt={title} />
			</div>
			<div className={styles.recipeFooter}>
				<h4 className={styles.recipeTitle}>{title}</h4>
				<div className={styles.recipeInformation}>
					<span className={styles.recipeInformationItem}>{cookTime}</span>
					<span className={styles.recipeInformationItem}>|</span>
					<span className={styles.recipeInformationItem}>{cookLevel}</span>
				</div>
			</div>
		</article>
	);
}
