import { FC } from 'react'

import {
   BlogEl,
   BlogBody,
   BlogFigure,
   BlogFigCaption,
   BlogFigureImage,
   BlogList,
   BlogItem,
} from './Blog.styled'
import { Title, Text, SpecialTitle } from '../../assets/styled/Reused.styled'

import { BlogType } from '../../models/Blogs'

export const Blog: FC<BlogType> = ({ title, file, author, description }) => {

   return (
      <BlogEl>
         <BlogBody>
            <Title>{title}</Title>

            <BlogFigure>
               <BlogFigureImage src={`${file}`} alt={title} />
               <BlogFigCaption>
                  written by
                  <SpecialTitle margin='0 0 0 5px' fontWeight='var(--fw-bold)' color='var(--color-categories)'>
                     {author}
                  </SpecialTitle>
               </BlogFigCaption>
            </BlogFigure>

            <BlogList>
               <BlogItem>
                  <Text>{description}</Text>
               </BlogItem>
            </BlogList>
         </BlogBody>
      </BlogEl>
   )
}