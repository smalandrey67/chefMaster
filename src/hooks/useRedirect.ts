import { NavigateFunction, useNavigate } from 'react-router-dom'

import { UseRedirectType } from '../@types/Hooks'

export const useRedirect = (): UseRedirectType => {
   const navigate: NavigateFunction = useNavigate()
   
   const navigateHandler = (id: number): void => {
      navigate(`/details/${id}`)
   }

   return { 
      navigateHandler
   }
}