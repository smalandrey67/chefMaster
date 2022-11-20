import { FC } from 'react'

import * as Style from './BlogCard.styled'
import * as StyleReused from 'assets/styled/Reused.styled'

import { BlogCardPropsType } from 'types/Blogs'
import { LazyImage } from 'components/common/LazyImage/LazyImage'

export const BlogCard: FC<BlogCardPropsType> = ({ title, file, author, description, avatar }) => {
  return (
    <Style.BlogArticle>
      <Style.BlogWrapper>
        <Style.BlogHeader>
          <Style.BlogHeaderAvatar>
            <StyleReused.Image src={avatar} alt={author} objectFit='cover' />
          </Style.BlogHeaderAvatar>
          <StyleReused.Title>{title}</StyleReused.Title>
        </Style.BlogHeader>

        <Style.BlogFigure>
          <LazyImage image={`${file}`} alt={author} width='100%' height='100%' style={{ objectFit: 'cover' }} />
          <Style.BlogFigcaption>
            written by
            <StyleReused.Strong margin='0 0 0 5px' fontSize='var(--fs-md)' color='var(--color-categories)'>
              {author}
            </StyleReused.Strong>
          </Style.BlogFigcaption>
        </Style.BlogFigure>
        <StyleReused.Paragraph>{description}</StyleReused.Paragraph>
      </Style.BlogWrapper>
    </Style.BlogArticle>
  )
}
