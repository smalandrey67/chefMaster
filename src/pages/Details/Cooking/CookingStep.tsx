import { FC, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'

import * as ReusedStyle from 'assets/styled/Reused.styled'
import * as Style from './Cooking.styled'

import { BsChevronDown } from 'react-icons/bs'
import { CookingStepType } from 'types/Details'

import { CookingIngredient } from './CookingIngredient'

export const CookingStep: FC<CookingStepType> = ({ step, number, ingredients }) => {
  const [stepIsActive, setStepIsActive] = useState<string | null>(null)

  const stepHandler = (index: string): void => {
    if (index === stepIsActive) {
      setStepIsActive(null)

      return
    }
    setStepIsActive(index)
  }

  const transfromValue = stepIsActive === step ? 'rotate(180deg)' : 'rotate(0)'
  const isActiveStep = stepIsActive === step
  const isHideStep = !!ingredients.length

  return (
    <Style.DetailsCookingItem>
      <Style.DetailsCookingHeader onClick={() => stepHandler(step)}>
        <ReusedStyle.Strong>Step {number}</ReusedStyle.Strong>
        <BsChevronDown style={{ transform: transfromValue }} />
      </Style.DetailsCookingHeader>

      <Style.DetailsCookingContent isActiveStep={isActiveStep}>
        <Style.DetailsCookingIngredients isHideStep={isHideStep}>
          {ingredients.length &&
            ingredients.map((ingredients) => <CookingIngredient key={nanoid()} {...ingredients} />)}
        </Style.DetailsCookingIngredients>
        {step}
      </Style.DetailsCookingContent>
    </Style.DetailsCookingItem>
  )
}
