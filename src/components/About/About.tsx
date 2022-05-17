import { FC } from 'react'

import { Container } from '../../styled/Reused.styled'
import { AboutEl, AboutWrapper, AboutWrapperImage, AboutImage, AboutDescriptionWrapper, AboutDescription } from './About.styled'

import Background from '../../assets/cooking-bg.jpg'

export const About: FC = () => {
   return (
      <AboutEl>
         <Container>
            <AboutWrapper>

               <AboutWrapperImage>
                  <AboutImage src={Background} />
               </AboutWrapperImage>

               <AboutDescriptionWrapper>
                  <AboutDescription>
                     The key to a healthy diet is to eat the right amount of calories for how active you are so you balance the energy you consume with the energy you use.
                  </AboutDescription>
                  
                  <AboutDescription>
                     If you eat or drink more than your body needs, you'll put on weight because the energy you do not use is stored as fat. If you eat and drink too little, you'll lose weight.
                  </AboutDescription>
               </AboutDescriptionWrapper>

            </AboutWrapper>
         </Container>
      </AboutEl>
   )
}