import { ToastPosition } from 'react-toastify'

type ToastOptionsType = {
   position: ToastPosition,
   autoClose: number,
   pauseOnHover: boolean,
   draggable: boolean
}

export const toastOptions: ToastOptionsType = {
   position: 'bottom-center',
   autoClose: 4000,
   pauseOnHover: true,
   draggable: true
}