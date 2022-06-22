import { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { blogsAsync } from '../../store/slices/blogs/blogsAsync'

import { BlogsEl, BlogsAdd, BlogsWrapper } from './Blogs.styled'
import { Container, SpinnerWrapper, Spinner, ErrorMessage, SearchedWarning } from '../../assets/styled/Reused.styled'

import { BlogCard } from '../../components/ui/BlogCard/BlogCard'
import { BackButton } from '../../components/reusable/BackButton/BackButton'
import { ErrorNoResult } from '../../components/reusable/ErrorNoResult/ErrorNoResult'
import SpinnerBg from '../../assets/images/spinner-bg.svg'

import { StatusEnum } from '../../@types/Status'
import { BlogsType } from '../../@types/Blogs'

import { BiError } from 'react-icons/bi'
import { HiPlus } from 'react-icons/hi'

export const Blogs: FC = () => {
   const dispatch = useAppDispatch()
   const { blogs, status, error } = useAppSelector(state => state.blogs)

   useEffect(() => {
      dispatch(blogsAsync())
   }, [dispatch])

   return (
      <BlogsEl>
         <Container>

            <BackButton>
               <BlogsAdd>
                  add blog
                  <HiPlus />
               </BlogsAdd>
            </BackButton>
            
            {
               !blogs.length && !error && status !== StatusEnum.PENDING ? 
                <ErrorNoResult description=' No posts yet' height='50vh' />
               : null
            }

            <BlogsWrapper>
               {status === StatusEnum.PENDING ?
                  <SpinnerWrapper height='40vh'>
                     <Spinner src={SpinnerBg} alt='spinner' />
                  </SpinnerWrapper>
                  :
                  blogs.map(({ id, ...blog }: BlogsType): JSX.Element => <BlogCard key={id} {...blog} />)}

               {error && <ErrorMessage>
                  <BiError />
                  {error}
               </ErrorMessage>}
            </BlogsWrapper>
         </Container>
      </BlogsEl>
   )
}

