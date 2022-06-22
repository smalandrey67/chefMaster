import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { diets, DietType } from '../../../utils/constants/diets.constants'

type FilterState = {
   diets: DietType[];
   isFilterOpen: boolean;
}

const initialState: FilterState = {
   diets,
   isFilterOpen: false
}

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      openFilterPopup: (state): void => {
         state.isFilterOpen = !state.isFilterOpen
      },

      changeStatusActive: (state, { payload }: PayloadAction<string>): void => {
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

export const { openFilterPopup, changeStatusActive } = filterSlice.actions
export default filterSlice.reducer