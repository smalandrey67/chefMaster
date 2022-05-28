import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
    DetailsEl,
    DetailsWrapperLeft,
    DetailsWrapper,
    DetailWrapperImage,
    DetailsWrapperTitle,
    DetailsImage,
    DetailsInfo,
} from './Details.styled'
import { Container, ErrorMessage, SpinnerWrapper, SpecialTitle } from '../../styled/Reused.styled'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { detailsRecipeAsync } from '../../store/requests/detailsRecipesAsync'

import { Spinner } from '../../components/Spinner/Spinner'
import { Ingredients } from './Ingredients/Ingredients'
import { Instructions } from './Instructions/Instructions'
import { Tabs } from './Tabs/Tabs'
import { Cooking } from './Cooking/Cooking'
import { Nutrition } from './Nutritions/Nutritions'

import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../types/Status'
import { motionSettings } from '../../utils/motionSettings'

export const Details: FC = () => {
    const [activeTab, setActiveTab] = useState<string>('instructions')

    const { details, status, error } = useAppSelector(state => state.detailsRecipeReducer)
    const dispatch = useAppDispatch()

    const { id } = useParams() as any

    useEffect(() => {
        dispatch(detailsRecipeAsync(id))
    }, [id, dispatch])


    const tabHandler = (string: string): void => setActiveTab(string)

    return (
        <DetailsEl {...motionSettings} >
            <Container>
                <DetailsWrapper>
                    {status === StatusEnum.PENDING ?
                        <SpinnerWrapper height='50vh'>
                            <Spinner />
                        </SpinnerWrapper>
                        :
                        <>
                            <DetailsWrapperLeft>
                                <DetailWrapperImage>
                                    <DetailsWrapperTitle>
                                        {details?.title}
                                        <SpecialTitle margin='0 0 0 5px'>({details?.readyInMinutes} minutes)</SpecialTitle>
                                    </DetailsWrapperTitle>

                                    <DetailsImage src={details?.image} alt={details?.title} />
                                </DetailWrapperImage>

                                <Nutrition id={id} />
                            </DetailsWrapperLeft>

                            <DetailsInfo>
                                <Tabs activeTab={activeTab} tabHandler={tabHandler} />

                                {activeTab === 'instructions' && <Instructions details={details} />}

                                {activeTab === 'ingredients' && <Ingredients details={details} />}

                                {activeTab === 'cooking' && <Cooking details={details} />}
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

