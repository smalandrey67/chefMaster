import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store/store'
import { FilterParamsType } from 'types/Params'
import { FilterCategoriesTypes } from 'constants/filterTypes'
import { SelectValidatedParamsReturns } from './filterSlice.types'

export const selectFilterCategories = (state: RootState): FilterCategoriesTypes[] => state.filter.filterCategories
export const selectIsFilterMenuOpen = (state: RootState): boolean => state.filter.isFilterMenuOpen
export const selectParams = (state: RootState): FilterParamsType => state.filter.filterParams
export const selectIsHamburgerMenu = (state: RootState): boolean => state.filter.isHamburgerMenu

export const selectValidatedParams = createSelector([selectParams], (params): SelectValidatedParamsReturns => {
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
})
