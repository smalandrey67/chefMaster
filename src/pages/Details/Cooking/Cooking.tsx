import { FC, useState, Fragment } from 'react'

import { DetailsType } from '../../../types/Details'

import { DetailsList } from '../Ingredients/Ingredients.styled'
import {
    DetailsCookingSubtitle,
    DetailsCookingItem,
    DetailsCookingHeader,
    DetailsCookingStep,
    DetailsCookingContent,
    DetailsCookingIngredients,
    DetailsCookingIngredientsPhoto,
} from './Cooking.styled'

import { BsChevronDown } from 'react-icons/bs'
import { IoFootstepsSharp } from 'react-icons/io5'

type StepsProps = {
    // #find out why we use null over here
    details: DetailsType | null 
}

export const Cooking: FC<StepsProps> = ({ details }) => {
    const [stepIsActive, setStepIsActive] = useState<string | null>(null)

    const stepHandler = (index: string) => {
        if (index === stepIsActive) {
            return setStepIsActive(null)
        }

        setStepIsActive(index)
    }

    // #Posibly analyzedInstructions could be empty array so take note this and try to fix it
    return (
        <DetailsList animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} >
           

                {details?.analyzedInstructions.map((item, index) => (
                    <Fragment key={index}> {/* Item name posible could be empty string. There is no another way to give a unique key as a index  */}

                        {item.name.length ?
                            <DetailsCookingSubtitle>
                                <IoFootstepsSharp />
                                {item.name}
                            </DetailsCookingSubtitle>
                        : ''}

                        {item.steps.map(step =>
                            <DetailsCookingItem key={step.number}>
                                <DetailsCookingHeader onClick={() => stepHandler(step.step)}>
                                    <DetailsCookingStep>Step {step.number}</DetailsCookingStep>
                                    <BsChevronDown
                                        style={{ transform: stepIsActive === step.step ? 'rotate(180deg)' : 'rotate(0)' }}
                                    />
                                </DetailsCookingHeader>

                                <DetailsCookingContent className={stepIsActive === step.step ? 'active' : ''}>
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
                        )}
                    </Fragment>
                )
                )}

            {/* : ''} */}

        </DetailsList>
    )
}


