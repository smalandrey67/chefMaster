import { FC } from 'react'

import {
   BlogEl,
   BlogBody,
   BlogHeader,
   BlogHeaderAvatar,
   BlogFigure,
   BlogFigCaption,
   BlogFigureImage
} from './BlogCard.styled'
import { Title, Text, SpecialTitle } from 'assets/styled/Reused.styled'

import { BlogType } from 'types/Blogs'
import { LazyImage } from '../../reusable/LazyImage/LazyImage'

export const BlogCard: FC<BlogType> = ({ title, file, author, description, avatar }) => {

   return (
      <BlogEl>
         <BlogBody>
            <BlogHeader>
               <BlogHeaderAvatar>
                  <LazyImage
                     image={avatar}
                     alt={author}
                     width='100%'
                     height='100%'
                  />
               </BlogHeaderAvatar>
               <Title>{title}</Title>
            </BlogHeader>

            <BlogFigure>
               <BlogFigureImage src={`${file}`} alt={title} />
               <BlogFigCaption>
                  written by
                  <SpecialTitle margin='0 0 0 5px' fontWeight='var(--fw-bold)' color='var(--color-categories)'>
                     {author}
                  </SpecialTitle>
               </BlogFigCaption>
            </BlogFigure>

            <Text>{description}</Text>
         </BlogBody>
      </BlogEl>
   )
}