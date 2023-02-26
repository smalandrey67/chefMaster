import Image from "next/image";

import type { RecipeCardProps } from "./RecipeCard.interface";

import styles from "./RecipeCard.module.scss";

export function RecipeCard({ image, title, readyIn, level, id }: RecipeCardProps): JSX.Element {
	return (
		<article className={styles.recipe}>
			<div className={styles.recipeHeader}>
				<Image src={image} width={130} height={130} alt={title} />
			</div>
			<div className={styles.recipeFooter}>
				<h4 className={styles.recipeTitle}>{title}</h4>
				<div className={styles.recipeInformation}>
					<span className={styles.recipeInformationItem}>{readyIn}</span>
					<span className={styles.recipeInformationItem}>|</span>
					<span className={styles.recipeInformationItem}>{level}</span>
				</div>
			</div>
		</article>
	);
}
