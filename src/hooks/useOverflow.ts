import { useEffect } from 'react'

export const useOverflow = (stateOfMenu: boolean): void => {
   useEffect(() => {
      if (stateOfMenu) {
         document.body.style.overflow = 'hidden'

         return
      }

      document.body.style.overflow = 'visible'
   }, [stateOfMenu])
}