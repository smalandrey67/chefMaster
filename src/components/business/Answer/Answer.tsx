import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
   AnswerHeader,
   AnswerHeaderTitle,
   AnswerSubtitle,
   AnswerForm,
   AnswerFormBody,
   AnswerFormInput,
   AnswerFormButton,
   AnswerAnswer,
   AnswerImage
} from './Answer.styled'
import { ErrorMessage, SpinnerWrapper, Spinner, SpecialTitle } from 'assets/styled/Reused.styled'

import SpinnerSm from 'assets/images/icons/spinner-sm.svg'
import { Popup } from '../../reusable/Popup/Popup'

import { IoCloseSharp } from 'react-icons/io5'
import { BiError } from 'react-icons/bi'

import { SubmitAnswerType } from 'types/Answer'

import { useLazyGetAnswerQuery } from 'services/RecipesService'
import { validation } from 'utils/constants/validation.constants'
import { ErrorNoResult } from '../../reusable/ErrorNoResult/ErrorNoResult'

type AnswerProps = {
   popupHandler: () => void;
}

export const Answer: FC<AnswerProps> = ({ popupHandler }) => {
   const { register, formState: { errors }, handleSubmit, reset } = useForm<SubmitAnswerType>({ mode: 'onSubmit' })
   const [fetchAnswer, { data, error, isLoading, isSuccess }] = useLazyGetAnswerQuery()

   const answerSubmitHandler: SubmitHandler<SubmitAnswerType> = (data): void => {
      fetchAnswer(data.question)

      reset()
   }

   return (
      <Popup>
         <AnswerHeader>
            <AnswerHeaderTitle>Quick answer</AnswerHeaderTitle>
            <IoCloseSharp // The button which close the popup
               size='23'
               cursor='pointer'
               onClick={popupHandler}
            />
         </AnswerHeader>

         <AnswerSubtitle>
            <SpecialTitle fontSize='var(--fs-sm)' fontWeight='var(--fw-bold)'>Example:</SpecialTitle>
            How much vitamin c is in 2 apples
         </AnswerSubtitle>

         <AnswerForm onSubmit={handleSubmit(answerSubmitHandler)}>
            <AnswerFormBody>
               <AnswerFormInput {...register('question', validation.question)} />
               <AnswerFormButton>ask</AnswerFormButton>
            </AnswerFormBody>

            {errors?.question && <ErrorMessage justifyContent='flex-start'>{errors?.question?.message}</ErrorMessage>}
         </AnswerForm>

         {/* if isLoading => show spinner */}
         {isLoading ? <SpinnerWrapper height='15vh'>
            <Spinner src={SpinnerSm} alt='spinner' />
         </SpinnerWrapper> : null}

         {/* if success and there are some values into ANSWER => show answer */}
         {isSuccess && Object.keys(data?.answer || []).length ? <AnswerAnswer>
            <AnswerImage src={data?.image} alt='Product' />
            {data?.answer}
         </AnswerAnswer> : null}

         {/* if success and there is no value into ANSWER => show warning */}
         {isSuccess && !Object.keys(data?.answer || []).length ? <ErrorNoResult description='Nothing was found' height='23vh' /> : null}

         {error && <ErrorMessage><BiError />Server Error</ErrorMessage>}
      </Popup>
   )
}
