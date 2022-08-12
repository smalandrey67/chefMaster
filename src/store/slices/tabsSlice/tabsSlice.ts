import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TabsState } from './tabsSlice.types'

const initialState: TabsState = {
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