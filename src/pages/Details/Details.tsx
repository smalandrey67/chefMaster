import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import { BiError } from 'react-icons/bi'
import { BsSuitHeartFill } from 'react-icons/bs'
import * as Style from './Details.styled'
import { ErrorMessage, SpinnerWrapper, Spinner, FlexGroup, Image } from 'assets/styled/Reused.styled'
import SpinnerBg from 'assets/images/icons/spinner-bg.svg'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { BackButtonContainer } from 'components/containers/BackButtonContainer/BackButtonContainer'
import { ErrorFallback } from 'components/common/ErrorFallback/ErrorFallback.lazy'
import { Ingredients } from './Ingredients/Ingredients.lazy'
import { Instructions } from './Instructions/Instructions.lazy'
import { Cooking } from './Cooking/Cooking.lazy'
import { Tabs } from './Tabs/Tabs'
import { Nutritions } from './Nutritions/Nutritions'
import { Social } from './Social/Social'

import { useGetHeartColor } from './hook/useGetHeartColor'
import { useMakeFavorite } from './hook/useMakeFavorite'
import { useAppSelector } from 'hooks/useRedux'

import { motion } from 'constants/motion'
import { selectTabName } from 'store/slices/tabsSlice/tabsSlice.selectors'
import { useGetDetailsQuery } from 'services/RecipesService'

export const Details: FC = () => {
  const params = useParams<{ id: string }>()
  const { data: details, error, isLoading } = useGetDetailsQuery(params.id)

  const tabName = useAppSelector(selectTabName)
  const makeRecipefavoriteHandler = useMakeFavorite(details)
  const colorType = useGetHeartColor(details)

  return (
    <SectionContainer motion={motion}>
      <Style.DetailsWrapper>
        {isLoading ? (
          <SpinnerWrapper height='50vh'>
            <Spinner src={SpinnerBg} alt='spinner' />
          </SpinnerWrapper>
        ) : (
          <>
            <FlexGroup flex='0 1 50%'>
              <Style.DetailWrapperImage>
                <BackButtonContainer buttonTitle='back'>
                  <Style.DetailsHeartButton
                    aria-label='make this recipe the favorite'
                    onClick={makeRecipefavoriteHandler}
                  >
                    <BsSuitHeartFill color={colorType} size='30' />
                  </Style.DetailsHeartButton>
                </BackButtonContainer>

                <Style.DetailsOverImage>
                  <Image width='100%' objectFit='cover' src={details?.image} alt={details?.title} />

                  {/* Social component actually means functionality over the image */}
                  <Social details={details} />
                </Style.DetailsOverImage>
              </Style.DetailWrapperImage>

              <ErrorBoundary fallbackRender={(): JSX.Element => <ErrorFallback height='5vh' />}>
                <Nutritions id={params.id} />
              </ErrorBoundary>
            </FlexGroup>

            <FlexGroup flex='0 1 50%'>
              <Tabs />

              {tabName === 'instructions' && (
                <ErrorBoundary fallbackRender={(): JSX.Element => <ErrorFallback height='10vh' />}>
                  <Instructions details={details} />
                </ErrorBoundary>
              )}

              {tabName === 'ingredients' && (
                <ErrorBoundary fallbackRender={(): JSX.Element => <ErrorFallback height='10vh' />}>
                  <Ingredients details={details} />
                </ErrorBoundary>
              )}

              {tabName === 'cooking' && (
                <ErrorBoundary fallbackRender={(): JSX.Element => <ErrorFallback height='10vh' />}>
                  <Cooking details={details} />
                </ErrorBoundary>
              )}
            </FlexGroup>
          </>
        )}
      </Style.DetailsWrapper>
      {error && (
        <ErrorMessage>
          <BiError />
          Server Error
        </ErrorMessage>
      )}
    </SectionContainer>
  )
}
