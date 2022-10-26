import { ToastPosition } from 'react-toastify'

type ToastOptionsType = Readonly<{
  position: ToastPosition
  autoClose: number
  pauseOnHover: boolean
  draggable: boolean
}>

export const toastOptions: ToastOptionsType = {
  position: 'bottom-center',
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true
}
