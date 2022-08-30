import { Form, Fieldset } from 'assets/styled/Reused.styled'

import { SubmitUserType, SubmitResetPasswordType } from 'types/Authorisation'
import { SubmitAnswerType } from 'types/Answer'
import { AuthFormContainerProps } from './FormContainer.types'
import { SubmitSearchType } from 'components/business/Search/Search.types'
import { SubmitBlogType } from 'types/Blogs'
import { SubmitSubMealType } from 'pages/MealPlan/MealPlan.types'

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