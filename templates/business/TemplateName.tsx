import { FC } from 'react'

import * as Style from './TemplateName.styled'
import { Container } from 'assets/styled/Reused.styled'

import { TemplateNameProps } from './TemplateName.types'

export const TemplateName: FC<TemplateNameProps> = () => (
   <Style.TemplateNameEl>
      <Container>
         TemplateName Component
      </Container>
   </Style.TemplateNameEl>
)