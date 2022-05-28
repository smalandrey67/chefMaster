import styled from 'styled-components' 

export const BlogEl = styled.article`
   margin-bottom: 30px;
   width: 100%;
   max-width: 800px;
`

export const BlogBody = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`

export const BlogFigure = styled.figure`
   width: 100%;
   height: 200px;
   margin: 0 0 20px 0;

`

export const BlogFigCaption = styled.figcaption`
   display: flex;
   align-items: center;
   justify-content: flex-end;
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








