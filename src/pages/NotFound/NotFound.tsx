import { FC } from 'react'

import { Container } from '../../assets/styled/Reused.styled'
import { NotFoundWrapper, NotFoundImageWrapper, NotFoundImage, NotFoundTitle, NotFoundRedirect } from './NotFound.styled'
import Error from '../../assets/images/icons/error.svg'

export const NotFound: FC = () => {

    return (
        <Container>
            <NotFoundWrapper>
                <NotFoundImageWrapper>
                    <NotFoundImage src={Error} alt='error' /> 
                </NotFoundImageWrapper>
                <NotFoundTitle>We could not find this page</NotFoundTitle>
                <NotFoundRedirect to='/'>Click: Go back to main page</NotFoundRedirect>
            </NotFoundWrapper> 
        </Container>
    )
}