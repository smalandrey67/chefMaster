export const getRandomRecipes = () => {
    return `${process.env.REACT_APP_URL}/random?apiKey=${process.env.REACT_APP_KEY}&number=9`
}

export const getCuisineRecipes = (country: string) => {
    return `${process.env.REACT_APP_URL}/complexSearch?apiKey=${process.env.REACT_APP_KEY}&cuisine=${country}`
}

