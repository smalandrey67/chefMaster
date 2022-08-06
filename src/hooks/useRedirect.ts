import { NavigateFunction, useNavigate } from 'react-router-dom'

import { UseRedirectType } from 'types/Hooks'

export const useRedirect = (): UseRedirectType => {
   const navigate: NavigateFunction = useNavigate()
   
   const navigateHandler = (query: string, params: string = ''): void => {
      navigate(`${query}${params}`)
   }

   return navigateHandler
}