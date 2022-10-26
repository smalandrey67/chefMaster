export type RecipeResultType = {
  id: number
  title: string
  image: string
}
export type RecipesResponseType = {
  results: RecipeResultType[]
}
export type RandomRecipeResultType = {
  id: number
  title: string
  image: string
  healthScore: number
}
export type RandomRecipesResponseType = {
  recipes: RandomRecipeResultType[]
}
