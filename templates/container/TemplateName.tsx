import { FC } from 'react'

import { TemplateNameEl } from './TemplateName.styled'

import { TemplateNameProps } from './TemplateName.types'

export const TemplateName: FC<TemplateNameProps> = () => (
   <TemplateNameEl>
      TemplateName Component
   </TemplateNameEl>
)