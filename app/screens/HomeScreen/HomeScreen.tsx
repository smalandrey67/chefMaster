import { Categories } from "@/modules/Categories";
import { PersonalStatistic } from "@/modules/PersonalStatistic";
import { Recipes } from "@/modules/Recipes";
import { Articles } from "@/modules/Articles";

import type { HomeScreenProps } from "./HomeScreen.interface";

import styles from "./HomeScreen.module.scss";

export function HomeScreen({ popularRecipes, articles, error }: HomeScreenProps): JSX.Element {
	if (error) {
		return <div>Error</div>;
	}

	return (
		<div className={styles.home}>
			<Categories />
			<PersonalStatistic />
			<Recipes popularRecipes={popularRecipes} />
			<Articles articles={articles} />
		</div>
	);
}
