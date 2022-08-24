import { FC } from 'react'

import { removeTags } from 'utils/helpers/tags.helper'
import { motion } from 'utils/constants/motion.constants'

import { DetailsInfoDescriptionWrapper } from './Instructions.styled'
import { Paragraph } from 'assets/styled/Reused.styled'
import { ErrorNoResult } from 'components/reusable/ErrorNoResult/ErrorNoResult'

import { InstructionsProps } from './Instructions.types'

export const Instructions: FC<InstructionsProps> = ({ details }) => {

    return (
        <>
            {!details?.summary.length && !details?.instructions.length ?
                <ErrorNoResult description='No instructions here' height='25vh' />
                : null}

            <DetailsInfoDescriptionWrapper {...motion}>
                <Paragraph margin={details?.summary && '0 0 10px 0'}>{removeTags(details?.summary)}</Paragraph>
                <Paragraph margin={details?.instructions && '0 0 10px 0'}>{removeTags(details?.instructions)}</Paragraph>
            </DetailsInfoDescriptionWrapper>
        </>
    )
}