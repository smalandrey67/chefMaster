import { FC, memo } from 'react'
import { GrFormClose } from 'react-icons/gr'

import { useAppDispatch } from 'hooks/useRedux'
import { useRedirect } from 'hooks/useRedirect'
import { deleteRecipeFromMealPlan } from 'store/slices/mealPlanSlice/mealPlanSlice'

import { DishType } from 'types/MealPlan'
import { MealPlanCloseButton, MealPlanDish } from './MealPlan.styled'
import { LazyImage } from 'components/reusable/LazyImage/LazyImage'

type MealDishProps = DishType & { idWeek: string }

export const MealDish: FC<MealDishProps> = memo(({ idDish, image, title, idWeek }) => {
   const navigateHandler = useRedirect()
   const dispatch = useAppDispatch()

   const deleteRecipeFromMeal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, idDish: string, idWeek: string): void => {
      e.stopPropagation()
      dispatch(deleteRecipeFromMealPlan({ idDish, idWeek }))
   }

   return (
      <MealPlanDish onClick={() => navigateHandler('/details/', idDish)}>
         <LazyImage
            image={image}
            alt={title}
            width='150px'
            height='102px'
            style={{ 'objectFit': 'cover', 'borderRadius': 'var(--br-radius)' }}
         />
         <MealPlanCloseButton onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => deleteRecipeFromMeal(e, idDish, idWeek)}>
            <GrFormClose size='25' />
         </MealPlanCloseButton>
      </MealPlanDish>
   )
})