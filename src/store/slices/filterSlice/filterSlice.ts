import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { filterCategories, CategoryType } from 'utils/constants/filterTypes.constants'
import { FilterParamsType } from 'types/Params'

import { PayloadActiveType, FilterState } from './filterSlice.types'

const initialState: FilterState = {
   filterCategories,
   isFilterMenuOpen: false,
   filterParams: {} as FilterParamsType,
   isHamburgerMenu: false
}

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      changeStatusOfHamburgerMenu: (state): void => {
         state.isHamburgerMenu = !state.isHamburgerMenu
      },
      changeStatusOfFilterMenu: (state): void => {
         state.isFilterMenuOpen = !state.isFilterMenuOpen
      },
      changeActiveOfOption: {
         reducer: (state, { payload }: PayloadAction<PayloadActiveType>): void => {

            let activeElement = {} as CategoryType

            state.filterCategories = state.filterCategories.map(group => {
               if (group.names.query === payload.query) {
                  return {
                     ...group,
                     type: group.type.map(category => {
                        if (category.typeId === payload.typeId) {
                           activeElement = { ...category, active: !category.active }

                           return { ...category, active: !category.active }
                        }
                        return { ...category, active: false }
                     })
                  }
               }
               return group
            })

            if (activeElement.active) {
               state.filterParams[payload.query] = activeElement.value
            } else {
               delete state.filterParams[payload.query]
            }
         },
         prepare: (typeId: string, query: keyof FilterParamsType) => {
            return {
               payload: { typeId, query }
            }
         }
      }
   }
})

export const { changeStatusOfHamburgerMenu, changeStatusOfFilterMenu, changeActiveOfOption } = filterSlice.actions
export default filterSlice.reducer