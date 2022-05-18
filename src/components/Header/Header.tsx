import { FC, useState, useEffect } from 'react'

import { HeaderEl, HeaderWrapper, HeaderLogoWrapper, HeaderLogo } from './Header.styled'
import { Container } from '../../styled/Reused.styled'

import { ImSpoonKnife } from 'react-icons/im'
import { BsChatRightText } from 'react-icons/bs'

import { Search } from '../Search/Search'
import { Popup } from '../Popup/Popup'


export const Header: FC = () => {
    const [popupIsActive, setPopupIsActive] = useState(false)

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
        <HeaderEl>
            <Container>
                <HeaderWrapper>
                    <HeaderLogoWrapper>
                        <HeaderLogo>
                            <ImSpoonKnife color='var(--color-black)' size='25' />
                            ChefMaster
                        </HeaderLogo>
                        <BsChatRightText
                            size='20'
                            cursor='pointer'
                            onClick={popupHandler}
                        />
                    </HeaderLogoWrapper>

                    <Search />
                </HeaderWrapper>

                {popupIsActive && <Popup setPopupIsActive={setPopupIsActive} />}
            </Container>
        </HeaderEl>
    )
}