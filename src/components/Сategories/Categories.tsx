import { FC } from "react"

import { Container } from "../../styled/Reused.styled"
import { CategoriesNav, CategoriesList, CategoriesItem, CategoriesLink } from './Categories.styled'

import { FaPizzaSlice, FaHamburger, FaDrumstickBite } from 'react-icons/fa'
import { GiSushis } from 'react-icons/gi'

export const Categories: FC = () => {
    return (
        <CategoriesNav>
            <Container>
                <CategoriesList>
                    <CategoriesItem>
                        <CategoriesLink to='cuisine/Italian'>
                            <FaPizzaSlice color='var(--color-categories)' size='25' />
                            Italian
                        </CategoriesLink>
                    </CategoriesItem>

                    <CategoriesItem>
                        <CategoriesLink to='cuisine/American'>
                            <FaHamburger color='var(--color-categories)' size='25' />
                            American
                        </CategoriesLink>
                    </CategoriesItem>

                    <CategoriesItem>
                        <CategoriesLink to='cuisine/Thai'>
                            <FaDrumstickBite color='var(--color-categories)' size='25' />
                            Thai
                        </CategoriesLink>
                    </CategoriesItem>

                    <CategoriesItem>
                        <CategoriesLink to='cuisine/Japanese'>
                            <GiSushis color='var(--color-categories)' size='25' />
                            Japanese
                        </CategoriesLink>
                    </CategoriesItem>
                </CategoriesList>
            </Container>
        </CategoriesNav>
    )
}