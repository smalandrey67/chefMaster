import { FC } from 'react'

import * as Style from './TemplateName.styled'
import * as ReusedStyle from 'assets/styled/Reused.styled'

import { TemplateNameProps } from './TemplateName.types'

export const TemplateName: FC<TemplateNameProps> = () => (
  <Style.TemplateNameEl>
    <ReusedStyle.Container>TemplateName Component</ReusedStyle.Container>
  </Style.TemplateNameEl>
)
