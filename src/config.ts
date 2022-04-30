export const getRandomRecipes = () => {
    return `${process.env.REACT_APP_URL}/random?apiKey=${process.env.REACT_APP_KEY}&number=9`
}

