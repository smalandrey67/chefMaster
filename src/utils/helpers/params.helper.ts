import { FilterParamsType } from 'types/Params'

export const generateParams = (params: FilterParamsType): string => {
   const entriesFromParams = Object.entries(params)
   
   let stringOfParams = ''

   for (let i = 0; i < entriesFromParams.length; i++) {
      if (i === 0) {
         stringOfParams += `?${entriesFromParams[i][0]}=${entriesFromParams[i][1]}`
      } else {
         stringOfParams += `&${entriesFromParams[i][0]}=${entriesFromParams[i][1]}`
      }
   }

   return stringOfParams
}