import { FC } from 'react'

import { DetailsType } from '../../../types/Details'
import { stringCut } from '../../../utils/functions'

import {
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
        <DetailsList animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} >
            {details?.extendedIngredients.map(ingredient =>
                <DetailsIngredientsItem key={ingredient.id}>
                    <DetailsIngredientsImage 
                        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} 
                        alt={ingredient.nameClean}
                    />
                    <DetailsIngredientsTitle>{stringCut(ingredient.nameClean, 15)}</DetailsIngredientsTitle>
                    <DetailsIngredientsUnit>
                        <DetailsIngredientsUnitSpan>{ingredient.amount}</DetailsIngredientsUnitSpan>
                        {ingredient.unit}
                    </DetailsIngredientsUnit>
                </DetailsIngredientsItem>
            )}
        </DetailsList>
    )
}

