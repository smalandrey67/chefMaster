import { FC } from 'react'

import { motion } from 'constants/motion'

import { LazyImage } from 'components/common/LazyImage/LazyImage'
import { ErrorNoResult } from 'components/common/ErrorNoResult/ErrorNoResult.lazy'

import { List } from 'assets/styled/Reused.styled'
import * as Style from './Ingredients.styled'

import { IngredientsProps } from './Ingredients.types'

export const Ingredients: FC<IngredientsProps> = ({ details }) => {
  return (
    <>
      <Style.DetailsIngredientsCount>{details?.extendedIngredients.length} items</Style.DetailsIngredientsCount>

      <List {...motion}>
        {details?.extendedIngredients.map(({ id, image, nameClean, amount, unit }) => (
          <Style.DetailsIngredientsItem key={id}>
            <LazyImage
              image={`${process.env.REACT_APP_IMAGE_URL}${image}`}
              alt={nameClean}
              width='100px'
              height='100%'
              style={{ objectFit: 'contain' }}
            />
            <Style.DetailsIngredientsTitle>{nameClean}</Style.DetailsIngredientsTitle>
            <Style.DetailsIngredientsUnit>
              <Style.DetailsIngredientsWeight>{amount}</Style.DetailsIngredientsWeight>
              {unit}
            </Style.DetailsIngredientsUnit>
          </Style.DetailsIngredientsItem>
        ))}
      </List>

      {!details?.extendedIngredients.length && <ErrorNoResult description='No ingredients here' height='25vh' />}
    </>
  )
}
