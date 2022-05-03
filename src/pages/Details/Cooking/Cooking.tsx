import { FC, useState } from 'react'

import { IDetails } from '../../../models/IDetails'

import {
    DetailsList,
    DetailsCookingItem,
    DetailsCookingHeader,
    DetailsCookingStep,
    DetailsCookingContent,
    DetailsCookingIngredients,
    DetailsCookingIngredientsPhoto,
} from '../../../styled/Basic/Details.styled'

import { BsChevronDown } from 'react-icons/bs'


type StepsProps = {
    details: IDetails | null;
}

export const Cooking: FC<StepsProps> = ({ details }) => {
    const [stepIsActive, setStepIsActive] = useState<number | null>(null)

    const stepHandler = (index: number) => {
        if (index === stepIsActive) {
            return setStepIsActive(null)
        }

        setStepIsActive(index)
    }

    return (
        <DetailsList animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} >
            {details?.analyzedInstructions.map(item =>

                item.steps.map((step, index) =>
                    <DetailsCookingItem key={step.number}>

                        <DetailsCookingHeader onClick={() => stepHandler(index)}>
                            <DetailsCookingStep>Step {step.number}</DetailsCookingStep>
                            <BsChevronDown
                                style={{ transform: stepIsActive === index ? 'rotate(180deg)' : 'rotate(0)' }}
                            />
                        </DetailsCookingHeader>

                        <DetailsCookingContent className={stepIsActive === index ? 'active' : ''}>
                            <DetailsCookingIngredients className={step.ingredients.length ? '' : 'hide'}>
                                {step.ingredients.length && step.ingredients.map(ingredient => 
                                    <DetailsCookingIngredientsPhoto 
                                        key={ingredient.id} 
                                        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                                        alt={ingredient.name} 
                                    />
                                )}
                            </DetailsCookingIngredients>
                            {step.step}
                        </DetailsCookingContent>

                    </DetailsCookingItem>
                )

            )}
        </DetailsList>
    )
}