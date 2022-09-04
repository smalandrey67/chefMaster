import { FC } from 'react'

import { stringCut } from 'utils/helpers/string.helper'
import { motion } from 'utils/constants/motion.constants'

import { LazyImage } from 'components/common/LazyImage/LazyImage'
import { ErrorNoResult } from 'components/common/ErrorNoResult/ErrorNoResult.lazy'

import { List } from 'assets/styled/Reused.styled'
import {
    DetailsIngredientsCount, DetailsIngredientsItem,
    DetailsIngredientsTitle, DetailsIngredientsUnit, DetailsIngredientsWeight
} from './Ingredients.styled'

import { IngredientsProps } from './Ingredients.types'

export const Ingredients: FC<IngredientsProps> = ({ details }) => {

    return (
        <>
            <DetailsIngredientsCount>
                {details?.extendedIngredients.length} items
            </DetailsIngredientsCount>

            <List {...motion} >
                {details?.extendedIngredients.map(({ id, image, nameClean, amount, unit }) =>
                    <DetailsIngredientsItem key={id}>
                        <LazyImage
                            image={`${process.env.REACT_APP_IMAGE_URL}${image}`}
                            alt={nameClean}
                            width='100px'
                            height='100%'
                            style={{ 'objectFit': 'contain' }}
                        />
                        <DetailsIngredientsTitle>{stringCut(nameClean, 13)}</DetailsIngredientsTitle>
                        <DetailsIngredientsUnit>
                            <DetailsIngredientsWeight>{amount}</DetailsIngredientsWeight>
                            {unit}
                        </DetailsIngredientsUnit>
                    </DetailsIngredientsItem>
                )}
            </List>

            {!details?.extendedIngredients.length && <ErrorNoResult description='No ingredients here' height='25vh' />}
        </>
    )
}