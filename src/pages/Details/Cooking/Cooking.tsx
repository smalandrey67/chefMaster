import { FC, useState, Fragment, memo } from 'react'

import { motion } from 'utils/constants/motion.constants'
import { stringCut } from 'utils/helpers/string.helper'

import { DetailsList } from '../Ingredients/Ingredients.styled'
import {
    DetailsCookingSubtitle, DetailsCookingItem, DetailsCookingHeader, DetailsCookingStep, DetailsCookingContent,
    DetailsCookingIngredients,
    DetailsCookingIngredientsPhoto
} from './Cooking.styled'

import { BsChevronDown } from 'react-icons/bs'
import { IoFootstepsSharp } from 'react-icons/io5'

import { DetailsType, AnalyzedInstructionsType, CookingStepType, StepType } from 'types/Details'
import { ErrorNoResult } from 'components/reusable/ErrorNoResult/ErrorNoResult'

type CookingProps = {
    details: DetailsType | undefined;
}

export const Cooking: FC<CookingProps> = memo(({ details }) => {
    const [stepIsActive, setStepIsActive] = useState<string | null>(null)

    const stepHandler = (index: string): void => {
        if (index === stepIsActive) {
            setStepIsActive(null)

            return
        }

        setStepIsActive(index)
    }

    return (
        <DetailsList {...motion} >
            {details?.analyzedInstructions.map(({ name, steps }: AnalyzedInstructionsType, index: number): JSX.Element => (
                <Fragment key={index}> {/* Item name possible could be the empty string. There is no another way to give an unique key */}
                    {name.length ?
                        <DetailsCookingSubtitle>
                            <IoFootstepsSharp />
                            {stringCut(name, 40)}
                        </DetailsCookingSubtitle> : null}

                    {steps.map(({ number, step, ingredients }: CookingStepType): JSX.Element =>
                        <DetailsCookingItem key={number}>
                            <DetailsCookingHeader onClick={(): void => stepHandler(step)}>
                                <DetailsCookingStep>Step {number}</DetailsCookingStep>
                                <BsChevronDown
                                    style={{ transform: stepIsActive === step ? 'rotate(180deg)' : 'rotate(0)' }}
                                />
                            </DetailsCookingHeader>

                            <DetailsCookingContent className={stepIsActive === step ? 'active' : ''}>
                                <DetailsCookingIngredients className={ingredients.length ? '' : 'hide'}>

                                    {ingredients.length && ingredients.map(({ id, image, name }: StepType): JSX.Element =>
                                        <DetailsCookingIngredientsPhoto
                                            key={id}
                                            src={`${process.env.REACT_APP_IMAGE_URL}${image}`}
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
            
            {!details?.analyzedInstructions.length && <ErrorNoResult description='No instruction for cooking' height='25vh' />}
        </DetailsList>
    )
})


