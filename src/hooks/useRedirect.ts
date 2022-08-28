import { NavigateFunction, useNavigate } from 'react-router-dom'

import { UseRedirectReturnsType } from 'types/Hooks'

export const useRedirect = (): UseRedirectReturnsType => {
   const navigate: NavigateFunction = useNavigate()

   const navigateHandler = (query: string, params: number | string = ''): void => {
      navigate(`${query}${params}`)
   }

   return navigateHandler
}