import { ChangeEvent, Dispatch, SetStateAction } from 'react'

import { UploadImageType } from './UploadImage'
import { SubmitBlogType } from './Blogs'
import { DetailsType } from './Details'
import { ResultParamsType, FilterParamsType } from './Params' 

import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { SerializedError } from '@reduxjs/toolkit'

export type UseImageType = {
   changeFileHandler: (e: ChangeEvent<HTMLInputElement>) => void;
   fileName: string;
   setFileName: Dispatch<SetStateAction<string>>;
   image: UploadImageType | undefined;
   isLoading: boolean;
   errorImage: FetchBaseQueryError | SerializedError | undefined;
}

export type UsePopupType = {
   popupIsActive: boolean;
   popupHandler: () => void;
}

export type UseSubmitType = {
   errorBlog: FetchBaseQueryError | SerializedError | undefined;
   submitHandler: (data: SubmitBlogType) => void;
}

export type UseBackType = {
   pageBackHandler: () => void;
}

export type UseFavoritesType = {
   favoritesHandler: (data: DetailsType | undefined) => void;
}

export type UseRedirectType = {
   navigateHandler: (query: string, params?: string | number) => void;
}

export type UseFilterType = {
   optionHandler: (id: string, query: keyof FilterParamsType) => void;
   showResultHandler: () => void;
}

export type UseSearchType = {
   openFilterMenuHandler: () => void;
   searchSubmitHandler: (data: { product: string }) => void;
}

export type UseValidateParamsType = {
   params: ResultParamsType; 
}