import { IconType } from 'react-icons';
import { DishType } from 'store/slices/mealPlanSlice/mealPlanSlice.types'

export type MealDishProps = DishType & { idWeek: string }

export type SubMenuProps = {
   idWeek: string;
   path: string;
   title: string;
   Icon: IconType;
}