import { FC } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ErrorMessage } from '../../styled/Reused.styled'
import { SearchWrapper, SearchForm, SearchInput, SearchLabel } from './Search.styled'

import { FiSearch } from 'react-icons/fi'

import { SearchType } from '../../types/Search'

export const Search: FC = () => {
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
        </SearchWrapper>
    )
} 