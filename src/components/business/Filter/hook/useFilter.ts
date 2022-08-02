import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useRedirect } from 'hooks/useRedirect'

import { UseFilterType } from 'types/Hooks'
import { FilterParamsType } from 'types/Params'
import { generateParams } from 'utils/helpers/params.helper'

import { changeActiveOfOption, changeStatusOfFilterMenu, selectFilterState } from 'store/slices/filterSlice'

export const useFilter = (): UseFilterType => {
	const dispatch = useAppDispatch()
	const { isFilterMenuOpen, filterParams } = useAppSelector(selectFilterState)

	const { navigateHandler } = useRedirect()

	const disabledShowResultBtn = !!Object.values(filterParams).length

	const optionHandler = (typeId: string, query: keyof FilterParamsType): void => {
		dispatch(changeActiveOfOption(typeId, query))
	}

	const showResultHandler = (): void => {
		const stringOfParams = generateParams(filterParams)

		navigateHandler('/searched', `${stringOfParams}`)

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

