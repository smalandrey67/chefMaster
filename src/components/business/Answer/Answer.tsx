import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AnswerSubtitle, AnswerAnswer, AnswerImage } from './Answer.styled'
import { ErrorMessage, SpinnerWrapper, Spinner, SpecialTitle, Form, Fieldset, Legend, Group, Label, Input, Flex, Button } from 'assets/styled/Reused.styled'

import SpinnerSm from 'assets/images/icons/spinner-sm.svg'
import { PopupContainer } from '../../containers/PopupContainer/PopupContainer'

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
      <PopupContainer>
         <Form onSubmit={handleSubmit(answerSubmitHandler)}>
            <Fieldset>
               <Flex margin='0 0 10px 0' alignItems='center' justify='space-between'>
                  <Legend margin='0' align='left'>Quick answer</Legend>
                  <IoCloseSharp size='23' cursor='pointer' onClick={popupHandler} />
               </Flex>
         
               <AnswerSubtitle>
                  <SpecialTitle fontSize='var(--fs-sm)' fontWeight='var(--fw-bold)'>Example:</SpecialTitle>
                  How much vitamin c is in 2 apples
               </AnswerSubtitle>
               
               <Flex alignItems='center'>
                  <Group margin='0 10px 0 0'>
                     <Label>
                        <Input 
                           {...register('question', validation.question)} placeholder='Question' type='text' flex='0 1 60%' 
                        />
                     </Label>
                     {errors?.question && <ErrorMessage justifyContent='flex-start'>{errors?.question?.message}</ErrorMessage>}
                  </Group>
                  <Button type='submit' name='submit' flex='0 1 40%'>ask</Button>
               </Flex> 
            </Fieldset>
         </Form>

         {/* if isLoading => show spinner */}
         {isLoading ? <SpinnerWrapper height='15vh'>
            <Spinner src={SpinnerSm} alt='spinner' />
         </SpinnerWrapper> : null}

         {/* if success and there are some values into ANSWER => show answer */}
         {isSuccess && Object.keys(data?.answer || []).length ? <AnswerAnswer>
            <AnswerImage src={data?.image} alt='Product' />
            {data?.answer}
         </AnswerAnswer> : null}

         {/* if success and there is no value inside of ANSWER => show warning */}
         {isSuccess && !Object.keys(data?.answer || []).length ? 
            <ErrorNoResult description='Nothing was found' height='23vh' /> 
         : null}

         {error && <ErrorMessage><BiError />Server Error</ErrorMessage>}
      </PopupContainer>
   )
}
