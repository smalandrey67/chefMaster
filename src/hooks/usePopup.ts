import { useState } from 'react'
import { UsePopupType } from 'types/Hooks'

import { useOverflow } from './useOverflow'

export const usePopup = (): UsePopupType => {
   const [popupIsActive, setPopupIsActive] = useState<boolean>(false)

   useOverflow(popupIsActive)

   const popupHandler = (): void => {
      setPopupIsActive(prevState => !prevState)
   }

   return {
      popupIsActive,
      popupHandler
   }
}