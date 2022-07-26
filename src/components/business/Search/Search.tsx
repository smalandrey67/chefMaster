import { FC, memo } from 'react'
import { useForm } from 'react-hook-form'

import { ErrorMessage } from 'assets/styled/Reused.styled'
import { SearchWrapper, SearchForm, SearchInput, SearchLabel, SearchFilter } from './Search.styled'
import { Filter } from '../Filter/Filter'

import { FiSearch } from 'react-icons/fi'
import { GoSettings } from 'react-icons/go'
import { SearchType } from './Search.types'

import { validation } from 'utils/constants/validation.constants'
import { useSearch } from './hook/useSearch'

export const Search: FC = memo(() => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<SearchType>({ mode: 'onSubmit' })
    const { openFilterMenuHandler, searchSubmitHandler } = useSearch(reset)

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
            <SearchFilter aria-label='filter' onClick={openFilterMenuHandler}>
                <GoSettings size='23' />
            </SearchFilter>
            <Filter />
        </SearchWrapper>
    )
})
