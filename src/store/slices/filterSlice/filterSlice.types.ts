import { FilterParamsType } from 'types/Params'
import { FilterCategoriesTypes } from 'constants/filterTypes'

export type PayloadActiveType = {
  typeId: string
  query: keyof FilterParamsType
}

export type FilterState = {
  filterCategories: FilterCategoriesTypes[]
  isFilterMenuOpen: boolean
  filterParams: FilterParamsType
  isHamburgerMenu: boolean
}

export type SelectValidatedParamsReturns = {
  stringOfParams: string
  isDisabledShowResultButton: boolean
}
