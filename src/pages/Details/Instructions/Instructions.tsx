import { FC } from 'react'

import { DetailsType } from '../../../models/Details'

import { removeTags } from '../../../utils/helpers/tags.helpers'
import { motion } from '../../../utils/constants/motion.constants'

import { DetailsInfoDescription } from './Instructions.styled'
import { Text } from '../../../assets/styled/Reused.styled'

type InstructionsProps = {
    details: DetailsType;
}

export const Instructions: FC<InstructionsProps> = ({ details }) => {

    return (
        <DetailsInfoDescription {...motion}>
            <Text margin='0 0 10px 0'>{removeTags(details.summary)}</Text>
            <Text margin='0 0 10px 0'>{removeTags(details.instructions)}</Text>
        </DetailsInfoDescription>
    )
}   