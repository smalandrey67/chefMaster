import { FC, useState, Fragment } from 'react'

import { DetailsType, AnalyzedInstructionsType, StepsType, StepsIngredientsType } from '../../../types/Details'

import { motionSettings } from '../../../utils/motionSettings'
import { stringCut } from '../../../utils/functions'

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
    
    return (
        <DetailsList {...motionSettings} >

            {details?.analyzedInstructions.map(({ name, steps }: AnalyzedInstructionsType, index): JSX.Element => (
                <Fragment key={index}> {/* Item name posible could be empty string. There is no another way to give a unique key */}

                    {name.length ?
                        <DetailsCookingSubtitle>
                            <IoFootstepsSharp />
                            {stringCut('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, mollitia exercitationem doloremque distinctio quam et, culpa error facere quibusdam ex in, deleniti quos repellat beatae. Quo illo neque architecto quaerat magnam quod sequi, eveniet eum consequatur laborum exercitationem harum vero nulla molestias vel ullam? Rem hic cumque ex sint possimus?', 40)}
                        </DetailsCookingSubtitle>
                    : ''}


                    {steps.map(({ number, step, ingredients }: StepsType): JSX.Element =>
                        <DetailsCookingItem key={number}>
                            <DetailsCookingHeader onClick={() => stepHandler(step)}>
                                <DetailsCookingStep>Step {number}</DetailsCookingStep>
                                <BsChevronDown
                                    style={{ transform: stepIsActive === step ? 'rotate(180deg)' : 'rotate(0)' }}
                                />
                            </DetailsCookingHeader>

                            <DetailsCookingContent className={stepIsActive === step ? 'active' : ''}>
                                <DetailsCookingIngredients className={ingredients.length ? '' : 'hide'}>

                                    {ingredients.length && ingredients.map(({ id, image, name }: StepsIngredientsType): JSX.Element =>
                                        <DetailsCookingIngredientsPhoto
                                            key={id}
                                            src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}
                                            alt={name}
                                        />
                                    )}

                                </DetailsCookingIngredients>
                                {step}
                            </DetailsCookingContent>
                        </DetailsCookingItem>
                    )}
                </Fragment>
            ))}
        </DetailsList>
    )
}


