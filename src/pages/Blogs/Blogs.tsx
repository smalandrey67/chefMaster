import { FC } from 'react'

import * as Style from './Blogs.styled'
import { SpinnerWrapper, Spinner, ErrorMessage } from 'assets/styled/Reused.styled'
import SpinnerBg from 'assets/images/icons/spinner-bg.svg'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { BlogCard } from 'components/business/BlogCard/BlogCard'
import { BackButtonContainer } from 'components/containers/BackButtonContainer/BackButtonContainer'
import { ErrorNoResult } from 'components/common/ErrorNoResult/ErrorNoResult.lazy'

import { BiError } from 'react-icons/bi'
import { HiPlus } from 'react-icons/hi'

import { useGetBlogsQuery } from 'services/BlogsService'

export const Blogs: FC = () => {
  const { data: blogs, error, isLoading } = useGetBlogsQuery()

  return (
    <SectionContainer>
      <BackButtonContainer buttonTitle='back'>
        <Style.BlogsAdd to='/blogs/create'>
          add blog <HiPlus />
        </Style.BlogsAdd>
      </BackButtonContainer>

      <Style.BlogsWrapper>
        {isLoading ? (
          <SpinnerWrapper height='40vh'>
            <Spinner src={SpinnerBg} alt='spinner' />
          </SpinnerWrapper>
        ) : (
          blogs?.map(({ id, ...blog }) => <BlogCard key={id} {...blog} />)
        )}

        {!blogs?.length && !error && !isLoading ? <ErrorNoResult description='No posts yet' height='50vh' /> : null}

        {error && (
          <ErrorMessage>
            <BiError />
            Server Error
          </ErrorMessage>
        )}
      </Style.BlogsWrapper>
    </SectionContainer>
  )
}
