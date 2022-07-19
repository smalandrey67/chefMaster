import { FC, memo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux'
import { selectFilterState, changeStatusOfFilterMenu } from '../../../store/slices/filterSlice'
import { useRedirect } from '../../../hooks/useRedirect'

import { ErrorMessage } from '../../../assets/styled/Reused.styled'
import { SearchWrapper, SearchForm, SearchInput, SearchLabel, SearchFilter } from './Search.styled'
import { Filter } from '../Filter/Filter'

import { FiSearch } from 'react-icons/fi'
import { GoSettings } from 'react-icons/go'

import { SearchType } from './Search.types'
import { ParamsArgumentsType } from '../../../@types/Params'

import { validation } from '../../../utils/constants/validation.constants'
import { generateParams } from '../../../utils/helpers/params.helper'

export const Search: FC = memo(() => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<SearchType>({ mode: 'onSubmit' })
    const { navigateHandler } = useRedirect()

    const dispatch = useAppDispatch()
    const { filterParams, isFilterMenuOpen } = useAppSelector(selectFilterState)

    const filterButtonHandler = (): void => {
        dispatch(changeStatusOfFilterMenu())
    }

    const searchSubmitHandler: SubmitHandler<SearchType> = (data): void => {
        const objectOfParams: ParamsArgumentsType = {
            product: data.product,
            type: filterParams.type,
            diet: filterParams.diet
        }

        const { productWithLowerCase, typeParameter, dietParameter } = generateParams(objectOfParams)

        navigateHandler(
            '/searched/', 
            `${productWithLowerCase}${typeParameter}${dietParameter}`
        )
        reset()

        if (isFilterMenuOpen) {
            filterButtonHandler()
        }
    }  

    return (
        <SearchWrapper>
            <SearchForm onSubmit={handleSubmit(searchSubmitHandler)}>
                <SearchLabel>
                    <FiSearch size='18' />
                    <SearchInput 
                        {...register('product', validation.product)}
                        enterKeyHint='search' 
                        autoComplete='off' 
                    />
                </SearchLabel>

                {errors?.product && <ErrorMessage justifyContent='flex-start'>{errors?.product?.message}</ErrorMessage>}
            </SearchForm>

            <SearchFilter aria-label='filter' onClick={filterButtonHandler}>
                <GoSettings size='23' />
            </SearchFilter>

            <Filter />
        </SearchWrapper>
    )
})
