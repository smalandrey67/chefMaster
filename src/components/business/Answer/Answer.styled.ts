import styled from 'styled-components'

import { Flex } from 'assets/styled/Reused.styled'

export const AnswerHeader = styled(Flex)`
  justify-content: space-between;
  margin: 0 0 10px 0;
`
export const AnswerExample = styled(Flex)`
  justify-content: space-between;
  margin: 0 0 10px 0;
`
export const AnswerResult = styled(Flex)`
  flex-direction: column;
  margin-top: 5px;
`
export const AnswerImage = styled.img`
  border-radius: var(--br-radius);
  object-fit: contain;
`
