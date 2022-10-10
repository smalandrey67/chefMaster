import { FC } from 'react'

import { Container, Group, Image, Title, LinkEl } from 'assets/styled/Reused.styled'
import * as Style from './NotFound.styled'
import Error from 'assets/images/icons/error.svg'

export const NotFound: FC = () => {

    return (
        <Container>
            <Style.NotFoundWrapper>
                <Group width='140px' height='140px'>
                    <Image src={Error} alt='error' />
                </Group>
                <Title>We could not find this page</Title>
                <LinkEl
                    margin='10px 0 0 0'
                    color='var(--color-links)'
                    textDecoration='underline'
                    to='/'
                >Click: Go back to main page</LinkEl>
            </Style.NotFoundWrapper>
        </Container>
    )
}