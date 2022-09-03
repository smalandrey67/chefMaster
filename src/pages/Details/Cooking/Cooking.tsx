import { FC, useState, Fragment, memo } from 'react'
import { nanoid } from '@reduxjs/toolkit'

import { motion } from 'utils/constants/motion.constants'
import { stringCut } from 'utils/helpers/string.helper'
import { config } from 'config'

import { List, Span, Image } from 'assets/styled/Reused.styled'
import {
    DetailsCookingSubtitle, DetailsCookingItem, DetailsCookingHeader, DetailsCookingContent,
    DetailsCookingIngredients
} from './Cooking.styled'

import { BsChevronDown } from 'react-icons/bs'
import { IoFootstepsSharp } from 'react-icons/io5'

import { CookingProps } from './Cooking.types'
import { ErrorNoResult } from 'components/common/ErrorNoResult/ErrorNoResult.lazy'

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
        <List {...motion} >
            {details?.analyzedInstructions.map(({ name, steps }, index: number) => (
                <Fragment key={nanoid()}> {/* Item name possible could be the empty string. There is no another way to give an unique key */}
                    {name.length ?
                        <DetailsCookingSubtitle>
                            <IoFootstepsSharp />
                            {stringCut(name, 40)}
                        </DetailsCookingSubtitle> : null}

                    {steps.map(({ number, step, ingredients }) =>
                        <DetailsCookingItem key={number}>
                            <DetailsCookingHeader onClick={() => stepHandler(step)}>
                                <Span fontWeight='var(--fw-bold)'>Step {number}</Span>
                                <BsChevronDown
                                    style={{ transform: stepIsActive === step ? 'rotate(180deg)' : 'rotate(0)' }}
                                />
                            </DetailsCookingHeader>

                            <DetailsCookingContent className={stepIsActive === step ? 'active' : ''}>
                                <DetailsCookingIngredients className={ingredients.length ? '' : 'hide'}>
                                    {ingredients.length && ingredients.map(({ id, image, name }) =>
                                        <Image
                                            width='60px'
                                            objectFit='contain'
                                            key={id}
                                            src={`${config.ingredientsUrl}${image}`}
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
        </List>
    )
})
