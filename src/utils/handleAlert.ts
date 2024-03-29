import { toast } from 'react-toastify'
import { toastOptions } from 'constants/toastOptions'

type AlertType = 'success' | 'warning' | 'error' | 'default'

export const handleAlert = (message: string, type: AlertType): void => {
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
