import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

export const selectFilterCategories = (state: RootState) => state.filter.filterCategories
export const selectIsFilterMenuOpen = (state: RootState) => state.filter.isFilterMenuOpen
export const selectParams = (state: RootState) => state.filter.filterParams
export const selectIsHamburgerMenu = (state: RootState) => state.filter.isHamburgerMenu

export const selectValidatedParams = createSelector(
   [selectParams],
   (params) => {
      const entriesFromParams = Object.entries(params)

      let stringOfParams = ''
      const isDisabledShowResultButton = !!Object.values(params).length

      for (let i = 0; i < entriesFromParams.length; i++) {
         if (i === 0) {
            stringOfParams += `?${entriesFromParams[i][0]}=${entriesFromParams[i][1]}`
         } else {
            stringOfParams += `&${entriesFromParams[i][0]}=${entriesFromParams[i][1]}`
         }
      }

      return { stringOfParams, isDisabledShowResultButton }
   }
)