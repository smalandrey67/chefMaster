import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { openFilterPopup, changeStatusActive } from '../../store/slices/filter/filterSlice'

import { FilterEl, FilterBody, FilterWrapper, FilterOption } from './Filter.styled'
import { SpecialTitle } from '../../assets/styled/Reused.styled'

import { DietType } from '../../utils/constants/diets.constants'

export const Filter: FC = () => {
   const dispatch = useAppDispatch()
   const { diets, isFilterOpen } = useAppSelector(state => state.filter)

   const navigate = useNavigate()

   const optionHandler = (diet: string, id: string): void => {
      navigate(`/searched/${diet}`)

      dispatch(changeStatusActive(id))
      dispatch(openFilterPopup())
   }  

   return (
      <FilterEl isFilterOpen={isFilterOpen}>
         <FilterBody>
            <SpecialTitle fontSize='17px' fontWeight='var(--fw-semiBold)'>Diets</SpecialTitle>
            <FilterWrapper>
               {diets.map(({ diet, active, id }: DietType): JSX.Element =>
                  <FilterOption
                     isFilterOpen={isFilterOpen}
                     active={active}
                     key={id}
                     onClick={() => optionHandler(diet, id)}
                  >
                     {diet}
                  </FilterOption>
               )}
            </FilterWrapper>
         </FilterBody>
      </FilterEl>
   )
}
