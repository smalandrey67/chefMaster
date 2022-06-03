import { FC } from 'react'

import { Container } from '../../assets/styled/Reused.styled'
import { NotFoundWrapper, NotFoundImageWrapper, NotFoundImage, NotFoundTitle } from './NotFound.styled'

import Error from '../../assets/images/error.png'

export const NotFound: FC = () => {
    return (
        <Container>
            <NotFoundWrapper>
                <NotFoundImageWrapper>
                    <NotFoundImage src={Error} alt='error' /> 
                </NotFoundImageWrapper>
                <NotFoundTitle>We could not find this page</NotFoundTitle>
            </NotFoundWrapper> 
        </Container>
    )
}