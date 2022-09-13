import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppDispatch } from './useRedux'
import { resetStatusOfMenus } from 'store/slices/filterSlice/filterSlice'

export const useClosePopups = (): void => {
   const dispatch = useAppDispatch()
   const location = useLocation()

   useEffect(() => {
      dispatch(resetStatusOfMenus())
   }, [location, dispatch])
}