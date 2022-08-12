import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useRedirect } from 'hooks/useRedirect'

import { UseFilterType } from 'types/Hooks'
import { FilterParamsType } from 'types/Params'

import { changeActiveOfOption, changeStatusOfFilterMenu } from 'store/slices/filterSlice/filterSlice'
import { selectValidatedParams, selectIsFilterMenuOpen } from 'store/slices/filterSlice/filterSlice.selectors'

export const useFilter = (): UseFilterType => {
	const dispatch = useAppDispatch()

	const isFilterMenuOpen = useAppSelector(selectIsFilterMenuOpen)
	const { stringOfParams, disabledShowResultBtn } = useAppSelector(selectValidatedParams)

	const navigateHandler = useRedirect()

	const optionHandler = (typeId: string, query: keyof FilterParamsType): void => {
		dispatch(changeActiveOfOption(typeId, query))
	}

	const showResultHandler = (): void => {
		navigateHandler('/searched', stringOfParams)

		if (isFilterMenuOpen) {
			dispatch(changeStatusOfFilterMenu())
		}
	}

	return {
		disabledShowResultBtn,
		optionHandler,
		showResultHandler
	}
}

