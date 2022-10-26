import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UseBackReturnsType } from 'types/Hooks'

export const useBack = (): UseBackReturnsType => {
  const navigate: NavigateFunction = useNavigate()

  const pageBackHandler = (): void => {
    navigate(-1)
  }

  return pageBackHandler
}
