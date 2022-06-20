import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import {
    DetailsEl,
    DetailsWrapperLeft,
    DetailsWrapper,
    DetailWrapperImage,
    DetailsWrapperTitle,
    DetailsImage,
    DetailsInfo,
    DetailsOverImage,
    DetailsReadyMinutes,
    DetailsAggregateLikes,
} from './Details.styled'
import { Container, ErrorMessage, SpinnerWrapper, Spinner, ButtonHeart } from '../../assets/styled/Reused.styled'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { useFavorites } from './hook/useFavorites'
import { detailsAsync } from '../../store/slices/details/detailsAsync'

import { Ingredients } from './Ingredients/Ingredients'
import { Instructions } from './Instructions/Instructions'
import { Tabs } from './Tabs/Tabs'
import { Cooking } from './Cooking/Cooking'
import { Nutritions } from './Nutritions/Nutritions'
import { ErrorFallback } from '../../components/ErrorFallback/ErrorFallback'
import { BackButton } from '../../components/BackButton/BackButton'

import { BiError } from 'react-icons/bi'
import { BsClock, BsSuitHeartFill } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import SpinnerBg from '../../assets/images/spinner-bg.svg'

import { StatusEnum } from '../../@types/Status'
import { motion } from '../../utils/constants/motion.constants'
import { stringCut } from '../../utils/helpers/string.helpers'
import { FavoritesType } from '../../@types/Favorites'

export const Details: FC = () => {
    const [activeTab, setActiveTab] = useState<string>('instructions')
    const { favoritesHandler } = useFavorites()

    const { details, status, error } = useAppSelector(state => state.details)
    const { favorites } = useAppSelector(state => state.favorites)
    const dispatch = useAppDispatch()

    const { id } = useParams() as any

    useEffect(() => {
        dispatch(detailsAsync(id))
    }, [id, dispatch])

    const tabHandler = (string: string): void => setActiveTab(string)

    const getStatus = (): string => {
        const element: FavoritesType | undefined = favorites.find(item => item.id === details.id)

        if (element?.isActive) {
            return 'red'
        } else {
            return 'black'
        }
    }

    return (
        <DetailsEl {...motion} >
            <Container>
                <DetailsWrapper>
                    {status === StatusEnum.PENDING ?
                        <SpinnerWrapper height='50vh'>
                            <Spinner src={SpinnerBg} alt='spinner' />
                        </SpinnerWrapper>
                        :
                        <>
                            <DetailsWrapperLeft>
                                <DetailWrapperImage>
                                    <BackButton>
                                        <DetailsWrapperTitle>
                                            {stringCut(details.title, 15)}
                                        </DetailsWrapperTitle>
                                    </BackButton>
                              
                                    <DetailsOverImage>
                                        <DetailsImage src={details.image} alt={details.title} />

                                        <ButtonHeart onClick={() => favoritesHandler(details)}>
                                            <BsSuitHeartFill 
                                                color={getStatus()}
                                                size='20' 
                                            />
                                        </ButtonHeart>

                                        <DetailsReadyMinutes>
                                            <BsClock size='20' />
                                            {details.readyInMinutes} min
                                        </DetailsReadyMinutes>

                                        <DetailsAggregateLikes>
                                            <AiOutlineLike size='20' />
                                            {details.aggregateLikes}
                                        </DetailsAggregateLikes>
                                    </DetailsOverImage>

                                </DetailWrapperImage>

                                <ErrorBoundary fallbackRender={() => <ErrorFallback height='5vh' />}>
                                    <Nutritions id={id} />
                                </ErrorBoundary>
                            </DetailsWrapperLeft>

                            <DetailsInfo>
                                <Tabs activeTab={activeTab} tabHandler={tabHandler} />

                                {activeTab === 'instructions' &&
                                    <ErrorBoundary fallbackRender={() => <ErrorFallback height='10vh' />}>
                                        <Instructions details={details} />
                                    </ErrorBoundary>
                                }

                                {activeTab === 'ingredients' &&
                                    <ErrorBoundary fallbackRender={() => <ErrorFallback height='10vh' />}>
                                        <Ingredients details={details} />
                                    </ErrorBoundary>
                                }

                                {activeTab === 'cooking' &&
                                    <ErrorBoundary fallbackRender={() => <ErrorFallback height='10vh' />}>
                                        <Cooking details={details} />
                                    </ErrorBoundary>
                                }

                            </DetailsInfo>
                        </>
                    }
                </DetailsWrapper>
                {error && <ErrorMessage>
                    <BiError />
                    {error}
                </ErrorMessage>}
            </Container>
        </DetailsEl>
    )
}

