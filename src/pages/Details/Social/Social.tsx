import { FC, memo } from 'react'

import { BsClock } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'

import { SocialReadyMinutes, SocialAgreeLikes, DetailsWrapperTitle } from './Social.styled'
import { SocialProps } from './Social.types'

export const Social: FC<SocialProps> = memo(({ details }) => {

   return (
      <>
         <DetailsWrapperTitle>
            {details?.title}
         </DetailsWrapperTitle>

         <SocialReadyMinutes>
            <BsClock size='20' />
            {details?.readyInMinutes} min
         </SocialReadyMinutes>

         <SocialAgreeLikes>
            <AiOutlineLike size='20' />
            {details?.aggregateLikes}
         </SocialAgreeLikes>
      </>
   )
})