import { FC, Fragment } from 'react'
import { nanoid } from '@reduxjs/toolkit'

import { motion } from 'constants/motion'
import { stringCut } from 'utils/stringCut'

import * as ReusedStyle from 'assets/styled/Reused.styled'
import * as Style from './Cooking.styled'

import { IoFootstepsSharp } from 'react-icons/io5'
import { CookingProps } from './Cooking.types'

import { ErrorNoResult } from 'components/common/ErrorNoResult/ErrorNoResult.lazy'
import { CookingStep } from './CookingStep'

export const Cooking: FC<CookingProps> = ({ details }) => {
  return (
    <ReusedStyle.List {...motion}>
      {details?.analyzedInstructions.map(({ name, steps }) => (
        <Fragment key={nanoid()}>
          {name.length ? (
            <Style.DetailsCookingSubtitle>
              <IoFootstepsSharp />
              {stringCut(name, 40)}
            </Style.DetailsCookingSubtitle>
          ) : null}

          {steps.map((step) => (
            <CookingStep key={step.number} {...step} />
          ))}
        </Fragment>
      ))}

      {!details?.analyzedInstructions.length && (
        <ErrorNoResult description='No instruction for cooking' height='25vh' />
      )}
    </ReusedStyle.List>
  )
}
