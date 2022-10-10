import { FC } from 'react'

import * as Style from './PopupContainer.styled'
import { motion } from 'utils/constants/motion.constants'

import { PopupContainerProps } from './PopupContainer.types'

export const PopupContainer: FC<PopupContainerProps> = ({ children }) => {

   return (
      <Style.Popup role='alert' {...motion}>
         <Style.PopupBody>
            <Style.PopupContent>
               {children}
            </Style.PopupContent>
         </Style.PopupBody>
      </Style.Popup>
   )
}