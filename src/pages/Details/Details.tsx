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
    DetailsAggregateLikes
} from './Details.styled'
import { Container, ErrorMessage, SpinnerWrapper, Spinner } from '../../assets/styled/Reused.styled'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { detailsA } from '../../store/slices/details/detailsA'

import { Ingredients } from './Ingredients/Ingredients'
import { Instructions } from './Instructions/Instructions'
import { Tabs } from './Tabs/Tabs'
import { Cooking } from './Cooking/Cooking'
import { Nutritions } from './Nutritions/Nutritions'
import { ErrorFallback } from '../../components/ErrorFallback/ErrorFallback'

import { BiError } from 'react-icons/bi'
import { BsClock } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import SpinnerBg from '../../assets/images/spinner-bg.svg'

import { StatusEnum } from '../../@types/Status'
import { motion } from '../../utils/constants/motion.constants'

export const Details: FC = () => {
    const [activeTab, setActiveTab] = useState<string>('instructions')

    const { details, status, error } = useAppSelector(state => state.detailsR)
    const dispatch = useAppDispatch()

    const { id } = useParams() as any

    useEffect(() => {
        dispatch(detailsA(id))
    }, [id, dispatch])


    const tabHandler = (string: string): void => setActiveTab(string)

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
                                    <DetailsWrapperTitle>
                                        {details.title}
                                    </DetailsWrapperTitle>

                                    <DetailsOverImage>
                                        <DetailsImage src={details.image} alt={details?.title} />

                                        <DetailsReadyMinutes>
                                            <BsClock size={20} />
                                            {details.readyInMinutes} min
                                        </DetailsReadyMinutes>

                                        <DetailsAggregateLikes>
                                            <AiOutlineLike size={20} />
                                            {details.aggregateLikes}
                                        </DetailsAggregateLikes>
                                    </DetailsOverImage>

                                </DetailWrapperImage>

                                <ErrorBoundary fallbackRender={() => <ErrorFallback height='5vh'/> }>
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

