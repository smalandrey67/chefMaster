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

export const BlogHeader = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 10px;
`

export const BlogHeaderAvatar = styled.div`
   width: 35px;
   height: 35px;
   border-radius: 50%;
   overflow: hidden;
   margin-right: 10px;
` 

export const BlogFigure = styled.figure`
   width: 100%;
   height: 200px;
   margin: 0 0 25px 0;


   @media(min-width: 768px){
      height: 500px;
   }

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








