import { FC } from 'react'

import { DetailsType, IngredientsType } from '../../../@types/Details'

import { stringCut } from '../../../utils/helpers/string.helpers'
import { motion } from '../../../utils/constants/motion.constants'

import {
    DetailsIngredientsCount,
    DetailsList,
    DetailsIngredientsItem,
    DetailsIngredientsImage,
    DetailsIngredientsTitle,
    DetailsIngredientsUnit,
    DetailsIngredientsUnitSpan
} from './Ingredients.styled'

type IngredientsProps = {
    details: DetailsType
}

export const Ingredients: FC<IngredientsProps> = ({ details }) => {

    return (
        <>
            <DetailsIngredientsCount>
                {details.extendedIngredients.length} items
            </DetailsIngredientsCount>

            <DetailsList {...motion} >
                {details?.extendedIngredients.map(({ id, image, nameClean, amount, unit }: IngredientsType): JSX.Element =>
                    <DetailsIngredientsItem key={id}>
                        <DetailsIngredientsImage
                            src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}
                            alt={nameClean}
                        />
                        <DetailsIngredientsTitle>{stringCut(nameClean, 13)}</DetailsIngredientsTitle>
                        <DetailsIngredientsUnit>
                            <DetailsIngredientsUnitSpan>{amount}</DetailsIngredientsUnitSpan>
                            {unit}
                        </DetailsIngredientsUnit>
                    </DetailsIngredientsItem>
                )}
            </DetailsList>
        </>
    )
}

