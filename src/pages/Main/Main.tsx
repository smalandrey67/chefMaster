import { FC } from 'react'
import ReactDOM from 'react-dom'

import { Recipes } from 'components/business/Recipes/Recipes'
import { About } from 'components/business/About/About'
import { Answer } from 'components/business/Answer/Answer'

import { MainEl, MainChatWrapper } from './Main.styled'
import { BsChatRightText } from 'react-icons/bs'
import { usePopup } from 'hooks/usePopup'

export const Main: FC = () => {
    const { popupIsActive, popupHandler } = usePopup()

    return (
        <MainEl>
            <Recipes />
            <About />

            {/* The button which open a popup for answering the question */}
            <MainChatWrapper aria-label='ask question' onClick={popupHandler}>
                <BsChatRightText size='25' cursor='pointer' color='var(--color-white)' />
            </MainChatWrapper>

            {popupIsActive &&
                ReactDOM.createPortal(
                    <Answer popupHandler={popupHandler} />, document.getElementById('popup')!
                )}
        </MainEl>
    )
}