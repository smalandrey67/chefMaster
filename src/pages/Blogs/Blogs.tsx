import { FC, useEffect, } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { blogsAsync } from '../../store/slices/blogs/blogsAsync'

import { BlogsEl, BlogsAddWrapper, BlogsAdd, BlogsWrapper } from './Blogs.styled'
import { Container, SpinnerWrapper, Spinner, ErrorMessage, SearchedWarning } from '../../assets/styled/Reused.styled'

import { Blog } from '../../components/Blog/Blog'
import SpinnerBg from '../../assets/images/spinner-bg.svg'

import { StatusEnum } from '../../@types/Status'
import { BlogsType } from '../../@types/Blogs'

import { BiError } from 'react-icons/bi'
import { HiPlus } from 'react-icons/hi'

export const Blogs: FC = () => {
   const dispatch = useAppDispatch()
   const { blogs, status, error } = useAppSelector(state => state.blogsReducer)

   useEffect(() => {
      dispatch(blogsAsync())
   }, [dispatch])

   return (
      <BlogsEl>
         <Container>

            <BlogsAddWrapper>
               <BlogsAdd>
                  add blog
                  <HiPlus />
               </BlogsAdd>
            </BlogsAddWrapper>-

            {
               !blogs.length && !error && status !== StatusEnum.PENDING ? <SearchedWarning>
                  <BiError />
                  No posts yet
               </SearchedWarning> : null
            }

            <BlogsWrapper>
               {status === StatusEnum.PENDING ?
                  <SpinnerWrapper height='40vh'>
                     <Spinner src={SpinnerBg} alt='spinner' />
                  </SpinnerWrapper>
                  :
                  blogs.map(({ id, ...blog }: BlogsType): JSX.Element => <Blog key={id} {...blog} />)}

               {error && <ErrorMessage>
                  <BiError />
                  {error}
               </ErrorMessage>}
            </BlogsWrapper>
         </Container>
      </BlogsEl>
   )
}