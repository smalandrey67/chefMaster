export const getRandomRecipes = (): string => {
    return `${process.env.REACT_APP_URL}/random?apiKey=${process.env.REACT_APP_KEY}&number=12`
}

export const getCuisineRecipes = (country: string): string => {
    return `${process.env.REACT_APP_URL}/complexSearch?apiKey=${process.env.REACT_APP_KEY}&cuisine=${country}`
}

export const getRecipeInformation = (id: string): string => {
    return `${process.env.REACT_APP_URL}/${id}/information?apiKey=${process.env.REACT_APP_KEY}`
}

export const getSearchedRecipes = (name: string): string => {
    return `${process.env.REACT_APP_URL}/complexSearch?apiKey=${process.env.REACT_APP_KEY}&query=${name}`
}

export const getNutritionRecipe = (id: string): string => {
    return `${process.env.REACT_APP_URL}/${id}/nutritionWidget.json?apiKey=${process.env.REACT_APP_KEY}`
}
