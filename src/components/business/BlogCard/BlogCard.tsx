import { FC } from 'react'

import {
   BlogEl,
   BlogBody,
   BlogHeader,
   BlogHeaderAvatar,
   BlogHeaderAvatarImage,
   BlogFigure,
   BlogFigCaption
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
                  <BlogHeaderAvatarImage src={avatar} alt={author} /> 
               </BlogHeaderAvatar>
               <Title>{title}</Title>
            </BlogHeader>

            <BlogFigure>
               <LazyImage 
                  image={`${file}`}
                  alt={author}
                  width='100%'
                  height='100%'
               />
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