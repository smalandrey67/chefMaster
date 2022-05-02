import { FC } from 'react'

import { IDetails } from '../../../models/IDetails'
import { stringCut } from '../../../utils/stringCut'

import {
    DetailsIngredients,
    DetailsIngredientsItem,
    DetailsIngredientsImage,
    DetailsIngredientsTitle,
    DetailsIngredientsUnit,
    DetailsIngredientsUnitSpan
} from '../../../styled/Basic/Details.styled'

type IngredientsProps = {
    details: IDetails | null
}

export const Ingredients: FC<IngredientsProps> = ({ details }) => {

    return (
        <DetailsIngredients
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {details?.extendedIngredients.map(ingredient =>
                <DetailsIngredientsItem key={ingredient.id}>
                    <DetailsIngredientsImage src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} />
                    <DetailsIngredientsTitle>{stringCut(ingredient.nameClean, 15)}</DetailsIngredientsTitle>
                    <DetailsIngredientsUnit>
                        <DetailsIngredientsUnitSpan>{ingredient.amount}</DetailsIngredientsUnitSpan>
                        {ingredient.unit}
                    </DetailsIngredientsUnit>
                </DetailsIngredientsItem>
            )}
        </DetailsIngredients>
    )
}

