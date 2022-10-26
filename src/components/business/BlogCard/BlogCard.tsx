import { FC } from 'react'

import * as Style from './BlogCard.styled'
import { Title, Strong, Image, Paragraph } from 'assets/styled/Reused.styled'

import { BlogCardPropsType } from 'types/Blogs'
import { LazyImage } from 'components/common/LazyImage/LazyImage'

export const BlogCard: FC<BlogCardPropsType> = ({ title, file, author, description, avatar }) => {
  return (
    <Style.BlogArticle>
      <Style.BlogWrapper>
        <Style.BlogHeader>
          <Style.BlogHeaderAvatar>
            <Image src={avatar} alt={author} objectFit='cover' />
          </Style.BlogHeaderAvatar>
          <Title>{title}</Title>
        </Style.BlogHeader>

        <Style.BlogFigure>
          <LazyImage image={`${file}`} alt={author} width='100%' height='100%' />
          <Style.BlogFigcaption>
            written by
            <Strong margin='0 0 0 5px' fontSize='var(--fs-md)' color='var(--color-categories)'>
              {author}
            </Strong>
          </Style.BlogFigcaption>
        </Style.BlogFigure>
        <Paragraph>{description}</Paragraph>
      </Style.BlogWrapper>
    </Style.BlogArticle>
  )
}
