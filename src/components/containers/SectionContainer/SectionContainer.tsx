import { FC } from 'react'

import { Container, Section } from 'assets/styled/Reused.styled'
import { SectionContainerProps } from './SectionContainer.types'

export const SectionContainer: FC<SectionContainerProps> = ({ children, motion }) => {
   return (
      <Section {...motion}>
         <Container>
            {children}
         </Container>
      </Section>
   )
}