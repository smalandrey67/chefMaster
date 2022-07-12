import { FC } from 'react'

import { Container } from '../../../assets/styled/Reused.styled'
import { CategoriesNav, CategoriesLink } from './Categories.styled'

import { Splide } from '@splidejs/react-splide'
import { SplideSlide } from '@splidejs/react-splide'

import { categories, CategoriesType } from '../../../utils/constants/categories.constants'
import { splideOptions } from '../../../utils/constants/splide.constants'

export const Categories: FC = () => {

    return (
        <CategoriesNav>
            <Container>
                <Splide options={splideOptions(4)}>
                    {categories.map(({ cuisine, Icon }: CategoriesType): JSX.Element =>
                        <SplideSlide key={cuisine}>
                            <CategoriesLink to={`cuisine/${cuisine}`}>
                                <Icon color='var(--color-categories)' size='25' />
                                {cuisine}
                            </CategoriesLink>
                        </SplideSlide>
                    )}
                </Splide>
            </Container>
        </CategoriesNav>
    )
}