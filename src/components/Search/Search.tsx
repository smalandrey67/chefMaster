import { FC } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAppDispatch } from '../../hooks/useRedux'
import { openFilterPopup } from '../../store/slices/filter/filterS'


import { ErrorMessage } from '../../assets/styled/Reused.styled'
import { SearchWrapper, SearchForm, SearchInput, SearchLabel, SearchFilter } from './Search.styled'
import { Filter } from '../Filter/Filter'

import { FiSearch } from 'react-icons/fi'
import { GoSettings } from 'react-icons/go'

import { SearchType } from './Search.types'

export const Search: FC = () => {
    const dispatch = useAppDispatch()

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<SearchType>({ mode: 'onSubmit' })

    const navigate: NavigateFunction = useNavigate()

    const submitHandler: SubmitHandler<SearchType> = (data): void => {
        navigate(`/searched/${data.term.trim().toLocaleLowerCase()}`)

        reset()
    }  

    const filterHandler = (): void => {
        dispatch(openFilterPopup())
    }

    return (
        <SearchWrapper>
            <SearchForm onSubmit={handleSubmit(submitHandler)}>
                
                <SearchLabel>
                    <FiSearch size="18" />
                    <SearchInput 
                        {...register('term', {
                            required: 'Field is required',
                        })}
                        enterKeyHint='search' 
                        autoComplete='off' 
                    />
                </SearchLabel>

                {errors?.term && 
                <ErrorMessage justifyContent='flex-start'>
                    {errors?.term?.message}
                </ErrorMessage>}
            </SearchForm>

            <SearchFilter onClick={filterHandler}>
                <GoSettings style={{marginRight: 5}}/>
                Filter
            </SearchFilter>


            <Filter />
        </SearchWrapper>
    )
} 
