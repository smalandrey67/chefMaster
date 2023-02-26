import Image from "next/image";

import type { CategoryElementProps } from "./CategoryElement.interface";

import styles from "./CategoryElement.module.scss";

export function CategoryElement({ image, label }: CategoryElementProps): JSX.Element {
	return (
		<li className={styles.category}>
			<Image src={image} className={styles.categoryImage} width={60} height={60} alt={label} />
			<span className={styles.categoryLabel}>{label}</span>
		</li>
	);
}
