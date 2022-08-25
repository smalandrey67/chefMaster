import { IconType } from 'react-icons';
import { SubMealDishType } from 'store/slices/mealPlanSlice/mealPlanSlice.types'

export type MealDishProps = SubMealDishType & { idWeek: string }

export type SubMenuProps = {
   idWeek: string;
   path: string;
   title: string;
   Icon: IconType;
}