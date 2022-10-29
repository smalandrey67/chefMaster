import { RootState } from 'store/store'

export const selectTabName = (state: RootState): string => state.tabs.tabName
