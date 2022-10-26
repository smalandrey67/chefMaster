import { useState } from 'react'
import { UsePopupReturnsType } from 'types/Hooks'

import { useOverflow } from './useOverflow'

export const usePopup = (): UsePopupReturnsType => {
  const [popupIsActive, setPopupIsActive] = useState<boolean>(false)
  useOverflow(popupIsActive)

  const popupHandler = (): void => {
    setPopupIsActive((prevState) => !prevState)
  }

  return {
    popupIsActive,
    popupHandler
  }
}
