import { FC } from "react"

import { Container } from "../../assets/styled/Reused.styled"
import { CategoriesNav, CategoriesList, CategoriesItem, CategoriesLink } from './Categories.styled'

import { categories, CategoriesType } from "../../utils/constants/categories.constants"

export const Categories: FC = () => {
    return (
        <CategoriesNav>
            <Container>
                <CategoriesList>
                    {categories.map(({ cuisine, Icon }: CategoriesType): JSX.Element =>
                        <CategoriesItem key={cuisine}>
                            <CategoriesLink to={`cuisine/${cuisine}`}>
                                <Icon color='var(--color-categories)' size='25' />
                                {cuisine}
                            </CategoriesLink>
                        </CategoriesItem>
                    )}
                </CategoriesList>
            </Container>
        </CategoriesNav>
    )
}