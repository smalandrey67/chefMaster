import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store';

import { filterCategories, FilterCategoriesTypes, CategoryType } from 'utils/constants/filterTypes.constants'
import { FilterParamsType } from 'types/Params'

type PayloadActiveType = {
   typeId: string;
   query: keyof FilterParamsType;
}

type FilterState = {
   filterCategories: FilterCategoriesTypes[];
   isFilterMenuOpen: boolean;
   filterParams: FilterParamsType;
   isHamburgerMenu: boolean;
}

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
            // getting a specific group from all existing groups, (src/utils/constants/filterTypes.constants.ts) 
            const groupOfOption = state.filterCategories.find(item => item.group.query === payload.query)

            if (groupOfOption) {
               let activeElement = {} as CategoryType

               // going throw each individual type 
               groupOfOption.type.forEach(item => {
                  if (item.typeId === payload.typeId) {
                     item.active = !item.active
                     activeElement = item
                  } else {
                     item.active = false 
                  }
               })

               // find an index of group among the existing groups
               const indexGroup = state.filterCategories.indexOf(groupOfOption)

               // replace a group that contains only one active element
               state.filterCategories[indexGroup] = groupOfOption

               if (activeElement.active) {

                  // if an active element is true, we put an item inside of object 
                  state.filterParams[payload.query] = activeElement.value
               } else {
                  delete state.filterParams[payload.query]
               }
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
