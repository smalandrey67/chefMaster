import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UseBackType } from '../@types/Hooks'

export const useBack = (): UseBackType => {
   const navigate: NavigateFunction = useNavigate()

   const pageBackHandler = (): void => {
      navigate(-1)
   }

   return {
      pageBackHandler
   }
}