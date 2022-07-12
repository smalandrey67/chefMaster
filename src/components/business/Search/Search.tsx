import { FC, memo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAppDispatch } from '../../../hooks/useRedux'
import { useRedirect } from '../../../hooks/useRedirect'
import { changeStatusOfFilterMenu } from '../../../store/slices/filterSlice'

import { ErrorMessage } from '../../../assets/styled/Reused.styled'
import { SearchWrapper, SearchForm, SearchInput, SearchLabel, SearchFilter } from './Search.styled'
import { Filter } from '../Filter/Filter'

import { FiSearch } from 'react-icons/fi'
import { GoSettings } from 'react-icons/go'

import { SearchType } from './Search.types'
import { validation } from '../../../utils/constants/validation.constants'

export const Search: FC = memo(() => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<SearchType>({ mode: 'onSubmit' })

    const { navigateHandler } = useRedirect()
    const dispatch = useAppDispatch()
    
    const searchSubmitHandler: SubmitHandler<SearchType> = (data): void => {
        const productWithLowerCase: string = data.product.trim().toLocaleLowerCase()

        navigateHandler('/searched/', productWithLowerCase)
        reset()
    }  

    const filterButtonHandler = (): void => {
        dispatch(changeStatusOfFilterMenu())
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

            <SearchFilter onClick={filterButtonHandler}>
                <GoSettings size='23' />
            </SearchFilter>
            
            <Filter />
        </SearchWrapper>
    )
})
