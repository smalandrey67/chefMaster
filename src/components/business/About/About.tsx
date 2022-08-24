import { FC } from 'react'

import Background from 'assets/images/production/cooking-bg.webp'
import { Image } from 'assets/styled/Reused.styled'
import { AboutWrapper, AboutWrapperImage, AboutDescriptionWrapper, AboutDescriptionParagraph } from './About.styled'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'

export const About: FC = () => {

   return (
      <SectionContainer>
         <AboutWrapper>
            <AboutWrapperImage>
               <Image src={Background} alt='cooking-background' />
            </AboutWrapperImage>
            <AboutDescriptionWrapper>
               <AboutDescriptionParagraph>
                  The key to a healthy diet is to eat the right amount of calories
                  for how active you are so you balance the energy you consume with the energy you use.
               </AboutDescriptionParagraph>

               <AboutDescriptionParagraph>
                  If you eat or drink more than your body needs,
                  you'll put on weight because the energy you do not use is stored as fat.
                  If you eat and drink too little, you'll lose weight.
               </AboutDescriptionParagraph>
            </AboutDescriptionWrapper>
         </AboutWrapper>
      </SectionContainer>
   )
}