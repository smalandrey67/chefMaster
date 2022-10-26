import { ReactNode } from 'react'

import { MotionType } from 'utils/constants/motion.constants'

export type SectionContainerProps = {
  children: ReactNode
  motion?: MotionType
}
