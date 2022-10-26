import { FC } from 'react'

import { Container } from 'assets/styled/Reused.styled'
import * as Style from './Categories.styled'

import { Splide } from '@splidejs/react-splide'
import { SplideSlide } from '@splidejs/react-splide'

import { categories } from 'utils/constants/categories.constants'
import { splideOptions } from 'utils/constants/splide.constants'

export const Categories: FC = () => {
  return (
    <Style.CategoriesNav>
      <Container>
        <Splide options={splideOptions(4)}>
          {categories.map(({ cuisine, Icon }) => (
            <SplideSlide key={cuisine} style={{ display: 'flex', justifyContent: 'center' }}>
              <Style.CategoriesLink to={`cuisine/${cuisine}`}>
                <Icon color='var(--color-categories)' size='25' />
                {cuisine}
              </Style.CategoriesLink>
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </Style.CategoriesNav>
  )
}
