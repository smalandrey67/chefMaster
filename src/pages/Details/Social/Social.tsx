import { FC, memo } from 'react'

import { BsClock } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'

import * as Style from './Social.styled'
import { SocialProps } from './Social.types'

export const Social: FC<SocialProps> = memo(({ details }) => {

   return (
      <>
         <Style.DetailsWrapperTitle>
            {details?.title}
         </Style.DetailsWrapperTitle>

         <Style.SocialReadyMinutes>
            <BsClock size='20' />
            {details?.readyInMinutes} min
         </Style.SocialReadyMinutes>

         <Style.SocialAgreeLikes>
            <AiOutlineLike size='20' />
            {details?.aggregateLikes}
         </Style.SocialAgreeLikes>
      </>
   )
})