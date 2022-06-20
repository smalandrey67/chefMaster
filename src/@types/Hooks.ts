import { ChangeEvent } from 'react'

import { StatusEnum } from './Status'
import { UploadImageType } from './UploadImage'
import { AnswerType } from './Answer'
import { SubmitBlogType } from './Blogs'
import { DetailsType } from './Details'

export type UseImageType = {
   imageHandler: (e: ChangeEvent<HTMLInputElement>) => void;
   fileName: string;
   setFileName: React.Dispatch<React.SetStateAction<string>>;
   url: UploadImageType | null;
   status: StatusEnum;
   error: string;
}

export type UsePopupType = {
   popupIsActive: boolean;
   popupHandler: (answer?: AnswerType | null) => void;
}

export type UseSubmitType = {
   submitHandler: (data: SubmitBlogType) => void;
}

export type UseBackType = {
   pageBackHandler: () => void;
}

export type UseFavoritesType = {
   favoritesHandler: (data: DetailsType) => void;
}