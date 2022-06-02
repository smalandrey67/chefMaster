import { FC } from 'react'

import { DetailsType } from '../../../types/Details'

import { removeTags } from '../../../utils/functions'
import { motionSettings } from '../../../utils/motionOptions'

import { DetailsInfoDescription } from './Instructions.styled'
import { Text } from '../../../styled/Reused.styled'

type InstructionsProps = {
    details: DetailsType | null;
}

export const Instructions: FC<InstructionsProps> = ({ details }) => {
    return (
        <DetailsInfoDescription {...motionSettings}>
            <Text margin='0 0 10px 0'>{removeTags(details?.summary)}</Text>
            <Text margin='0 0 10px 0'>{removeTags(details?.instructions)}</Text>
        </DetailsInfoDescription>
    )
}   