import styled from 'styled-components'

import { Flex, Paragraph } from 'assets/styled/Reused.styled'

export const AboutWrapper = styled(Flex)`
   flex-direction: column;
  
   @media(min-width: 768px){
      flex-direction: row;
   }
`
export const AboutWrapperImage = styled.div`
   margin-bottom: 10px;
   @media(min-width: 768px){
      margin: 0;
      flex: 0 0 60%;
   }
`
export const AboutDescriptionWrapper = styled(Flex)`
   flex-direction: column;
   justify-content: flex-end;
`
export const AboutDescriptionParagraph = styled(Paragraph)`
   &:not(:last-child) {
      margin-bottom: 10px;
   }
`