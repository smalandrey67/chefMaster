import { useState, useEffect } from 'react'
import { useAppDispatch } from './useRedux'
import { resetAnswer } from '../store/slices/answer/answerSlice'

import { AnswerType } from '../@types/Answer'
import { UsePopupType } from '../@types/Hooks'

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

   const popupHandler = (answer?: AnswerType | null): void => {
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