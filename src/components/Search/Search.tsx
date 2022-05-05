import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SearchForm, SearchInput, SearchLabel } from '../../styled/Basic/Search.styled'

import { FiSearch } from 'react-icons/fi'

export const Search: FC = () => {
    const [term, setTerm] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!term) return

        navigate(`/searched/${term.trim().toLocaleLowerCase()}`)
        setTerm('')
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value)
    }


    return (
        <SearchForm onSubmit={submitHandler}>
            <SearchLabel>
                <FiSearch size="18" />
                <SearchInput value={term} onChange={changeHandler} autoComplete="off" />
            </SearchLabel>
        </SearchForm>
    )
} 