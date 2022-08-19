import styled from 'styled-components'

export const AboutWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

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

export const AboutImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`

export const AboutDescriptionWrapper = styled.div`
   display: flex; 
   flex-direction: column;
   justify-content: flex-end;
`

