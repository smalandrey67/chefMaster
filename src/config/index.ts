export const config = {
  firebase: {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
  },
  spoonacular: process.env.REACT_APP_SPOONACULAR_URL,
  mockapi: process.env.REACT_APP_MOCKAPI_URL,
  cloudinary: process.env.REACT_APP_CLOUDINARY,
  apiKey: process.env.REACT_APP_KEY,
  ingredientsUrl: process.env.REACT_APP_IMAGE_URL,
  noUserPhoto: process.env.REACT_APP_NOT_USER_PHOTO
}
