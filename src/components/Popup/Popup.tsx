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
} from './Popup.styled'
import { ErrorMessage, SpinnerWrapper, SearchedWarning } from '../../styled/Reused.styled'


import { Spinner } from '../Spinner/Spinner'

import { IoCloseSharp } from 'react-icons/io5'
import { BiError } from 'react-icons/bi'


type PopupProps = {
   setPopupIsActive: React.Dispatch<React.SetStateAction<boolean>>;
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
      <PopupEl animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} >
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
                  <PopupSubtitleSpan>About:</PopupSubtitleSpan>
                  it's a chat bot where you can find out someting useful for yourself
               </PopupSubtitle>
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


               {status === 'pending' ?
                  <SpinnerWrapper height='15vh'>
                     <Spinner />
                  </SpinnerWrapper>
                  :
                  <PopupAnswer>{answer?.answer}</PopupAnswer>
               }


               {(status === 'fulfilled' && !Object.keys(answer || []).length) &&
                  <SearchedWarning>
                     <BiError />
                     Nothing was found
                  </SearchedWarning>
               }


               {status === 'rejected' && <ErrorMessage>
                  <BiError />
                  {error}
               </ErrorMessage>}

            </PopupContent>
         </PopupBody>
      </PopupEl>
   )
}