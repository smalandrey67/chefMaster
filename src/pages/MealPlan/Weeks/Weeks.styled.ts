import styled, { css } from 'styled-components'

import { Button } from 'assets/styled/Reused.styled'
import { WeekButtonProps } from './Weeks.types'

export const WeekButton = styled(Button)<WeekButtonProps>`
   font-size: var(--fs-sl);
   font-weight: var(--fw-bold);
   box-shadow: var(--shadow-alternative);
 
   ${props => {
      if (props.idWeek === props.activeDayIdWeek) {
         return css`
            background-color: var(--color-categories);
            color: var(--color-white);
         `
      }
   }}
`