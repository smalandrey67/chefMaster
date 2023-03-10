import { api } from "@/configs/ky.config";

import type { Recipe } from "@/interfaces/Recipe.interface";
import type { Article } from "@/interfaces/Article.interface";

export const HomeScreenService = {
	async getPopularRecipes(): Promise<Recipe[]> {
		const popularRecipes: Recipe[] = await api.get("recipes/popular").json();
		return popularRecipes;
	},

	async getArticles(): Promise<Article[]> {
		const articles: Article[] = await api.get("articles").json();
		return articles;
	}
};
