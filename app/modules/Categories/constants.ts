import BurgerIcon from "public/images/burger.svg";
import ColaIcon from "public/images/cola.svg";
import SaladIcon from "public/images/salad.svg";
import DonutsIcon from "public/images/donuts.svg";
import PizzaIcon from "public/images/pizza.svg";
import SeafoodIcon from "public/images/seafood.svg";

import type { CategoriesItems } from "./Categories.interface";

export const categoriesItems: readonly CategoriesItems[] = [
	{
		icon: BurgerIcon,
		label: "burger",
		id: "c552c192-9725-4d67-8517-256a16f364c3"
	},
	{
		icon: ColaIcon,
		label: "cola",
		id: "740f170a-3d7c-4f59-9514-fc8413131776"
	},
	{
		icon: SaladIcon,
		label: "salad",
		id: "740f170a-3d7c-4f59-9514-fc8413131776"
	},
	{
		icon: DonutsIcon,
		label: "donuts",
		id: "740f170a-3d7c-4f59-9514-fc8413131776"
	},
	{
		icon: PizzaIcon,
		label: "pizza",
		id: "8e4b7c25-b597-4a3b-b273-63cd43476f9d"
	},
	{
		icon: SeafoodIcon,
		label: "seafood",
		id: "8e4b7c25-b597-4a3b-b273-63cd43476f9d"
	}
];
