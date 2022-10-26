import { ReactNode } from 'react'
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'

export type AuthFormContainerProps<T> = {
  children: ReactNode
  handleSubmit: UseFormHandleSubmit<T>
  submitHandler: SubmitHandler<T>
}
