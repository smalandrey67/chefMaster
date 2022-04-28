import { FC } from 'react'

import { SearchInput, SearchBody } from '../../styled/Basic/Search.styled'

import { GoSearch } from 'react-icons/go'

export const Search: FC = () => {
    return (
        <SearchBody>
            <SearchInput autoComplete="off" />
            <GoSearch cursor="pointer" size="25" />
        </SearchBody>
    )
} 