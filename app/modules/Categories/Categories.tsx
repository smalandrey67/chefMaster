import { CategoryElement } from "chefmaster-ui";

import { categoriesItems } from "./constants";

import styles from "./Categories.module.scss";

export function Categories(): JSX.Element {
	return (
		<div className={styles.categories}>
			{categoriesItems.map(({ id, ...properties }) => (
				<CategoryElement key={id} {...properties} />
			))}
		</div>
	);
}
