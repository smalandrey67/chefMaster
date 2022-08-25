import { FC, memo, MouseEvent } from 'react'
import { IoIosClose } from 'react-icons/io'

import { useAppDispatch } from 'hooks/useRedux'
import { useRedirect } from 'hooks/useRedirect'
import { deleteRecipeFromMealPlan } from 'store/slices/mealPlanSlice/mealPlanSlice'

import { MealPlanDeleteButton, MealPlanDish } from './MealPlan.styled'
import { LazyImage } from 'components/reusable/LazyImage/LazyImage'
import { MealDishProps } from './MealPlan.types'

export const MealDish: FC<MealDishProps> = memo(({ idDish, image, title, idWeek }) => {
   const navigateHandler = useRedirect()
   const dispatch = useAppDispatch()

   const deleteRecipeFromMeal = (e: MouseEvent<HTMLButtonElement>, idDish: number, idWeek: string): void => {
      e.stopPropagation()
      // dispatch(deleteRecipeFromMealPlan({ idDish, idWeek }))
   }

   return (
      <MealPlanDish onClick={() => navigateHandler('/details/', 'idDish')}>
         <LazyImage
            image={image}
            alt={title}
            width='150px'
            height='102px'
            style={{ 'objectFit': 'cover', 'borderRadius': 'var(--br-radius)' }}
         />
         <MealPlanDeleteButton onClick={(e) => deleteRecipeFromMeal(e, idDish, idWeek)}>
            <IoIosClose color='var(--color-white)' size='30' />
         </MealPlanDeleteButton>
      </MealPlanDish>
   )
})