import { FC } from 'react'
import ReactDOM from 'react-dom'
import { BsChatRightText } from 'react-icons/bs'

import Background from 'assets/images/main/cooking-bg.webp'
import { Image } from 'assets/styled/Reused.styled'
import { AboutWrapper, AboutWrapperImage, AboutDescriptionWrapper, AboutDescriptionParagraph, AboutChatWrapper } from './About.styled'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { Answer } from '../Answer/Answer'

import { usePopup } from 'hooks/usePopup'

export const About: FC = () => {
   const { popupIsActive, popupHandler } = usePopup()

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

            <AboutChatWrapper aria-label='ask question' onClick={popupHandler}>
               <BsChatRightText size='25' cursor='pointer' color='var(--color-white)' />
            </AboutChatWrapper>

            {popupIsActive && ReactDOM.createPortal(
               <Answer popupHandler={popupHandler} />, document.getElementById('popup')!)
            }
         </AboutWrapper>
      </SectionContainer>
   )
}