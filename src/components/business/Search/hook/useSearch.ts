import { SubmitHandler, UseFormReset } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useRedirect } from 'hooks/useRedirect'
import { useOverflow } from 'hooks/useOverflow'
import { changeStatusOfFilterMenu } from 'store/slices/filterSlice/filterSlice'

import { SearchType } from '../Search.types'
import { UseSearchType } from 'types/Hooks'
import { selectIsFilterMenuOpen, selectValidatedParams } from 'store/slices/filterSlice/filterSlice.selectors'

export const useSearch = (reset: UseFormReset<SearchType>): UseSearchType => {
	const dispatch = useAppDispatch()

    const isFilterMenuOpen = useAppSelector(selectIsFilterMenuOpen)
    const { stringOfParams } = useAppSelector(selectValidatedParams)

    useOverflow(isFilterMenuOpen)
	const navigateHandler = useRedirect()

    const openFilterMenuHandler = (): void => {
       dispatch(changeStatusOfFilterMenu())
    }
    
    const searchSubmitHandler: SubmitHandler<SearchType> = (data): void => {
        const product = data.product.trim().toLowerCase()

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