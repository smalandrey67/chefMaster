import { FC, memo } from 'react'
import { useForm } from 'react-hook-form'

import { ErrorMessage, FlexGroup, Group, Label, Input } from 'assets/styled/Reused.styled'
import { SearchWrapper, SearchFilter } from './Search.styled'
import { Filter } from '../Filter/Filter'

import { FiSearch } from 'react-icons/fi'
import { GoSettings } from 'react-icons/go'
import { SubmitSearchType } from './Search.types'

import { validation } from 'utils/constants/validation.constants'
import { useFilterMenu } from './hook/useFilterMenu'
import { useSearchSubmit } from './hook/useSearchSubmit'

import { FormContainer } from 'components/containers/FormContainer/FormContainer'

export const Search: FC = memo(() => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<SubmitSearchType>({ mode: 'onSubmit' })

    const submitSearchHandler = useSearchSubmit(reset)
    const openFilterMenuHandler = useFilterMenu()

    return (
        <SearchWrapper>
            <FlexGroup margin='0 10px 0 0' flex='0 1 75%'>
                <FormContainer handleSubmit={handleSubmit} submitHandler={submitSearchHandler}>
                    <Group height='50px'>
                        <Label>
                            <FiSearch size='18' />
                            <Input
                                {...register('product', validation.product)} type='text' enterKeyHint='search' placeholder='Search'
                            />
                        </Label>
                        {errors?.product && <ErrorMessage margin='5px 0 0 0' justifyContent='flex-start'>
                            {errors?.product?.message}
                        </ErrorMessage>}
                    </Group>
                </FormContainer>
            </FlexGroup>

            <FlexGroup flex='0 1 25%' aria-label='filter' onClick={openFilterMenuHandler}>
                <SearchFilter>
                    <GoSettings size='23' />
                </SearchFilter>
            </FlexGroup>
            <Filter />
        </SearchWrapper>
    )
})