import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { 
    DetailsEl, 
    DetailsWrapper, 
    DetailWrapperImage, 
    DetailsWrapperTitle,
    DetailsImage, 
    DetailsInfo 
} from '../../styled/Basic/Details.styled'
import { Container } from '../../styled/Reused/Container.styled'
import { ErrorMessage } from '../../styled/Reused/ErrorMessage.styled'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { detailsRecipeAsync } from '../../store/requests/detailsRecipesAsync'

import { Spinner } from '../../components/Spinner/Spinner'
import { Ingredients } from './Ingredients/Ingredients'
import { Instructions } from './Instructions/Instructions'
import { Tabs } from './Tabs/Tabs'
import { Cooking } from './Cooking/Cooking'

export const Details: FC = () => {

    const [activeTab, setActiveTab] = useState('instructions')

    const { details, status, error } = useAppSelector(state => state.detailsRecipeReducer)
    const dispatch = useAppDispatch()

    const { id } = useParams() as any

    useEffect(() => {
        dispatch(detailsRecipeAsync(id))
    }, [id, dispatch])

    const tabHandler = (string: string) => setActiveTab(string)

    return (
        <DetailsEl animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} >
            <Container>
                <DetailsWrapper>
                    {status === 'pending' ?
                        <Spinner />
                        :
                        <>
                            <DetailWrapperImage>
                                <DetailsWrapperTitle>{details?.title}</DetailsWrapperTitle>
                                <DetailsImage src={details?.image} alt={details?.title} />
                            </DetailWrapperImage>

                            <DetailsInfo>
                                <Tabs activeTab={activeTab} tabHandler={tabHandler} />

                                {activeTab === 'instructions' && <Instructions details={details} />}

                                {activeTab === 'ingredients' && <Ingredients details={details} />}

                                {activeTab === 'cooking' && <Cooking details={details} />}
                            </DetailsInfo>
                        </>
                    }
                </DetailsWrapper>
                {error && <ErrorMessage>Something went wrong</ErrorMessage>}
            </Container>
        </DetailsEl>
    )
}

