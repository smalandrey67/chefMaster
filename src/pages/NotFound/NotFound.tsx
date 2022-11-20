import { FC } from 'react'

import * as ReusedStyle from 'assets/styled/Reused.styled'
import * as Style from './NotFound.styled'
import Error from 'assets/images/icons/error.svg'

export const NotFound: FC = () => {
  return (
    <ReusedStyle.Container>
      <Style.NotFoundWrapper>
        <ReusedStyle.Group width='140px' height='140px'>
          <ReusedStyle.Image src={Error} alt='error' />
        </ReusedStyle.Group>
        <ReusedStyle.Title>We could not find this page</ReusedStyle.Title>
        <ReusedStyle.LinkEl margin='10px 0 0 0' color='var(--color-links)' textDecoration='underline' to='/'>
          Click: Go back to main page
        </ReusedStyle.LinkEl>
      </Style.NotFoundWrapper>
    </ReusedStyle.Container>
  )
}
