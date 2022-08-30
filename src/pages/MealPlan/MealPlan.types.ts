import { IconType } from 'react-icons';

import { SubMealDishType } from 'store/slices/mealPlanSlice/mealPlanSlice.types'
import { UseDeleteSubMealMenuReturnsType } from 'types/Hooks';

export type MealDishProps = SubMealDishType & { subMealId: string; }

export type SubMenuProps = {
   subMealId: string;
   path: string;
   title: string;
   Icon: IconType;
}

export type MealPlanWeekButtonProps = {
   idWeek: string;
   activeDayIdWeek: string;
}

export type UseDeleteSubMealMenuType = (
   setActiveMealDay: (idWeek: string) => void
) => UseDeleteSubMealMenuReturnsType

export type MealPlanWeeksProps = {
   setActiveMealDayHandler: (idWeek: string) => void;
}

export type SubMealMenuFieldProps = {
   isSubMealMenu: boolean;
}

export type SubmitSubMealType = {
   subMealName: string;
}


