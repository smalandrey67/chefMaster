import { FC } from 'react'

import { DetailsInfoButton, DetailsInfoWrapper } from '../../../styled/Basic/Details.styled'

type InstructionsProps = {
    activeTab: string,
    tabHandler: (string: string) => void;
}

export const Tabs: FC<InstructionsProps> = ({ activeTab, tabHandler }) => {

    return (
        <DetailsInfoWrapper>

            <DetailsInfoButton 
                className={activeTab === 'instructions' ? 'active' : ''} 
                onClick={() => tabHandler('instructions')}
            >Instructions</DetailsInfoButton>

            <DetailsInfoButton 
                className={activeTab === 'ingredients' ? 'active' : ''} 
                onClick={() => tabHandler('ingredients')}
            >Ingredients</DetailsInfoButton>

        </DetailsInfoWrapper>
    )
}   