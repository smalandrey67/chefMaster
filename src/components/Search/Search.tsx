import { FC } from 'react'

import { SearchInput, SearchLabel } from '../../styled/Basic/Search.styled'

import { FiSearch } from 'react-icons/fi'

export const Search: FC = () => {
    return (
        <SearchLabel>
            <FiSearch size="18" />
            <SearchInput autoComplete="off" />
        </SearchLabel>
    )
} 