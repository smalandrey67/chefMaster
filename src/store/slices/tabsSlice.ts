import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

type tabsState = {
   tabName: string;
}

const initialState: tabsState = {
   tabName: 'instructions'
}

export const tabsSlice = createSlice({
   name: 'tabs',
   initialState,
   reducers: {
      changeTabName: (state, { payload }: PayloadAction<string>): void => {
         state.tabName = payload
      }
   }
})

export const { changeTabName } = tabsSlice.actions
export default tabsSlice.reducer