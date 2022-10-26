import { ChangeEvent, Dispatch, SetStateAction, MouseEvent } from 'react'

import { SubmitBlogType } from './Blogs'
import { FilterParamsType } from './Params'

import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { SerializedError } from '@reduxjs/toolkit'
import { SubmitHandler } from 'react-hook-form'
import { SubmitSearchType } from 'components/business/Search/Search.types'

export type UseUploadImageReturnsType = {
  changeFileHandler: (e: ChangeEvent<HTMLInputElement>) => void
  fileName: string
  setFileName: Dispatch<SetStateAction<string>>
  userPhoto: string | undefined
  isLoading: boolean
  errorUploadingImage: FetchBaseQueryError | SerializedError | undefined
}

export type UsePopupReturnsType = {
  popupIsActive: boolean
  popupHandler: () => void
}

export type UseBlogSubmitReturnsType = {
  errorBlog: FetchBaseQueryError | SerializedError | undefined
  submitBlogHandler: (data: SubmitBlogType) => void
}

export type UseBackReturnsType = () => void

export type UseMakeFavoriteReturnsType = () => void

export type UseRedirectReturnsType = (query: string, params?: number | string) => void

export type UseFilterSubmitReturnsType = {
  showResultHandler: () => void
  isDisabledShowResultButton: boolean
}
export type UseFilterOptionReturnsType = (typeId: string, query: keyof FilterParamsType) => void

export type UseSearchType = {
  openFilterMenuHandler: () => void
  searchSubmitHandler: (data: { product: string }) => void
}

export type UseSearchSubmitReturnsType = SubmitHandler<SubmitSearchType>

export type UseFilterMenuReturnsType = () => void

export type UseValidateParamsType = FilterParamsType

export type UseRemoveFromFavoriteReturnsType = (e: MouseEvent<HTMLButtonElement>) => void

export type UseAddIntoWeekPlanReturnsType = () => void

export type UseFileChangeReturnsType = {
  changeFileHandler: (e: ChangeEvent<HTMLInputElement>) => void
  profilePhotoUrl: string | undefined
  errorOfUploadFile: FetchBaseQueryError | SerializedError | undefined
  isLoading: boolean
}

export type UseLogOutReturnsType = () => void

export type UseSubmitUpdatesReturnsType = () => void

export type UseOpenMenuAddingRecipeReturnsType = {
  menuAddingRecipeIndex: number | null
  openMenuAddingRecipeHandler: (index: number) => void
  resetStatusOfMenuAddingRecipe: () => void
}

export type UseSetActiveMealDayReturnsType = (idWeek: string) => void

export type UseDeleteSubMealMenuReturnsType = (subMealId: string) => void

export type UseChangeStatusOfSubMealMenuReturnsType = {
  openSubMealFieldHandler: () => void
  resetStatusOfSubMealField: () => void
  isSubMealMenu: boolean
}

export type UseDeleteRecipeReturnsType = (e: MouseEvent<HTMLButtonElement>, idDish: number) => void

export type UseResetMealPlanReturnsType = () => void
