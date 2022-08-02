import { FC, memo, Fragment } from 'react'

import { FilterEl, FilterBody, FilterWrapper, FilterOption, FilterShowResult } from './Filter.styled'
import { SpecialTitle } from 'assets/styled/Reused.styled'

import { selectFilterState } from 'store/slices/filterSlice'
import { CategoryType, FilterCategoriesTypes } from 'utils/constants/filterTypes.constants'

import { useAppSelector } from 'hooks/useRedux'
import { useFilter } from './hook/useFilter'

export const Filter: FC = memo(() => {
   const { disabledShowResultBtn, optionHandler, showResultHandler } = useFilter()
   const { filterCategories, isFilterMenuOpen } = useAppSelector(selectFilterState)

   return (
      <FilterEl isFilterMenuOpen={isFilterMenuOpen}>
         <FilterBody>
            {filterCategories.map(({ id, group, type }: FilterCategoriesTypes): JSX.Element =>
               <Fragment key={id}>
                  <SpecialTitle fontSize='14px' fontWeight='var(--fw-semiBold)'>{group.text}</SpecialTitle>
                  <FilterWrapper>
                     {type.map(({ typeId, active, name }: CategoryType): JSX.Element =>
                        <FilterOption
                           isFilterMenuOpen={isFilterMenuOpen}
                           key={typeId}
                           active={active}
                           onClick={() => optionHandler(typeId, group.query)}
                        >{name}</FilterOption>
                     )}
                  </FilterWrapper>
               </Fragment>
            )}
            <FilterShowResult disabled={!disabledShowResultBtn}  onClick={showResultHandler}>Show Result</FilterShowResult> 
         </FilterBody>
      </FilterEl>
   )
})
