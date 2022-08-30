import { FC } from 'react'

import { MainEl } from './Main.styled'

import { Recipes } from 'components/business/Recipes/Recipes'
import { About } from 'components/business/About/About'

export const Main: FC = () => {
  
    return (
        <MainEl>
            <Recipes />
            <About />
        </MainEl>
    )
}