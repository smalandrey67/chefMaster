import { FC } from 'react'

import { IDetails } from '../../../models/IDetails'
import { removeTags } from '../../../utils'

import { DetailsInfoDescription, DetailsInfoTitle } from './Instructions.styled'

type InstructionsProps = {
    details: IDetails | null;
}

export const Instructions: FC<InstructionsProps> = ({ details }) => {

    return (
        <DetailsInfoDescription
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <DetailsInfoTitle>{removeTags(details?.summary)}</DetailsInfoTitle>
            <DetailsInfoTitle>{removeTags(details?.instructions)}</DetailsInfoTitle>
        </DetailsInfoDescription>
    )
}   