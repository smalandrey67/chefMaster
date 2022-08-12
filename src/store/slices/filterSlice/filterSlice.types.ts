import { FilterParamsType } from 'types/Params'
import { FilterCategoriesTypes } from 'utils/constants/filterTypes.constants'

export type PayloadActiveType = {
   typeId: string;
   query: keyof FilterParamsType;
}

export type FilterState = {
   filterCategories: FilterCategoriesTypes[];
   isFilterMenuOpen: boolean;
   filterParams: FilterParamsType;
   isHamburgerMenu: boolean;
}