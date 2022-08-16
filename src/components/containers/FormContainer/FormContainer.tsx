import { FC } from 'react'

import { FormContainerProps } from './FormContainer.types'

import { Form, FormFieldset, FormLegend, FormButton } from './FormContainer.styled'

import { SubmitUser } from 'types/Authorisation';
import { SubmitBlogType } from 'types/Blogs';

export const FormContainer = <T extends SubmitUser | SubmitBlogType>({
   children, title, buttonTitle, handleSubmit, submitHandler}: FormContainerProps<T>
) => {
   
   return (
      <Form onSubmit={handleSubmit(submitHandler)}>
         <FormFieldset>
            <FormLegend>{title}</FormLegend>
            {children}
            <FormButton type='submit' name='submit'>{buttonTitle}</FormButton>
         </FormFieldset>
      </Form>
   )
}  