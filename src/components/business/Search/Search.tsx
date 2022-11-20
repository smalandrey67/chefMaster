import { FC, memo } from 'react'
import { useForm } from 'react-hook-form'

import * as ReusedStyle from 'assets/styled/Reused.styled'
import * as Style from './Search.styled'
import { Filter } from '../Filter/Filter'

import { FiSearch } from 'react-icons/fi'
import { GoSettings } from 'react-icons/go'
import { SubmitSearchType } from './Search.types'

import { validation } from 'constants/validation'
import { useFilterMenu } from './hook/useFilterMenu'
import { useSearchSubmit } from './hook/useSearchSubmit'

import { FormContainer } from 'components/containers/FormContainer/FormContainer'

export const Search: FC = memo(() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<SubmitSearchType>({ mode: 'onSubmit' })

  const submitSearchHandler = useSearchSubmit(reset)
  const openFilterMenuHandler = useFilterMenu()

  return (
    <Style.SearchWrapper>
      <ReusedStyle.FlexGroup margin='0 10px 0 0' flex='0 1 75%'>
        <FormContainer handleSubmit={handleSubmit} submitHandler={submitSearchHandler}>
          <ReusedStyle.Group height='50px'>
            <ReusedStyle.Label>
              <FiSearch size='18' />
              <ReusedStyle.Input
                {...register('product', validation.product)}
                type='text'
                enterKeyHint='search'
                placeholder='Search'
              />
            </ReusedStyle.Label>
            {errors?.product && (
              <ReusedStyle.ErrorMessage margin='5px 0 0 0' justifyContent='flex-start'>
                {errors?.product?.message}
              </ReusedStyle.ErrorMessage>
            )}
          </ReusedStyle.Group>
        </FormContainer>
      </ReusedStyle.FlexGroup>

      <ReusedStyle.FlexGroup flex='0 1 25%' onClick={openFilterMenuHandler}>
        <Style.SearchFilter aria-label='filter' name='filter-options'>
          <GoSettings size='23' />
        </Style.SearchFilter>
      </ReusedStyle.FlexGroup>
      <Filter />
    </Style.SearchWrapper>
  )
})
