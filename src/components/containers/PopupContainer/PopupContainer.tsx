import { FC } from 'react'

import { Popup, PopupBody, PopupContent } from './PopupContainer.styled'
import { motion } from 'utils/constants/motion.constants'

import { PopupContainerProps } from './PopupContainer.types'

export const PopupContainer: FC<PopupContainerProps> = ({ children }) => {

   return (
      <Popup role='alert' {...motion}>
         <PopupBody>
            <PopupContent>
               {children}
            </PopupContent>
         </PopupBody>
      </Popup>
   )
}