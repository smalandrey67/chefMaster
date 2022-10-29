import { FC } from 'react'

import * as Style from './Main.styled'

import { RecipesCarousel } from 'components/business/RecipesCarousel/RecipesCarousel'
import { About } from 'components/business/About/About'

export const Main: FC = () => {
  return (
    <Style.MainEl>
      <RecipesCarousel />
      <About />
    </Style.MainEl>
  )
}
