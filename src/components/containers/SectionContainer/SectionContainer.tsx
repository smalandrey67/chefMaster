import { FC } from 'react'

import * as ReusedStyle from 'assets/styled/Reused.styled'
import { SectionContainerProps } from './SectionContainer.types'

export const SectionContainer: FC<SectionContainerProps> = ({ children, motion }) => {
  return (
    <ReusedStyle.Section {...motion}>
      <ReusedStyle.Container>{children}</ReusedStyle.Container>
    </ReusedStyle.Section>
  )
}
