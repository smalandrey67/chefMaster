import { FC, useState, useEffect, ChangeEvent } from 'react'

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

            {/* <input type="file" onChange={fileHandler}/> */}
        
            {/* button which open the chat for answer a question */}
            <MainChatWrapper onClick={() => popupHandler()}>
                <BsChatRightText 
                    size='25' 
                    cursor='pointer' 
                    color='var(--color-white)'
                />
            </MainChatWrapper>

            {popupIsActive && <Answer popupHandler={popupHandler} />}
        </MainEl>
    )
}