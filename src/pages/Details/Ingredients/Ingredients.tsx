import { FC } from 'react'

import { stringCut } from 'utils/helpers/string.helper'
import { motion } from 'utils/constants/motion.constants'

import { LazyImage } from 'components/common/LazyImage/LazyImage'
import { ErrorNoResult } from 'components/common/ErrorNoResult/ErrorNoResult.lazy'

import { List, Span } from 'assets/styled/Reused.styled'
import { DetailsIngredientsCount, DetailsIngredientsItem, DetailsIngredientsTitle, DetailsIngredientsUnit } from './Ingredients.styled'

import { IngredientsType } from 'types/Details'
import { IngredientsProps } from './Ingredients.types'

export const Ingredients: FC<IngredientsProps> = ({ details }) => {

    return (
        <>
            <DetailsIngredientsCount>
                {details?.extendedIngredients.length} items
            </DetailsIngredientsCount>

            <List {...motion} >
                {details?.extendedIngredients.map(({ id, image, nameClean, amount, unit }: IngredientsType): JSX.Element =>
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
                            <Span margin='0 5px 0 0'>{amount}</Span>
                            {unit}
                        </DetailsIngredientsUnit>
                    </DetailsIngredientsItem>
                )}
            </List>

            {!details?.extendedIngredients.length && <ErrorNoResult description='No ingredients here' height='25vh' />}
        </>
    )
}