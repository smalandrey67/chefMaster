import { FC } from 'react'

import { DetailsType } from '../../../types/Details'
import { removeTags } from '../../../utils/functions'

import { DetailsInfoDescription, DetailsInfoTitle } from './Instructions.styled'

type InstructionsProps = {
    details: DetailsType | null;
}

export const Instructions: FC<InstructionsProps> = ({ details }) => {
    return (
        <DetailsInfoDescription animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <DetailsInfoTitle>{removeTags(details?.summary)}</DetailsInfoTitle>
            <DetailsInfoTitle>{removeTags(details?.instructions)}</DetailsInfoTitle>
        </DetailsInfoDescription>
    )
}   