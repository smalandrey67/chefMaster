import { FC } from 'react'

import { Text } from 'assets/styled/Reused.styled'
import { AboutWrapper, AboutWrapperImage, AboutImage, AboutDescriptionWrapper } from './About.styled'

import Background from 'assets/images/production/cooking-bg.webp'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'

export const About: FC = () => {

   return (
      <SectionContainer>
         <AboutWrapper>
            <AboutWrapperImage>
               <AboutImage src={Background} alt='cooking-background' />
            </AboutWrapperImage>

            <AboutDescriptionWrapper>
               <Text margin='0 0 10px 0'>
                  The key to a healthy diet is to eat the right amount of calories
                  for how active you are so you balance the energy you consume with the energy you use.
               </Text>

               <Text margin='0 0 10px 0'>
                  If you eat or drink more than your body needs,
                  you'll put on weight because the energy you do not use is stored as fat.
                  If you eat and drink too little, you'll lose weight.
               </Text>
            </AboutDescriptionWrapper>
         </AboutWrapper>
      </SectionContainer>
   )
}