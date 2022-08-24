import { FC } from 'react'

import { Container, Title, LinkEl } from 'assets/styled/Reused.styled'
import { NotAuthorisatedContent, NotAuthorisatedImage } from './NotAuthorisated.styled'

import NotAuthorisationWarning from 'assets/images/production/notAuthorisation.webp'

export const NotAuthorisated: FC = () => {

   return (
      <Container>
         <NotAuthorisatedContent>
            <NotAuthorisatedImage src={NotAuthorisationWarning} alt='not authorisation' />
            <Title fontSize='var(--fs-md) ' margin='0 0 10px 0'>Log in before get into this page</Title>
            <LinkEl
               fontSize='var(--fs-md)'
               textDecoration='underline'
               color='var(--color-links)'
               to='/login'
            >Log in</LinkEl>
         </NotAuthorisatedContent>
      </Container>
   )
}