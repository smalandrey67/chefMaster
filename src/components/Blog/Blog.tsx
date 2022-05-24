import { FC } from 'react'

import { 
   BlogEl, 
   BlogBody, 
   BlogTitle, 
   BlogFigure, 
   BlogFigCaption,
   BlogFigCaptionAuthor,
   BlogFigureImage,
   BlogList,
   BlogItem,
   BlogItemTitle, 
   BlogItemDescription,
} from './Blog.styled' 

import { BlogsType } from '../../types/Blogs'



export const Blog: FC<BlogsType> = ({ title, image, author, description }) => {


   return (
      <BlogEl>
         <BlogBody>
            <BlogTitle>{title}</BlogTitle>

            <BlogFigure>
               <BlogFigureImage src={image} alt={title} />
               <BlogFigCaption>
                  written by 
                  <BlogFigCaptionAuthor>
                     {author}   
                  </BlogFigCaptionAuthor> 
               </BlogFigCaption> 
            </BlogFigure>

            <BlogList>

               {description.map(article => 
                  <BlogItem key={article.id}>
                     <BlogItemTitle>{article.subTitle}</BlogItemTitle>
                     <BlogItemDescription>{article.information}</BlogItemDescription>
                  </BlogItem>   
               )}


            </BlogList>

         </BlogBody> 
      </BlogEl> 
   )
}