import { FC } from 'react'

import { Container } from '../../styled/Reused.styled'
import { NotFoundWrapper, NotFoundImageWrapper, NotFoundImage, NotFoundTitle } from './NotFound.styled'

import Error from '../../assets/error.png'

export const NotFound: FC = () => {
    return (
        <Container>
            <NotFoundWrapper>
                <NotFoundImageWrapper>
                    <NotFoundImage src={Error}/> 
                </NotFoundImageWrapper>
                <NotFoundTitle>We could not find this page</NotFoundTitle>
            </NotFoundWrapper> 
        </Container>
    )
}