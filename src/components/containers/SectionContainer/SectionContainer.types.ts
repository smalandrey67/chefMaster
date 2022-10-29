import { ReactNode } from 'react'

import { MotionType } from 'constants/motion'

export type SectionContainerProps = {
  children: ReactNode
  motion?: MotionType
}
