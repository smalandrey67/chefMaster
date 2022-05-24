import { FC, FormEvent, ChangeEvent, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { quickAnswerAsync } from '../../store/requests/quickAnswerAsync'
import { resetAnswer } from '../../store/slices/quickAnswerSlice'

import {
   PopupEl,
   PopupBody,
   PopupContent,
   PopupHeader,
   PopupHeaderTitle,
   PopupSubtitleSpan,
   PopupSubtitle,
   PopupForm,
   PopupFormBody,
   PopupFormInput,
   PopupFormButton,
   PopupAnswer,
   PopupImage
} from './Popup.styled'
import { ErrorMessage, SpinnerWrapper, SearchedWarning } from '../../styled/Reused.styled'
import { Spinner } from '../Spinner/Spinner'

import { IoCloseSharp } from 'react-icons/io5'
import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../types/Status'
import { motionSettings } from '../../utils/motionSettings'


type PopupProps = {
   setPopupIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Popup: FC<PopupProps> = ({ setPopupIsActive }) => {
   const [question, setQuestion] = useState<string>('')

   const dispatch = useAppDispatch()
   const { answer, status, error } = useAppSelector(state => state.quickAnswerReducer)


   // #popup handler
   const popupCloseHandler = (): void => {
      setPopupIsActive(prevState => !prevState)

      if (answer) {
         dispatch(resetAnswer())
      }
   }

   // #input handler
   const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
      setQuestion(e.target.value)
   }

   // #submit handler
   const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault()

      if (!question) return

      dispatch(quickAnswerAsync(question))
      setQuestion('')
   }

   return (
      <PopupEl {...motionSettings} >
         <PopupBody>
            <PopupContent>

               <PopupHeader>
                  <PopupHeaderTitle>Quick answer</PopupHeaderTitle>
                  <IoCloseSharp
                     size='23'
                     cursor='pointer'
                     onClick={popupCloseHandler}
                  />
               </PopupHeader>

               <PopupSubtitle>
                  <PopupSubtitleSpan>Example:</PopupSubtitleSpan>
                  How much vitamin c is in 2 apples
               </PopupSubtitle>

               <PopupForm onSubmit={submitHandler}>
                  <PopupFormBody>
                     <PopupFormInput onChange={changeHandler} value={question} />
                     <PopupFormButton>ask</PopupFormButton>
                  </PopupFormBody>
               </PopupForm>

               {/* if status PENDING => showed spinner */}
               {status === StatusEnum.PENDING ?
                  <SpinnerWrapper height='15vh'>
                     <Spinner />
                  </SpinnerWrapper>
                  : null}

               {/* if status FULFILLED and there are some values into ANSWER => showed answer */}
               {(status === StatusEnum.FULFILLED && Object.keys(answer || []).length) ?
                  <PopupAnswer>
                     <PopupImage src={answer?.image} alt='Product' />
                     {answer?.answer}
                  </PopupAnswer> 
                  : null}

               {/* if status FULFILLED and there is no value into ANSWER => showed warning */}
               {(status === StatusEnum.FULFILLED && !Object.keys(answer || []).length) ?
                  <SearchedWarning>
                     <BiError />
                     Nothing was found
                  </SearchedWarning> : null}

               {/* if status REJECTED => showed error */}
               {status === StatusEnum.REJECTED && <ErrorMessage>
                  <BiError />
                  {error}
               </ErrorMessage>}

            </PopupContent>
         </PopupBody>
      </PopupEl>
   )
}