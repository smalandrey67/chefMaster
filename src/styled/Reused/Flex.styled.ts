import styled from 'styled-components'

interface FlexProps {
    align?: string,
    justify?: string,
    direction?: string,
    wrap?: string,
}

export const Flex = styled.div<FlexProps>`
    display: flex;

    align-items: ${({ align }) => align || ''}; 

    justify-content: ${({ justify }) => justify || ''};

    flex-direction: ${({ direction }) => direction || ''};

    flex-wrap: ${({ wrap }) => wrap || ''};
`