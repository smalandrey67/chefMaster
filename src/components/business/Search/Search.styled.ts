import styled from 'styled-components'

import { Button, Flex } from '../../../assets/styled/Reused.styled'

export const SearchWrapper = styled(Flex)`
    align-items: flex-start;
    margin-bottom: 5px;
    position: relative;
    @media(min-width: 475px){
        margin-left: auto;
        width: 400px; 
    } 
`
export const SearchFilter = styled(Button)`
    height: 50px; 
`