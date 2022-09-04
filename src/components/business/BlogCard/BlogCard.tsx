import { FC } from 'react'

import {
   BlogArticle, BlogWrapper, BlogHeader,
   BlogHeaderAvatar, BlogFigure, BlogFigcaption
} from './BlogCard.styled'
import { Title, Strong, Image, Paragraph } from 'assets/styled/Reused.styled'

import { BlogCardPropsType } from 'types/Blogs'
import { LazyImage } from 'components/common/LazyImage/LazyImage'

export const BlogCard: FC<BlogCardPropsType> = ({ title, file, author, description, avatar }) => {

   return (
      <BlogArticle>
         <BlogWrapper>
            <BlogHeader>
               <BlogHeaderAvatar>
                  <Image src={avatar} alt={author} objectFit='cover' />
               </BlogHeaderAvatar>
               <Title>{title}</Title>
            </BlogHeader>

            <BlogFigure>
               <LazyImage image={`${file}`} alt={author} width='100%' height='100%' />
               <BlogFigcaption>
                  written by
                  <Strong margin='0 0 0 5px' fontSize='var(--fs-md)' color='var(--color-categories)'>
                     {author}
                  </Strong>
               </BlogFigcaption>
            </BlogFigure>
            <Paragraph>{description}</Paragraph>
         </BlogWrapper>
      </BlogArticle>
   )
}