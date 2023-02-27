import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend, ChartData } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

import styles from "./PersonalStatistic.module.scss";

export function PersonalStatistic(): JSX.Element {
	const calories = {
		max: 800,
		current: 300
	};

	const carbohydrates = {
		max: 2000,
		current: 1200
	};

	const caloriesData: ChartData<"doughnut"> = {
		labels: ["calories left", "calories"],
		datasets: [
			{
				data: [calories.max, calories.current],
				backgroundColor: ["#212121", "#edb200"],
				borderColor: ["#212121", "#edb200"]
			}
		]
	};

	const carbohydratesData: ChartData<"doughnut"> = {
		labels: ["carbohydrates left", "carbohydrates"],
		datasets: [
			{
				data: [carbohydrates.max, carbohydrates.current],
				backgroundColor: ["#212121", "#edb200"],
				borderColor: ["#212121", "#edb200"]
			}
		]
	};

	const options = {
		plugins: {
			legend: {
				display: false
			}
		}
	};

	return (
		<div className={styles.statistic}>
			<div className={styles.statisticItem}>
				<Doughnut data={caloriesData} options={options} />
			</div>
			<div className={styles.statisticItem}>
				<Doughnut data={carbohydratesData} options={options} />
			</div>
		</div>
	);
}
