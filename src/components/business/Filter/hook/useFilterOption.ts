import { useAppDispatch } from 'hooks/useRedux'
import { changeActiveOfOption } from 'store/slices/filterSlice/filterSlice'

import { UseFilterOptionReturnsType } from 'types/Hooks'

type OptionHandlerType = UseFilterOptionReturnsType

export const useFilterOption = (): UseFilterOptionReturnsType => {
   const dispatch = useAppDispatch()

   const optionHandler: OptionHandlerType = (typeId, query) => {
      dispatch(changeActiveOfOption(typeId, query))
   }

   return optionHandler
}