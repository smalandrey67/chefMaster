import styled from 'styled-components'

import { Flex, Paragraph, Button } from 'assets/styled/Reused.styled'

export const AboutWrapper = styled(Flex)`
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const AboutWrapperImage = styled.div`
  margin-bottom: 10px;
  @media (min-width: 768px) {
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
export const AboutChatWrapper = styled(Button)`
  position: fixed;
  bottom: 15px;
  right: 15px;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-categories);
  border-radius: 50%;
`
