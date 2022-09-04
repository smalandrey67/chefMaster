import { FC, memo } from 'react'

import { config } from 'config'
import { CookingIngredientProps } from './Cooking.types'

import { LazyImage } from 'components/common/LazyImage/LazyImage'

export const CookingIngredient: FC<CookingIngredientProps> = memo(({ image, name }) => {

   return (
      <LazyImage
         width='60px'
         height='100%'
         style={{ 'objectFit': 'contain' }}
         image={`${config.ingredientsUrl}${image}`}
         alt={name}
      />
   ) 
})