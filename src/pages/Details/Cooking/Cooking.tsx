import { FC, useState, Fragment } from 'react'

import { DetailsType, AnalyzedInstructionsType, StepsType, StepsIngredientsType } from '../../../@types/Details'

import { motion } from '../../../utils/constants/motion.constants'
import { stringCut } from '../../../utils/helpers/string.helpers'

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
import { SearchedWarning } from '../../../assets/styled/Reused.styled'

import { BsChevronDown } from 'react-icons/bs'
import { IoFootstepsSharp } from 'react-icons/io5'
import { BiError } from 'react-icons/bi'

type StepsProps = {
    details: DetailsType
}

export const Cooking: FC<StepsProps> = ({ details }) => {
    const [stepIsActive, setStepIsActive] = useState<string | null>(null)

    const stepHandler = (index: string): void => {
        if (index === stepIsActive) {
            return setStepIsActive(null)
        }

        setStepIsActive(index)
    }

    return (
        <DetailsList {...motion} >

            {!details.analyzedInstructions.length ?
                <SearchedWarning>
                    <BiError size={20} />
                    No instructions for cooking
                </SearchedWarning> : null}


            {details.analyzedInstructions.map(({ name, steps }: AnalyzedInstructionsType, index): JSX.Element => (
                <Fragment key={index}> {/* Item name possible could be empty string. There is no another way to give a unique key */}

                    {name.length ?
                        <DetailsCookingSubtitle>
                            <IoFootstepsSharp />
                            {stringCut(name, 40)}
                        </DetailsCookingSubtitle>
                        : null}


                    {steps.map(({ number, step, ingredients }: StepsType): JSX.Element =>
                        <DetailsCookingItem key={number}>
                            <DetailsCookingHeader onClick={(): void => stepHandler(step)}>
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


