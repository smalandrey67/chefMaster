import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import { BiError } from 'react-icons/bi'
import { DetailsEl, DetailsWrapperLeft, DetailsWrapper, DetailWrapperImage, DetailsWrapperTitle, DetailsImage, 
    DetailsInfo, 
    DetailsOverImage
} from './Details.styled'
import { Container, ErrorMessage, SpinnerWrapper, Spinner } from 'assets/styled/Reused.styled'
import SpinnerBg from 'assets/images/icons/spinner-bg.svg'

import { ErrorFallback } from 'components/reusable/ErrorFallback/ErrorFallback'
import { BackButton } from 'components/reusable/BackButton/BackButton'
import { Ingredients } from './Ingredients/Ingredients'
import { Instructions } from './Instructions/Instructions'
import { Tabs } from './Tabs/Tabs'
import { Cooking } from './Cooking/Cooking'
import { Nutritions } from './Nutritions/Nutritions'
import { Social } from './Social/Social'

import { motion } from 'utils/constants/motion.constants'
import { stringCut } from 'utils/helpers/string.helper'

import { useAppSelector } from 'hooks/useRedux'
import { selectTabName } from 'store/slices/tabsSlice/tabsSlice.selectors'
import { useGetDetailsQuery } from 'services/RecipesService'

export const Details: FC = () => {
    const params = useParams<{ id: string }>()
    const { data: details, error, isLoading } = useGetDetailsQuery(params.id)

    const tabName = useAppSelector(selectTabName)

    return (
        <DetailsEl {...motion} >
            <Container>
                <DetailsWrapper>
                    {isLoading ?
                        <SpinnerWrapper height='50vh'>
                            <Spinner src={SpinnerBg} alt='spinner' />
                        </SpinnerWrapper>
                        :
                        <>
                            <DetailsWrapperLeft>
                                <DetailWrapperImage>
                                    <BackButton>
                                        <DetailsWrapperTitle>
                                            {/* {details?.title} */}
                                            {stringCut(details?.title, 22)}
                                        </DetailsWrapperTitle>
                                    </BackButton>

                                    <DetailsOverImage>
                                        <DetailsImage src={details?.image} alt={details?.title} />
                                        
                                        {/* Social component actually means functionality over the image */}
                                        <Social details={details} />
                                    </DetailsOverImage>
                                </DetailWrapperImage>

                                <ErrorBoundary fallbackRender={() => <ErrorFallback height='5vh' />}>
                                    <Nutritions id={params.id} />
                                </ErrorBoundary>
                            </DetailsWrapperLeft>

                            <DetailsInfo>
                                <Tabs />

                                {tabName === 'instructions' && 
                                    <ErrorBoundary fallbackRender={() => <ErrorFallback height='10vh' />}>
                                        <Instructions details={details} />
                                    </ErrorBoundary>
                                }

                                {tabName === 'ingredients' &&
                                    <ErrorBoundary fallbackRender={() => <ErrorFallback height='10vh' />}>
                                        <Ingredients details={details} />
                                    </ErrorBoundary>
                                }

                                {tabName === 'cooking' &&
                                    <ErrorBoundary fallbackRender={() => <ErrorFallback height='10vh' />}>
                                        <Cooking details={details} />
                                    </ErrorBoundary>
                                }
                            </DetailsInfo>
                        </>
                    }
                </DetailsWrapper>
                {error && <ErrorMessage><BiError />Server Error</ErrorMessage>}
            </Container>
        </DetailsEl>
    )

}

