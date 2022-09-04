import { FC, memo } from 'react'

import { selectTabName } from 'store/slices/tabsSlice/tabsSlice.selectors'
import { changeTabName } from 'store/slices/tabsSlice/tabsSlice'
import { useAppSelector, useAppDispatch } from 'hooks/useRedux'

import { DetailsInfoButton, DetailsInfoWrapper } from './Tabs.styled'

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
        <DetailsInfoWrapper>
            <DetailsInfoButton
                className={`${tabName === INSTRUCTIONS && 'active'}`}
                onClick={() => tabHandler(INSTRUCTIONS)}
            >Instructions</DetailsInfoButton>

            <DetailsInfoButton
                className={`${tabName === INGREDIENTS && 'active'}`}
                onClick={() => tabHandler(INGREDIENTS)}
            >Ingredients</DetailsInfoButton>

            <DetailsInfoButton
                className={`${tabName === COOKING && 'active'}`}
                onClick={() => tabHandler(COOKING)}
            >Cooking</DetailsInfoButton>
        </DetailsInfoWrapper>
    )
}