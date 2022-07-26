import { FC } from 'react'

import { DetailsType } from 'types/Details'
import { removeTags } from 'utils/helpers/tags.helper'
import { motion } from 'utils/constants/motion.constants'

import { DetailsInfoDescription } from './Instructions.styled'
import { Text } from 'assets/styled/Reused.styled'
import { ErrorNoResult } from 'components/reusable/ErrorNoResult/ErrorNoResult'

type InstructionsProps = {
    details: DetailsType | undefined;
}

export const Instructions: FC<InstructionsProps> = ({ details }) => {

    return (
        <>
            {!details?.summary.length && !details?.instructions.length ? 
                <ErrorNoResult description='No instructions here' height='25vh' /> : null}

            <DetailsInfoDescription {...motion}>
                <Text margin='0 0 10px 0'>{removeTags(details?.summary)}</Text>
                <Text margin='0 0 10px 0'>{removeTags(details?.instructions)}</Text>
            </DetailsInfoDescription>
        </>
    )
}