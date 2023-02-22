import { Categories } from "@/modules/Categories";
import { PersonalStatistic } from "@/modules/PersonalStatistic";
import { PopularRecipes } from "@/modules/PopularRecipes";
import { Articles } from "@/modules/Articles";

import styles from "./HomeScreen.module.scss";

export function HomeScreen(): JSX.Element {
	return (
		<div className={styles.home}>
			<Categories />
			<PersonalStatistic />
			<PopularRecipes />
			<Articles />
		</div>
	);
}
