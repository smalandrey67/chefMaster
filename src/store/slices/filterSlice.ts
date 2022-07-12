import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { diets, DietType } from '../../utils/constants/diets.constants'
import { RootState } from '../store';

type FilterState = {
   diets: DietType[];
   isFilterMenuOpen: boolean;
}

const initialState: FilterState = {
   diets,
   isFilterMenuOpen: false
}

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      changeStatusOfFilterMenu: (state): void => {
         state.isFilterMenuOpen = !state.isFilterMenuOpen
      },
      changeActiveOfOption: (state, { payload }: PayloadAction<string>): void => {
         state.diets = state.diets.map(diet => {
            if (diet.id === payload) {
               diet.active = !diet.active
            } else {
               diet.active = false
            }

            return diet
         })
      }
   }
})

export const { changeStatusOfFilterMenu, changeActiveOfOption } = filterSlice.actions
export default filterSlice.reducer

export const selectFilterState = (state: RootState): FilterState => state.filter 