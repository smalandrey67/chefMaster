import { FC } from 'react'

import { selectTabName, changeTabName } from '../../../store/slices/tabsSlice'
import { useAppSelector, useAppDispatch } from '../../../hooks/useRedux'

import { DetailsInfoButton, DetailsInfoWrapper } from './Tabs.styled'

export const Tabs: FC = () => {
    const dispatch = useAppDispatch()
    const tabName = useAppSelector(selectTabName)

    const tabHandler = (name: string) => {
        dispatch(changeTabName(name))
    }

    return (
        <DetailsInfoWrapper>
            <DetailsInfoButton
                className={`${tabName === 'instructions' && 'active'}`}
                onClick={() => tabHandler('instructions')}
            >Instructions</DetailsInfoButton>

            <DetailsInfoButton
                className={`${tabName === 'ingredients' && 'active'}`}
                onClick={() => tabHandler('ingredients')}
            >Ingredients</DetailsInfoButton>

            <DetailsInfoButton
                className={`${tabName === 'cooking' && 'active'}`}
                onClick={() => tabHandler('cooking')}
            >Cooking</DetailsInfoButton>
        </DetailsInfoWrapper>
    )
}   