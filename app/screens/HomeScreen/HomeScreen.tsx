import { Categories } from "@/modules/Categories";
import { PersonalStatistic } from "@/modules/PersonalStatistic";
import { Recipes } from "@/modules/Recipes";
import { Articles } from "@/modules/Articles";

import type { HomeScreenProps } from "./HomeScreen.interface";

import styles from "./HomeScreen.module.scss";

export function HomeScreen({ popularRecipes }: HomeScreenProps): JSX.Element {
	return (
		<div className={styles.home}>
			<Categories />
			<PersonalStatistic />
			<Recipes popularRecipes={popularRecipes} />
			<Articles />
		</div>
	);
}
