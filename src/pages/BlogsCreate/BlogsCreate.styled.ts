import styled from 'styled-components'
import { Title, Input, Button } from '../../styled/Reused.styled'



export const BlogsCreateEl = styled.section``

export const BlogsCreateBody = styled.div``

export const BlogsCreateTitle = styled(Title)`
   display: flex;
   justify-content: center;
`

export const BlogsCreateForm = styled.form`
   max-width: 500px;
   margin: 0 auto;
`

export const BlogsCreateLabel = styled.label`
   display: flex;
   align-items: center;
   min-height: 50px;
   padding: 10px 15px;
   width: 100%;
   box-shadow: var(--shadow);
   border-radius: var(--br-radius);

   &:not(:last-child){
      margin-bottom: 5px;
   }
`
export const BlogsCreateFieldWrapper = styled.div`
   margin-bottom: 5px;
`

export const BlogsCreateLabelWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   margin-bottom: 5px;
`

export const BlogsCreateLabelFile = styled.label`
   display: flex;
   align-items: center;
   justify-content: center;
   flex: 0 1 150px;
   box-shadow: var(--shadow);
   border-radius: var(--br-radius);
   height: 50px;
   margin-right: 5px;
   font-weight: var(--fw-bold);
   font-size: var(--fs-sm);
`

export const BlogsCreateInput = styled(Input)`
   width: 100%;
   font-weight: var(--fw-semiBold);
`

export const BlogsCreateInputFile = styled.input``

export const BlogsCreateTextarea = styled.textarea`
   border: none;
   resize: none;
   height: 150px;
   width: 100%;
   font-weight: var(--fw-semiBold);
   font-size: var(--fs-md);
   outline: none;

   &::placeholder{
      font-weight: var(--fw-semiBold);
      color: var(--color-black);
   }
`

export const BlogsCreateButton = styled(Button)`
   width: 100%;

   margin: 5px 0 10px 0;

   &:active{
      background-color: var(--color-categories);
      color: var(--color-white);
   }

   @media(min-width: 768px){
      &:hover{
         transition: all 0.5s ease;
         background-color: var(--color-categories);
         color: var(--color-white);
      }
   } 
`

export const BlogsCreatePreview = styled.div`
   border-radius: var(--br-radius);
   overflow: hidden;
`

export const BlogsCreatePreviewImage = styled.img<{ url: any}>`
   width: 100%;

   display: ${({ url }) => typeof url === 'string' ? 'block' :  'none'};
`



