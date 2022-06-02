import { ChangeEvent } from 'react'

import { StatusEnum } from './Status'
import { UploadImageType } from './UploadImage'
import { AnswerResponseType } from './Answer'
import { DataType } from './Blogs'


export type UseImageType = {
   imageHandler: (e: ChangeEvent<HTMLInputElement>) => void
   fileName: string
   setFileName: React.Dispatch<React.SetStateAction<string>>
   url: UploadImageType | null
   status: StatusEnum
   error: string
}

export type UsePopupType = {
   popupIsActive: boolean
   popupHandler: (answer?: AnswerResponseType | null) => void
}

export type UseSubmitType = {
   submitHandler: (data: DataType) => void
}