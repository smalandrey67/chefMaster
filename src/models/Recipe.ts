export type RecipeResultType = {
    id: number;
    title: string;
    image: string;
    healthScore: number;
}

export type RecipeType = {
    recipes: RecipeResultType[]
}