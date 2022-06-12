import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { answerA } from '../../store/slices/answer/answerA'

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
import { ErrorMessage, SpinnerWrapper, Spinner, SearchedWarning, SpecialTitle } from '../../assets/styled/Reused.styled'

import SpinnerSm from '../../assets/images/spinner-sm.svg'
import { Popup } from '../Popup/Popup'

import { IoCloseSharp } from 'react-icons/io5'
import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../@types/Status'
import { AnswerResponseType, AnswerType } from '../../@types/Answer'


type AnswerProps = {
   popupHandler: (answer?: AnswerResponseType | null) => void
}

export const Answer: FC<AnswerProps> = ({ popupHandler }) => {
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm<AnswerType>({ mode: 'onSubmit' })

   const dispatch = useAppDispatch()
   const { answer, status, error } = useAppSelector(state => state.answerR)

   const submitHandler: SubmitHandler<AnswerType> = (data): void => {
      dispatch(answerA(data.question))
      reset()
   }

   return (
      <Popup>

         <AnswerHeader>
            <AnswerHeaderTitle>Quick answer</AnswerHeaderTitle>
            <IoCloseSharp
               size='23'
               cursor='pointer'
               onClick={() => popupHandler(answer)}
            />
         </AnswerHeader>

         <AnswerSubtitle>
            <SpecialTitle fontSize='var(--fs-sm)' fontWeight='var(--fw-bold)'>Example:</SpecialTitle>
            How much vitamin c is in 2 apples
         </AnswerSubtitle>

         <AnswerForm onSubmit={handleSubmit(submitHandler)}>
            <AnswerFormBody>

               <AnswerFormInput
                  {...register('question', {
                     required: 'Field is required',
                  })}
               />

               <AnswerFormButton>ask</AnswerFormButton>
            </AnswerFormBody>

            {errors?.question && 
            <ErrorMessage justifyContent='flex-start'>
               {errors?.question?.message}
            </ErrorMessage>}

         </AnswerForm>

         {/* if status PENDING => showed spinner */}
         {
            status === StatusEnum.PENDING ?
               <SpinnerWrapper height='15vh'>
                  <Spinner src={SpinnerSm} alt='spinner' />
               </SpinnerWrapper>
               : null
         }

         {/* if status FULFILLED and there are some values into ANSWER => showed answer */}
         {
            (status === StatusEnum.FULFILLED && Object.keys(answer || []).length) ?
               <AnswerAnswer>
                  <AnswerImage src={answer?.image} alt='Product' />
                  {answer?.answer}
               </AnswerAnswer>
               : null
         }

         {/* if status FULFILLED and there is no value into ANSWER => showed warning */}
         {
            (status === StatusEnum.FULFILLED && !Object.keys(answer || []).length) ?
               <SearchedWarning>
                  <BiError />
                  Nothing was found
               </SearchedWarning> : null
         }

         {/* if status REJECTED => showed error */}
         {
            status === StatusEnum.REJECTED && <ErrorMessage>
               <BiError />
               {error}
            </ErrorMessage>
         }

      </Popup>
   )
}
