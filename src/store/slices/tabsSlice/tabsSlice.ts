import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TabsState, ChangeTabNamePayload } from './tabsSlice.types'

const initialState: TabsState = {
   tabName: 'instructions'
}

export const tabsSlice = createSlice({
   name: 'tabs',
   initialState,
   reducers: {
      changeTabName: (state, { payload }: PayloadAction<ChangeTabNamePayload>): void => {
         state.tabName = payload.tabName
      }
   }
})

export const { changeTabName } = tabsSlice.actions
export default tabsSlice.reducer