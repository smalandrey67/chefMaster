import { api } from "@/configs/ky.config";
import type { Recipe } from "@/interfaces/Recipe.interface";

export const HomeScreenService = {
	async getPopularRecipes() {
		const popularRecipes: Recipe[] = await api.get("recipes/popular").json();
		return popularRecipes;
	}
};
