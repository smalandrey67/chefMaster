import { FC, useState, useEffect } from 'react'

import { Recipes } from '../../components/Recipes/Recipes'
import { About } from '../../components/About/About'
import { Popup } from '../../components/Popup/Popup'

import { MainEl, MainChatWrapper } from './Main.styled'

import { BsChatRightText } from 'react-icons/bs'

export const Main: FC = () => {
    const [popupIsActive, setPopupIsActive] = useState<boolean>(false)

    useEffect(() => {
        if (popupIsActive) {
            document.body.style.overflow = 'hidden'

            return
        }
     
        document.body.style.overflow = 'visible'
    }, [popupIsActive])

    const popupHandler = (): void => {
        setPopupIsActive(prevState => !prevState)
    }


    return (
        <MainEl>
            <Recipes />
            <About />

            {/* button which open popup */}
            <MainChatWrapper onClick={popupHandler}>
                <BsChatRightText 
                    size='25' 
                    cursor='pointer' 
                    color='var(--color-white)'
                />
            </MainChatWrapper>

            {popupIsActive && <Popup setPopupIsActive={setPopupIsActive} />}

        </MainEl>
    )
}