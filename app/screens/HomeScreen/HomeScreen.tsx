import { Categories } from "@/modules/Categories";
import { PersonalStatistic } from "@/modules/PersonalStatistic";
import { Recipes } from "@/modules/Recipes";
import { Articles } from "@/modules/Articles";

import styles from "./HomeScreen.module.scss";

export function HomeScreen(): JSX.Element {
	return (
		<div className={styles.home}>
			<Categories />
			<PersonalStatistic />
			<Recipes />
			<Articles />
		</div>
	);
}
