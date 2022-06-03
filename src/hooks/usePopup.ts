import { useState, useEffect } from 'react'
import { useAppDispatch } from './useRedux'
import { resetAnswer } from '../store/slices/answer/answerS'

import { AnswerResponseType } from '../models/Answer'
import { UsePopupType } from '../models/Hooks'

export const usePopup = (): UsePopupType => {

   const [popupIsActive, setPopupIsActive] = useState<boolean>(false)
   const dispatch = useAppDispatch()


   useEffect(() => {
      if (popupIsActive) {
         document.body.style.overflow = 'hidden'

         return
      }

      document.body.style.overflow = 'visible'
   }, [popupIsActive])

   const popupHandler = (answer?: AnswerResponseType | null): void => {
      setPopupIsActive(prevState => !prevState)

      if (answer) {
         dispatch(resetAnswer())
      }
   }

   return {
      popupIsActive,
      popupHandler,
   }
}