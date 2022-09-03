import { FC } from 'react'

import { TemplateNameEl } from './TemplateName.styled'
import { Container } from 'assets/styled/Reused.styled'

import { TemplateNameProps } from './TemplateName.types'

export const TemplateName: FC<TemplateNameProps> = () => (
   <TemplateNameEl>
      <Container>
         TemplateName Component
      </Container>
   </TemplateNameEl>
)