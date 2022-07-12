import { FC } from 'react'

import {
   BlogEl,
   BlogBody,
   BlogHeader,
   BlogHeaderAvatar,
   BlogHeaderImage,
   BlogFigure,
   BlogFigCaption,
   BlogFigureImage
} from './BlogCard.styled'
import { Title, Text, SpecialTitle } from '../../../assets/styled/Reused.styled'

import { BlogType } from '../../../@types/Blogs'

export const BlogCard: FC<BlogType> = ({ title, file, author, description, avatar }) => {

   return (
      <BlogEl>
         <BlogBody>
            <BlogHeader>
               <BlogHeaderAvatar>
                  <BlogHeaderImage src={avatar} alt={author} />
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