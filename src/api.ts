import axios from 'axios'

export const instance = axios.create({
   baseURL: process.env.REACT_APP_URL,

   headers: {
      'Content-Type': 'application/json'
   }
})


