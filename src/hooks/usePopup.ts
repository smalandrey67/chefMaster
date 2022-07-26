import { useState, useEffect } from 'react'
import { UsePopupType } from 'types/Hooks'

export const usePopup = (): UsePopupType => {
   const [popupIsActive, setPopupIsActive] = useState<boolean>(false)

   useEffect(() => {
      if (popupIsActive) {
         document.body.style.overflow = 'hidden'

         return
      }

      document.body.style.overflow = 'visible'
   }, [popupIsActive])

   const popupHandler = (): void => {
      setPopupIsActive(prevState => !prevState)
   }

   return {
      popupIsActive,
      popupHandler
   }
}