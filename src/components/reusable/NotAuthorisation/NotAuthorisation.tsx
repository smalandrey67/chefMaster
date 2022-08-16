import { FC } from 'react'

import { Container } from 'assets/styled/Reused.styled'
import { NotAuthorisationEl, NotAuthorisationContent, NotAuthorisationImage, NotAuthorisationTitle, NotAuthorisationLink } from './NotAuthorisation.styled'

import NotAuthorisationWarning from 'assets/images/production/notAuthorisation.webp'

export const NotAuthorisation: FC = () => {
   return (
      <NotAuthorisationEl>
         <Container>
            <NotAuthorisationContent>
               <NotAuthorisationImage src={NotAuthorisationWarning} alt='not authorisation'/>
               <NotAuthorisationTitle>Log in before get into this page</NotAuthorisationTitle>
               <NotAuthorisationLink to='/login'>Log in</NotAuthorisationLink>
            </NotAuthorisationContent>
         </Container> 
      </NotAuthorisationEl> 
   )
}