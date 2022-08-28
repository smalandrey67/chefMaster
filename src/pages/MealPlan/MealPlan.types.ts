import { RefObject } from 'react';
import { IconType } from 'react-icons';

import { SubMealDishType } from 'store/slices/mealPlanSlice/mealPlanSlice.types'
import { UseSubMealFunctionalityReturnsType } from 'types/Hooks';

export type MealDishProps = SubMealDishType & { subMealId: string; idWeek: string }

export type SubMenuProps = {
   subMealId: string;
   idWeek: string;
   path: string;
   title: string;
   Icon: IconType;
}
export type MealPlanWeekButtonProps = {
   idWeek: string;
   activeDayIdWeek: string;
}
export type UseSubMealFunctionalityType = (
   idWeek: string,
   setActiveMealDay: (idWeek: string) => void
) => UseSubMealFunctionalityReturnsType

export type MealPlanWeeksProps = {
   activeDayIdWeek: string;
   setActiveMealDayHandler: (idWeek: string) => void;
}
export type SubMealMenuFieldProps = {
   isSubMealMenu: boolean;
   inputSubMealAddRef: RefObject<HTMLInputElement>;
   addSubMealMenuHandler: () => void;
}


