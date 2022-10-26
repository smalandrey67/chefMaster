import { SubmitHandler, UseFormReset } from 'react-hook-form'

import { UseSearchSubmitReturnsType } from 'types/Hooks'
import { SubmitSearchType } from '../Search.types'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useRedirect } from 'hooks/useRedirect'
import { useOverflow } from 'hooks/useOverflow'

import { selectIsFilterMenuOpen, selectValidatedParams } from 'store/slices/filterSlice/filterSlice.selectors'
import { changeStatusOfFilterMenu } from 'store/slices/filterSlice/filterSlice'

export const useSearchSubmit = (reset: UseFormReset<SubmitSearchType>): UseSearchSubmitReturnsType => {
  const dispatch = useAppDispatch()
  const navigateHandler = useRedirect()

  const isFilterMenuOpen = useAppSelector(selectIsFilterMenuOpen)
  const { stringOfParams } = useAppSelector(selectValidatedParams)

  useOverflow(isFilterMenuOpen)

  const submitSearchHandler: SubmitHandler<SubmitSearchType> = (data): void => {
    const nameOfProduct = data.product.trim().toLowerCase()

    navigateHandler('/searched/', `${nameOfProduct}${stringOfParams}`)
    reset()

    if (isFilterMenuOpen) {
      dispatch(changeStatusOfFilterMenu())
    }
  }

  return submitSearchHandler
}
