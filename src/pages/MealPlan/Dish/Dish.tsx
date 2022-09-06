import { FC, memo } from 'react'
import { IoIosClose } from 'react-icons/io'

import { useRedirect } from 'hooks/useRedirect'
import { useDeleteRecipe } from '../hooks/useDeleteRecipe'

import { DishEl, DishDeleteButton } from './Dish.styled'
import { LazyImage } from 'components/common/LazyImage/LazyImage'
import { DishProps } from './Dish.types'

export const Dish: FC<DishProps> = memo(({ subMealId, idDish, image, title }) => {
   const navigateHandler = useRedirect()
   const deleteRecipeFromWeekPlanHandler = useDeleteRecipe(subMealId)
   
   return (
      <DishEl onClick={() => navigateHandler('/details/', idDish)}>
         <LazyImage
            image={image}
            alt={title}
            width='150px'
            height='102px'
            style={{ 'objectFit': 'cover', 'borderRadius': 'var(--br-radius)' }}
         />
         <DishDeleteButton onClick={(e) => deleteRecipeFromWeekPlanHandler(e, idDish)}>
            <IoIosClose color='var(--color-white)' size='30' />
         </DishDeleteButton>
      </DishEl>
   )
})