import { FC, memo, Fragment } from 'react'

import * as Style from './Filter.styled'
import { Strong } from 'assets/styled/Reused.styled'

import { selectFilterCategories, selectIsFilterMenuOpen } from 'store/slices/filterSlice/filterSlice.selectors'

import { useAppSelector } from 'hooks/useRedux'
import { useFilterSubmit } from './hook/useFilterSubmit'
import { useFilterOption } from './hook/useFilterOption'

export const Filter: FC = memo(() => {
   const { isDisabledShowResultButton, showResultHandler } = useFilterSubmit()
   const optionHandler = useFilterOption()

   const filterCategories = useAppSelector(selectFilterCategories)
   const isFilterMenuOpen = useAppSelector(selectIsFilterMenuOpen)

   const animateOpacityValue = isFilterMenuOpen ? 1 : 0
   const animateVisibilityValue = isFilterMenuOpen ? 'visible' : 'hidden'

   return (
      <Style.FilterEl
         initial={{ opacity: 0, visibility: 'hidden' }}
         animate={{ opacity: animateOpacityValue, visibility: animateVisibilityValue }}
      >
         <Style.FilterBody>
            {filterCategories.map(({ id, names, type }) =>
               <Fragment key={id}>
                  <Strong fontSize='var(--fs-sm)'>{names.text}</Strong>
                  <Style.FilterWrapper>
                     {type.map(({ typeId, active, name }) =>
                        <Style.FilterOption
                           style={{
                              color: active ? 'var(--color-white)' : 'var(--color-black)',
                              backgroundColor: active ? 'var(--color-categories)' : 'var(--color-white)'
                           }}
                           key={typeId}
                           onClick={() => optionHandler(typeId, names.query)}
                        >{name}</Style.FilterOption>
                     )}
                  </Style.FilterWrapper>
               </Fragment>
            )}
            <Style.FilterShowResult disabled={!isDisabledShowResultButton} onClick={showResultHandler}>
               Show Result
            </Style.FilterShowResult>
         </Style.FilterBody>
      </Style.FilterEl>
   )
})