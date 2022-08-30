import { FC, memo } from 'react'
import { IoIosClose } from 'react-icons/io'

import { useRedirect } from 'hooks/useRedirect'
import { useDeleteRecipe } from './hooks/useDeleteRecipe'

import { MealPlanDeleteButton, MealPlanDish } from './MealPlan.styled'
import { LazyImage } from 'components/reusable/LazyImage/LazyImage'
import { MealDishProps } from './MealPlan.types'

export const MealDish: FC<MealDishProps> = memo(({ subMealId, idDish, image, title }) => {
   const navigateHandler = useRedirect()
   const deleteRecipeFromWeekPlanHandler = useDeleteRecipe(subMealId)

   return (
      <MealPlanDish onClick={() => navigateHandler('/details/', idDish)}>
         <LazyImage
            image={image}
            alt={title}
            width='150px'
            height='102px'
            style={{ 'objectFit': 'cover', 'borderRadius': 'var(--br-radius)' }}
         />
         <MealPlanDeleteButton onClick={(e) => deleteRecipeFromWeekPlanHandler(e, idDish)}>
            <IoIosClose color='var(--color-white)' size='30' />
         </MealPlanDeleteButton>
      </MealPlanDish>
   )
})