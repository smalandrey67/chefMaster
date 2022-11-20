import { FC } from 'react'

import * as Style from './TemplateName.styled'
import { TemplateNameProps } from './TemplateName.types'

export const TemplateName: FC<TemplateNameProps> = () => (
  <Style.TemplateNameEl>TemplateName Component</Style.TemplateNameEl>
)
