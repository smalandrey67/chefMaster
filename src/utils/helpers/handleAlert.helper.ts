import { toast } from 'react-toastify'
import { toastOptions } from 'utils/constants/toastOptions.constants'

export type AlertType = 'success' | 'warning' | 'error' | 'default'
export type HandleAlertReturnsType = (message: string, type: AlertType) => void;

export const handleAlert = (): HandleAlertReturnsType => {

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