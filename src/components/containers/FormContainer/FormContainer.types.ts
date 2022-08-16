import { ReactNode } from 'react'
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';

export type FormContainerProps<T> = {
   children: ReactNode;
   title: string;
   buttonTitle: string;
   handleSubmit: UseFormHandleSubmit<T>;
   submitHandler: SubmitHandler<T>;
}