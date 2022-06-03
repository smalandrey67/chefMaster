export const getRecipes = (): string => {
   return `/random?apiKey=${process.env.REACT_APP_KEY}&number=12`
}

export const getCuisine = (country: string): string => {
   return `/complexSearch?apiKey=${process.env.REACT_APP_KEY}&cuisine=${country}`
}

export const getDetails = (id: string): string => {
   return `/${id}/information?apiKey=${process.env.REACT_APP_KEY}`
}

export const getSearched = (name: string): string => {
   return `/complexSearch?apiKey=${process.env.REACT_APP_KEY}&query=${name}`
}

export const getNutritions = (id: string): string => {
   return `/${id}/nutritionWidget.json?apiKey=${process.env.REACT_APP_KEY}`
}

export const getAnswer = (question: string): string => {
   const words = question.split(' ')

   return `/quickAnswer?apiKey=${process.env.REACT_APP_KEY}&q=${words.join('+')}`
}

export const getBlogs = (): string => {
   return `${process.env.REACT_APP_BLOGS_URL}`
}

export const uploadImage = (): string => {
   return `${process.env.REACT_APP_BLOGS_UPLOAD_URL}`
}