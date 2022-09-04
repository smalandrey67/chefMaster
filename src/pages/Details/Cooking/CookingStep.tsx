import { FC, useState } from 'react'

import { Strong } from 'assets/styled/Reused.styled'
import {
   DetailsCookingItem, DetailsCookingHeader, DetailsCookingContent,
   DetailsCookingIngredients
} from './Cooking.styled'

import { BsChevronDown } from 'react-icons/bs'
import { CookingStepType } from 'types/Details'

import { CookingIngredient } from './CookingIngredient'

export const CookingStep: FC<CookingStepType> = ({ step, number, ingredients}) => {
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
      <DetailsCookingItem>
         <DetailsCookingHeader onClick={() => stepHandler(step)}>
            <Strong>Step {number}</Strong>
            <BsChevronDown
               style={{ transform: transfromValue }}
            />
         </DetailsCookingHeader>

         <DetailsCookingContent isActiveStep={isActiveStep}>
            <DetailsCookingIngredients isHideStep={isHideStep}>
               {ingredients.length && ingredients.map(({ id, ...values }) =>
                  <CookingIngredient key={id} {...values}/>
               )}
            </DetailsCookingIngredients>
            {step}
         </DetailsCookingContent>
      </DetailsCookingItem>
   )
}