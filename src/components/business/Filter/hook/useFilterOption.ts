import { useAppDispatch } from 'hooks/useRedux'
import { changeActiveOfOption } from 'store/slices/filterSlice/filterSlice'

import { UseFilterOptionReturnsType } from 'types/Hooks'
import { FilterParamsType } from 'types/Params'

export const useFilterOption = (): UseFilterOptionReturnsType => {
  const dispatch = useAppDispatch()

  const optionHandler = (typeId: string, query: keyof FilterParamsType): void => {
    dispatch(changeActiveOfOption(typeId, query))
  }

  return optionHandler
}
