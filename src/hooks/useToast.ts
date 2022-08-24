import { toast } from 'react-toastify'
import { toastOptions } from 'utils/constants/toastOptions.constants'

import { UseToastReturnsType } from 'types/Hooks'

export type AlertType = 'success' | 'warning' | 'error' | 'default'

export const useToast = (): UseToastReturnsType => {

   const showAlertHandler = (message: string, type: AlertType): void => {
      switch (type) {
         case 'success':
            toast.success(message, toastOptions)
            break
         case 'warning':
            toast.warning(message, toastOptions)
            break
         case 'error':
            toast.error(message, toastOptions)
            break
         default:
            toast(message, toastOptions)
      }
   }

   return showAlertHandler
}