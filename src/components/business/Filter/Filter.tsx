import { FC, memo } from 'react'

import { FilterEl, FilterBody, FilterWrapper, FilterOption } from './Filter.styled'
import { SpecialTitle } from '../../../assets/styled/Reused.styled'

import { changeStatusOfFilterMenu, changeActiveOfOption, selectFilterState } from '../../../store/slices/filterSlice'
import { DietType } from '../../../utils/constants/diets.constants'

import { useRedirect } from '../../../hooks/useRedirect'
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux'

export const Filter: FC = memo(() => {
   const dispatch = useAppDispatch()
   const { diets, isFilterMenuOpen } = useAppSelector(selectFilterState)

   const { navigateHandler } = useRedirect()

   const optionDietHandler = (diet: string, id: string): void => {
      navigateHandler('/searched/', diet)

      dispatch(changeActiveOfOption(id))
      dispatch(changeStatusOfFilterMenu())
   }  

   return (
      <FilterEl isFilterMenuOpen={isFilterMenuOpen}>
         <FilterBody>
            <SpecialTitle fontSize='17px' fontWeight='var(--fw-semiBold)'>Diets</SpecialTitle>
            <FilterWrapper>
               {diets.map(({ diet, active, id }: DietType): JSX.Element =>
                  <FilterOption
                     isFilterMenuOpen={isFilterMenuOpen}
                     active={active}
                     key={id}
                     onClick={() => optionDietHandler(diet, id)}
                  >
                     {diet}
                  </FilterOption>
               )}
            </FilterWrapper>
         </FilterBody>
      </FilterEl>
   )
})
