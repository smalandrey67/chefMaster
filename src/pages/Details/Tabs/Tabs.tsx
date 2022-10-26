import { FC } from 'react'

import { selectTabName } from 'store/slices/tabsSlice/tabsSlice.selectors'
import { changeTabName } from 'store/slices/tabsSlice/tabsSlice'
import { useAppSelector, useAppDispatch } from 'hooks/useRedux'

import * as Style from './Tabs.styled'

const INSTRUCTIONS = 'instructions'
const INGREDIENTS = 'ingredients'
const COOKING = 'cooking'

export const Tabs: FC = () => {
  const dispatch = useAppDispatch()
  const tabName = useAppSelector(selectTabName)

  const tabHandler = (tabName: string): void => {
    dispatch(changeTabName({ tabName }))
  }

  return (
    <Style.DetailsInfoWrapper>
      <Style.DetailsInfoButton
        className={`${tabName === INSTRUCTIONS && 'active'}`}
        onClick={() => tabHandler(INSTRUCTIONS)}
      >
        Instructions
      </Style.DetailsInfoButton>

      <Style.DetailsInfoButton
        className={`${tabName === INGREDIENTS && 'active'}`}
        onClick={() => tabHandler(INGREDIENTS)}
      >
        Ingredients
      </Style.DetailsInfoButton>

      <Style.DetailsInfoButton className={`${tabName === COOKING && 'active'}`} onClick={() => tabHandler(COOKING)}>
        Cooking
      </Style.DetailsInfoButton>
    </Style.DetailsInfoWrapper>
  )
}
