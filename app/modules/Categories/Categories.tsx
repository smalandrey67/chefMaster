import { CategoryElement } from "./components/CategoryElement/CategoryElement";

import { categoriesItems } from "./Categories.constants";

import styles from "./Categories.module.scss";

export function Categories(): JSX.Element {
	return (
		<ul className={styles.categories}>
			{categoriesItems.map(({ id, ...properties }) => (
				<CategoryElement key={id} {...properties} />
			))}
		</ul>
	);
}
