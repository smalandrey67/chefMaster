import { FC } from 'react'

import * as Style from './Main.styled'

import { Recipes } from 'components/business/Recipes/Recipes'
import { About } from 'components/business/About/About'

export const Main: FC = () => {
  return (
    <Style.MainEl>
      <Recipes />
      <About />
    </Style.MainEl>
  )
}
