import { FC } from 'react'

import { Recipes } from '../../components/Recipes/Recipes'
import { About } from '../../components/About/About'

import { MainEl } from './Main.styled'

export const Main: FC = () => {
    return (
        <MainEl>
            <Recipes />
            <About />
        </MainEl>
    )
}