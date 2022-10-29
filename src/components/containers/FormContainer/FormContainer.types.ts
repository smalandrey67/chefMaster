import { ReactNode } from 'react'
import { FieldValues, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'

export type AuthFormContainerProps<T extends FieldValues> = {
  children: ReactNode
  handleSubmit: UseFormHandleSubmit<T>
  submitHandler: SubmitHandler<T>
}
