import { FC } from "react"

import { Container } from "../../styled/Reused/Container.styled"
import { CategoriesEl, CategoriesList, CategoriesItem, CategoriesLink } from '../../styled/Basic/Categories.styled'

import { FaPizzaSlice, FaHamburger, FaDrumstickBite } from 'react-icons/fa'
import { GiSushis } from 'react-icons/gi'

export const Categories: FC = () => {
    return (
        <CategoriesEl>
            <Container>
                <CategoriesList>
                    <CategoriesItem>
                        <CategoriesLink to='cuisine/italian'>
                            <FaPizzaSlice color='var(--color-categories)' size='25' />
                            Italian
                        </CategoriesLink>
                    </CategoriesItem>

                    <CategoriesItem>
                        <CategoriesLink to='cuisine/american'>
                            <FaHamburger color='var(--color-categories)' size='25' />
                            American
                        </CategoriesLink>
                    </CategoriesItem>

                    <CategoriesItem>
                        <CategoriesLink to='cuisine/thai'>
                            <FaDrumstickBite color='var(--color-categories)' size='25' />
                            Thai
                        </CategoriesLink>
                    </CategoriesItem>

                    <CategoriesItem>
                        <CategoriesLink to='cuisine/japanese'>
                            <GiSushis color='var(--color-categories)' size='25' />
                            Japanese
                        </CategoriesLink>
                    </CategoriesItem>
                </CategoriesList>
            </Container>
        </CategoriesEl>
    )
}