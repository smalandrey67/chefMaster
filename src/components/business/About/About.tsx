import { FC } from 'react'
import ReactDOM from 'react-dom'
import { BsChatRightText } from 'react-icons/bs'

import Background from 'assets/images/main/cooking-bg.webp'
import { Image } from 'assets/styled/Reused.styled'
import * as Style from './About.styled'
import { usePopup } from 'hooks/usePopup'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { Answer } from 'components/business/Answer/Answer.lazy'

export const About: FC = () => {
  const { popupIsActive, popupHandler } = usePopup()

  return (
    <SectionContainer>
      <Style.AboutWrapper>
        <Style.AboutWrapperImage>
          <Image src={Background} alt='cooking-background' />
        </Style.AboutWrapperImage>
        <Style.AboutDescriptionWrapper>
          <Style.AboutDescriptionParagraph>
            The key to a healthy diet is to eat the right amount of calories for how active you are so you balance the
            energy you consume with the energy you use.
          </Style.AboutDescriptionParagraph>

          <Style.AboutDescriptionParagraph>
            If you eat or drink more than your body needs, you'll put on weight because the energy you do not use is
            stored as fat. If you eat and drink too little, you'll lose weight.
          </Style.AboutDescriptionParagraph>
        </Style.AboutDescriptionWrapper>

        <Style.AboutChatWrapper aria-label='ask question' onClick={popupHandler}>
          <BsChatRightText size='25' cursor='pointer' color='var(--color-white)' />
        </Style.AboutChatWrapper>

        {popupIsActive &&
          ReactDOM.createPortal(<Answer popupHandler={popupHandler} />, document.getElementById('popup')!)}
      </Style.AboutWrapper>
    </SectionContainer>
  )
}
