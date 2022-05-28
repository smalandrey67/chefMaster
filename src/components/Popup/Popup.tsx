import { FC, ReactNode } from 'react'

import { PopupEl, PopupBody, PopupContent } from './Popup.styled'

import { motionSettings } from '../../utils/motionSettings'


type PopupProps = {
   children: JSX.Element | ReactNode
}

export const Popup: FC<PopupProps> = ({ children }) => {
   return (
      <PopupEl {...motionSettings}>
         <PopupBody>
            <PopupContent>
               {children}
            </PopupContent>
         </PopupBody>
      </PopupEl>
   )
}