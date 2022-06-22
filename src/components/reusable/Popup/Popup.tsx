import { FC, ReactNode } from 'react'

import { PopupEl, PopupBody, PopupContent } from './Popup.styled'

import { motion } from '../../../utils/constants/motion.constants'

export type PopupProps = {
   children: ReactNode;
}

export const Popup: FC<PopupProps> = ({ children }) => {
   return (
      <PopupEl {...motion}>
         <PopupBody>
            <PopupContent>
               {children}
            </PopupContent>
         </PopupBody>
      </PopupEl>
   )
}