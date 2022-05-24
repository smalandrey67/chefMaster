import styled from 'styled-components' 

export const BlogEl = styled.article`
   margin-bottom: 30px;
   max-width: 800px;
`

export const BlogBody = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`

export const BlogTitle = styled.h3`
   font-size: var(--fs-md);
   margin: 0 0 10px 0;
`

export const BlogFigure = styled.figure`
   width: 100%;
   height: 100%;
   margin: 0 0 15px 0;

`

export const BlogFigCaption = styled.figcaption`
   display: flex;
   justify-content: flex-end;
`

export const BlogFigCaptionAuthor = styled.span`
   font-weight: var(--fw-bold);
   margin-left: 5px;
`

export const BlogFigureImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;

   border-radius: var(--br-radius);
`

export const BlogList = styled.ul`
   padding: 0;
   margin: 0;
`

export const BlogItem = styled.li`
   

   &:not(:last-child){
      margin: 0 0 15px 0;
   }
`

export const BlogItemTitle = styled.h4`
   margin: 0 0 5px 0;
`

export const BlogItemDescription = styled.p`
   margin: 0;
`






