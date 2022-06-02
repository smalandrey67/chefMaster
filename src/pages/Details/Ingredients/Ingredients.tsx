import { FC } from 'react'

import { DetailsType, IngredientsType } from '../../../types/Details'

import { stringCut } from '../../../utils/functions'
import { motionSettings } from '../../../utils/motionOptions'

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
    details: DetailsType | null
}

export const Ingredients: FC<IngredientsProps> = ({ details }) => {

    return (
        <>
            <DetailsIngredientsCount>
                {details?.extendedIngredients.length} items
            </DetailsIngredientsCount>

            <DetailsList {...motionSettings} >
                {details?.extendedIngredients.map(({ id, image, nameClean, amount, unit }: IngredientsType): JSX.Element =>
                    <DetailsIngredientsItem key={id}>
                        <DetailsIngredientsImage
                            src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}
                            alt={nameClean}
                        />
                        <DetailsIngredientsTitle>{stringCut(nameClean, 15)}</DetailsIngredientsTitle>
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

