import { useCallback } from 'react'
import { SubmitHandler, UseFormReset } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useRedirect } from 'hooks/useRedirect'
import { useOverflow } from 'hooks/useOverflow'
import { changeStatusOfFilterMenu, selectFilterState } from 'store/slices/filterSlice'

import { SearchType } from '../Search.types'
import { UseSearchType } from 'types/Hooks'
import { generateParams } from 'utils/helpers/params.helper'

export const useSearch = (reset: UseFormReset<SearchType>): UseSearchType => {
	const dispatch = useAppDispatch()
	const { isFilterMenuOpen, filterParams } = useAppSelector(selectFilterState)

    useOverflow(isFilterMenuOpen)
	const { navigateHandler } = useRedirect()

    const openFilterMenuHandler = useCallback((): void => {
       dispatch(changeStatusOfFilterMenu())
    }, [dispatch])
    
    const searchSubmitHandler: SubmitHandler<SearchType> = (data): void => {
        const product = data.product.trim().toLowerCase()
        const stringOfParams = generateParams(filterParams)

        navigateHandler('/searched/', `${product}${stringOfParams}`)
        reset()

        if (isFilterMenuOpen) {
            dispatch(changeStatusOfFilterMenu())
        }
    }  

    return {
    	openFilterMenuHandler,
    	searchSubmitHandler
    }
}