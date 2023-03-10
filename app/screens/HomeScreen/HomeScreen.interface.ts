import type { Recipe } from "@/interfaces/Recipe.interface";
import type { Article } from "@/interfaces/Article.interface";

export interface HomeScreenProps {
	popularRecipes?: Recipe[];
	articles?: Article[];
	error?: string;
}
