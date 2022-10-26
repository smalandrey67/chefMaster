import { selectIsFilterMenuOpen, selectValidatedParams } from 'store/slices/filterSlice/filterSlice.selectors'
import { changeStatusOfFilterMenu } from 'store/slices/filterSlice/filterSlice'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useRedirect } from 'hooks/useRedirect'

import { UseFilterSubmitReturnsType } from 'types/Hooks'

export const useFilterSubmit = (): UseFilterSubmitReturnsType => {
  const isFilterMenuOpen = useAppSelector(selectIsFilterMenuOpen)
  const { stringOfParams, isDisabledShowResultButton } = useAppSelector(selectValidatedParams)

  const dispatch = useAppDispatch()
  const navigateHandler = useRedirect()

  const showResultHandler = (): void => {
    navigateHandler('/searched', stringOfParams)

    if (isFilterMenuOpen) {
      dispatch(changeStatusOfFilterMenu())
    }
  }

  return {
    isDisabledShowResultButton,
    showResultHandler
  }
}
