import { FC } from 'react'

import { DetailsType, IngredientsType } from '../../../@types/Details'
import { stringCut } from '../../../utils/helpers/string.helper'
import { motion } from '../../../utils/constants/motion.constants'

import { LazyImage } from '../../../components/reusable/LazyImage/LazyImage'
import { ErrorNoResult } from '../../../components/reusable/ErrorNoResult/ErrorNoResult'
import { DetailsIngredientsCount, DetailsList, DetailsIngredientsItem, DetailsIngredientsTitle,
    DetailsIngredientsUnit,
    DetailsIngredientsUnitSpan
} from './Ingredients.styled'

type IngredientsProps = {
    details: DetailsType | undefined;
}

export const Ingredients: FC<IngredientsProps> = ({ details }) => {

    return (
        <>
            <DetailsIngredientsCount>
                {details?.extendedIngredients.length} items
            </DetailsIngredientsCount>

            <DetailsList {...motion} >
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
                            <DetailsIngredientsUnitSpan>{amount}</DetailsIngredientsUnitSpan>
                            {unit}
                        </DetailsIngredientsUnit>
                    </DetailsIngredientsItem>
                )}
            </DetailsList>
            
            {!details?.extendedIngredients.length && <ErrorNoResult description='No ingredients here' height='25vh' />}
        </>
    )
}

