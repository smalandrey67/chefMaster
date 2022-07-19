import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { filterCategories, filterCategoriesTypes, DishType } from '../../utils/constants/filterTypes.constants'
import { RootState } from '../store';

type FilterParamsType = {
   [key: string]: string;
}

type FilterState = {
   filterCategories: filterCategoriesTypes[];
   isFilterMenuOpen: boolean;
   filterParams: FilterParamsType;
} 

const initialState: FilterState = {
   filterCategories,
   isFilterMenuOpen: false,
   filterParams: {}
}

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      changeStatusOfFilterMenu: (state): void => {
         state.isFilterMenuOpen = !state.isFilterMenuOpen
      },
      changeActiveOfOption: (state, { payload }: PayloadAction<{ id: string, query: string}>): void => {
         const groupOfOptions: filterCategoriesTypes | undefined = state.filterCategories.find(item => item.group.query === payload.query)

         if (groupOfOptions) {
            let nameOfActiveElement = {} as DishType

            groupOfOptions.type.forEach(item => {
               if (item.id === payload.id) {
                  item.active = !item.active
                  nameOfActiveElement = item
               } else {
                  item.active = false
               }
            })

            const indexItem: number = state.filterCategories.indexOf(groupOfOptions)
            state.filterCategories[indexItem] = groupOfOptions

            if (nameOfActiveElement.active) {
               state.filterParams[payload.query] = nameOfActiveElement.name
            } else {
               delete state.filterParams[payload.query]
            }
         }
      }
   }
})

export const { changeStatusOfFilterMenu, changeActiveOfOption } = filterSlice.actions
export default filterSlice.reducer

export const selectFilterState = (state: RootState): FilterState => state.filter 