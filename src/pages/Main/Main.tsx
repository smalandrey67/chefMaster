import { FC } from 'react'
import ReactDOM from 'react-dom'

import { Recipes } from '../../components/Recipes/Recipes'
import { About } from '../../components/About/About'
import { Answer } from '../../components/Answer/Answer'

import { MainEl, MainChatWrapper } from './Main.styled'

import { BsChatRightText } from 'react-icons/bs'

import { usePopup } from '../../hooks/usePopup'


export const Main: FC = () => {
    const { popupIsActive, popupHandler } = usePopup()


    return (
        <MainEl>
            <Recipes />
            <About />

            {/* button which open the chat for answer a question */}
            <MainChatWrapper onClick={() => popupHandler()}>
                <BsChatRightText
                    size='25'
                    cursor='pointer'
                    color='var(--color-white)'
                />
            </MainChatWrapper>

            {
                popupIsActive &&
                ReactDOM.createPortal(<Answer popupHandler={popupHandler} />, document.getElementById('popup')!)
            }
        </MainEl>
    )
}