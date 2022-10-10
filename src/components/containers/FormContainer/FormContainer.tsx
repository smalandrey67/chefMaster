import { Form, Fieldset } from 'assets/styled/Reused.styled'

import { SubmitSearchType } from 'components/business/Search/Search.types'
import { SubmitSubMealType } from 'pages/MealPlan/SubMealField/SubMealField.types'

import { AuthFormContainerProps } from './FormContainer.types'
import { SubmitUserType, SubmitResetPasswordType } from 'types/Authorisation'
import { SubmitBlogType } from 'types/Blogs'
import { SubmitAnswerType } from 'types/Answer'

export const FormContainer = <T extends 
   SubmitUserType | SubmitAnswerType | SubmitSearchType | SubmitBlogType | SubmitResetPasswordType | SubmitSubMealType>({
   children, handleSubmit, submitHandler }: AuthFormContainerProps<T>
) => {

   return (
      <Form onSubmit={handleSubmit(submitHandler)}>
         <Fieldset>
            {children}
         </Fieldset>
      </Form>
   )
}