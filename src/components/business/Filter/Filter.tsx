import { FC, memo, Fragment } from 'react'

import { FilterEl, FilterBody, FilterWrapper, FilterOption, FilterShowResult } from './Filter.styled'
import { SpecialTitle } from '../../../assets/styled/Reused.styled'

import { changeActiveOfOption, changeStatusOfFilterMenu, selectFilterState } from '../../../store/slices/filterSlice'
import { DishType, filterCategoriesTypes } from '../../../utils/constants/filterTypes.constants'
import { generateParams } from '../../../utils/helpers/params.helper'

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux'
import { useRedirect } from '../../../hooks/useRedirect'

import { ParamsArgumentsType } from '../../../@types/Params'

export const Filter: FC = memo(() => {
   const dispatch = useAppDispatch()
   const { navigateHandler } = useRedirect()

   const { filterCategories, isFilterMenuOpen, filterParams } = useAppSelector(selectFilterState)

   const optionsHandler = (id: string, query: string): void => {
      dispatch(changeActiveOfOption({ id, query }))
   }

   const showResultHandler = (): void => {
      const objectOfParams: ParamsArgumentsType = {
         type: filterParams.type,
         diet: filterParams.diet
      }

      const { typeParameter, dietParameter } = generateParams(objectOfParams)

      navigateHandler(
         '/searched',
         `${typeParameter}${dietParameter}`
      )
      dispatch(changeStatusOfFilterMenu())
   }

   return (
      <FilterEl isFilterMenuOpen={isFilterMenuOpen}>
         <FilterBody>
            {filterCategories.map(({ id, group, type }: filterCategoriesTypes): JSX.Element =>
               <Fragment key={id}>
                  <SpecialTitle fontSize='14px' fontWeight='var(--fw-semiBold)'>{group.text}</SpecialTitle>
                  <FilterWrapper>
                     {type.map(({ id, active, name }: DishType): JSX.Element =>
                        <FilterOption
                           isFilterMenuOpen={isFilterMenuOpen}
                           key={id}
                           active={active}
                           onClick={() => optionsHandler(id, group.query)}
                        >{name}</FilterOption>
                     )}
                  </FilterWrapper>
               </Fragment>
            )}

            <FilterShowResult onClick={showResultHandler}>Show Result</FilterShowResult> 
         </FilterBody>
      </FilterEl>
   )
})