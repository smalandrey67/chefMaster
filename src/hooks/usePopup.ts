import { useState, useEffect } from 'react'
import { useAppDispatch } from './useRedux'
import { resetAnswer } from '../store/slices/quickAnswerSlice'

import { AnswerResponseType } from '../types/Answer'

export const usePopup = () => {

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