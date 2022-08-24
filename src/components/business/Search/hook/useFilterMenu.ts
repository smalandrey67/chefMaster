import { UseFilterMenuReturnsType } from 'types/Hooks'

import { useAppDispatch } from 'hooks/useRedux'
import { changeStatusOfFilterMenu } from 'store/slices/filterSlice/filterSlice'

export const useFilterMenu = (): UseFilterMenuReturnsType => {
   const dispatch = useAppDispatch()

   const openFilterMenuHandler = (): void => {
      dispatch(changeStatusOfFilterMenu())
   }

   return openFilterMenuHandler
}