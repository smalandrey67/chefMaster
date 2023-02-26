import { CategoryElement } from "@/common/CategoryElement/CategoryElement";

import { categoriesItems } from "./constants";

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
