import styled from 'styled-components'

import { Flex, Figure, Figcaption } from 'assets/styled/Reused.styled'

export const BlogArticle = styled.article`
   margin-bottom: 30px;
   max-width: 800px;
`
export const BlogWrapper = styled(Flex)`
   flex-direction: column;
   align-items: flex-start;
`
export const BlogHeader = styled(Flex)`
   margin-bottom: 10px;
`
export const BlogHeaderAvatar = styled.div`
   width: 35px;
   height: 35px;
   border-radius: 50%;
   overflow: hidden;
   margin-right: 10px;
`
export const BlogFigure = styled(Figure)`
   margin-bottom: 5px;
   position: relative;
   border-radius: var(--br-radius);
   overflow: hidden;
`
export const BlogFigcaption = styled(Figcaption)`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   position: absolute;
   bottom: 10px;
   right: 10px;
   font-size: var(--fs-sm);
   font-weight: var(--fw-bold);
   color: var(--color-white);
`
