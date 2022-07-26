import { SubmitHandler, UseFormReset } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useRedirect } from 'hooks/useRedirect'
import { changeStatusOfFilterMenu, selectFilterState } from 'store/slices/filterSlice'

import { SearchType } from '../Search.types'
import { UseSearchType } from 'types/Hooks'
import { generateParams } from 'utils/helpers/params.helper'

export const useSearch = (reset: UseFormReset<SearchType>): UseSearchType => {
	const dispatch = useAppDispatch()
	const { isFilterMenuOpen, filterParams } = useAppSelector(selectFilterState)

	const { navigateHandler } = useRedirect()

 	const openFilterMenuHandler = (): void => {
        dispatch(changeStatusOfFilterMenu())
    }

    const searchSubmitHandler: SubmitHandler<SearchType> = (data): void => {
        const product = data.product.trim().toLowerCase()
        const stringOfParams = generateParams(filterParams)

        navigateHandler('/searched/', `${product}${stringOfParams}`)
        reset()

        if (isFilterMenuOpen) {
            openFilterMenuHandler()
        }
    }  

    return {
    	openFilterMenuHandler,
    	searchSubmitHandler
    }
}