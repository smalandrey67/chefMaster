import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import * as StyleReused from 'assets/styled/Reused.styled'
import * as Style from './Answer.styled'

import SpinnerSm from 'assets/images/icons/spinner-sm.svg'

import { ErrorNoResult } from 'components/common/ErrorNoResult/ErrorNoResult.lazy'
import { FormContainer } from 'components/containers/FormContainer/FormContainer'
import { PopupContainer } from 'components/containers/PopupContainer/PopupContainer'

import { BiError } from 'react-icons/bi'
import { IoCloseSharp } from 'react-icons/io5'

import { validation } from 'constants/validation'
import { useLazyGetAnswerQuery } from 'services/RecipesService'
import { AnswerProps, SubmitAnswerType } from 'types/Answer'

export const Answer: FC<AnswerProps> = ({ popupHandler }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<SubmitAnswerType>({ mode: 'onChange' })
  const [fetchAnswer, { data, error, isLoading, isSuccess }] = useLazyGetAnswerQuery()

  const submitAnswerHandler: SubmitHandler<SubmitAnswerType> = (data): void => {
    fetchAnswer(data.question)

    reset()
  }

  return (
    <PopupContainer>
      <FormContainer handleSubmit={handleSubmit} submitHandler={submitAnswerHandler}>
        <Style.AnswerHeader>
          <StyleReused.Legend>Quick answer</StyleReused.Legend>
          <IoCloseSharp onClick={popupHandler} size='23' cursor='pointer' />
        </Style.AnswerHeader>

        <Style.AnswerExample>
          <StyleReused.Strong fontSize='var(--fs-sm)'>Example:</StyleReused.Strong>
          How much vitamins c is in 2 apples
        </Style.AnswerExample>
        <StyleReused.Flex>
          <StyleReused.FlexGroup margin='0 10px 0 0' flex='0 1 70%' height='50px'>
            <StyleReused.Label>
              <StyleReused.Input {...register('question', validation.question)} placeholder='Question' type='text' />
            </StyleReused.Label>
          </StyleReused.FlexGroup>

          <StyleReused.FlexGroup flex='0 1 30%' height='50px'>
            <StyleReused.Button type='submit' name='submit'>
              ask
            </StyleReused.Button>
          </StyleReused.FlexGroup>
        </StyleReused.Flex>

        {errors?.question && (
          <StyleReused.ErrorMessage margin='5px 0 0 0' justifyContent='flex-start'>
            {errors?.question?.message}
          </StyleReused.ErrorMessage>
        )}
      </FormContainer>

      {isLoading && (
        <StyleReused.SpinnerWrapper height='15vh'>
          <StyleReused.Spinner src={SpinnerSm} alt='spinner' />
        </StyleReused.SpinnerWrapper>
      )}

      {isSuccess && Object.keys(data?.answer || {}).length ? (
        <Style.AnswerResult>
          <StyleReused.Group width='150px' height='150px'>
            <StyleReused.Image src={data?.image} alt='Product' objectFit='contain' />
          </StyleReused.Group>
          {data?.answer}
        </Style.AnswerResult>
      ) : null}

      {isSuccess && !Object.keys(data?.answer || {}).length ? (
        <ErrorNoResult description='Nothing was found' height='23vh' />
      ) : null}

      {error && (
        <StyleReused.ErrorMessage margin='5px 0 0 0'>
          <BiError />
          Server Error
        </StyleReused.ErrorMessage>
      )}
    </PopupContainer>
  )
}
