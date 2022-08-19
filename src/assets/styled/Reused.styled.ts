import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { ErrorMessageProps, 
    SpinnerProps,
    MarginProps, 
    SpecialTitleProps,
    TitleProps, 
    ErrorWrapperProps,
    FormProps, 
    LegendProps,
    FlexProps,
    InputProps,
    ButtonProps, 
    GroupProps
} from './Styled.types'

export const Container = styled.div`
    max-width: 1130px;
    margin: 0 auto;
    padding: 0 15px;
`
// #==================================#
export const Label = styled.label`
   display: flex;
   align-items: center;
   height: 50px;
   width: 100%;
   box-shadow: var(--shadow);
   border-radius: var(--br-radius);
   background-color: var(--color-white);

   &:not(:last-child){
      margin-bottom: 5px;
   }
`
export const Input = styled.input<InputProps>`
    -webkit-appearance: none;
    -webkit-box-shadow: inset 0 0 0 50px #fff;
    -webkit-text-fill-color: #000;
    
    font-size: var(--fs-md);
    background-color: var(--color-white);
    border-radius: var(--br-radius);
    box-shadow: inset inset 0 0 0 50px #fff;

    width: 100%;
    height: 100%;
    padding: 0 15px;

    flex: ${props => props.flex || null};

    &::placeholder{
        color: var(--color-alternative);
    }
`
export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: ${props => props.flex || null};

    border-radius: var(--br-radius);
    box-shadow: var(--shadow);
    background-color: var(--color-white); 
    font-weight: var(--fw-semiBold);

    padding: 0 15px;
    height: ${props => props.height || '50px'}; 
    width: 100%;

    &:active {
        background-color: var(--color-categories);
        color: var(--color-white);
    }

   @media (hover: hover) {
        transition: all 0.3s ease;
        &:hover {
            background-color: var(--color-categories);
            color: var(--color-white);
        }
    }
`
// #==================================#
export const Form = styled.form<FormProps>`
    margin: ${props => props.margin || 0}
`
export const Fieldset = styled.fieldset`
    border: none;
    margin: 0;
    padding: 0;
`
export const Legend = styled.legend<LegendProps>`
    text-align: ${props => props.align || 'center'};
    font-size: ${props => props.fontSize || 'var(--fs-md)'};
    margin: ${props => props.margin || 0};
    width: 100%;
`
export const Group = styled.div<GroupProps>`
    margin: ${props => props.margin || null};
    width: 100%;
`
export const LinkEl = styled(Link)`
    color: var(--color-links);
    text-decoration: underline;
    display: inline;
` 
export const Section = styled(motion.section)``
export const Article = styled.article``

// #==================================#
export const Flex = styled.div<FlexProps>`
    display: flex;
    justify-content: ${props => props.justify || null};
    align-items: ${props => props.alignItems || null};
    flex-direction: ${props => props.flexDirection || null};
    margin: ${props => props.margin || null};
`









// #errors base styles
export const ErrorMessage = styled.span<ErrorMessageProps>`
    color: var(--color-error);
    font-size: var(--fs-small);
    display: flex;
    align-items: flex-start;
    gap: 3px;
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
`

export const ErrorWrapper = styled.div<ErrorWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: ${props => props.flexDirection || 'row'};
    height: ${props => props.height || 'auto'};
`

// #spinner base styles
export const Spinner = styled.img``

export const SpinnerWrapper = styled.div<SpinnerProps>`
    height: ${({ height }) => height || 'auto'};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`





// #Base styles of back button
export const ButtonBack = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 0 1 90px;
`

// #Texts
export const Title = styled.h2<TitleProps>`
    margin: ${props => props.margin || 0};
    font-size: var(--fs-bg);
`

export const SubTitle = styled.h3<MarginProps>`
    margin: ${({ margin }) => margin || 0}
`

export const Text = styled.p<MarginProps>`
    margin: ${({ margin }) => margin || 0}
`

export const SpecialTitle = styled.span<SpecialTitleProps>`
    font-size: ${({ fontSize }) => fontSize || 'var(--fs-sl)'};

    margin: ${({ margin }) => margin || 0};
   
    font-weight: ${({ fontWeight }) => fontWeight || 'normal'};

    color: ${({ color }) => color || 'var(--color-black)'}
`

// #Recipe article element for each card
export const RecipeEl = styled.article`
    cursor: pointer;

    @media (hover: hover) {
        transition: all 0.5s ease;

        &:hover {
            transform: scale(1.01)
        }
    }
`

// #RecipesWrapper for cards
export const RecipesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 1rem;
`

// #Recipe heart button
export const ButtonHeart = styled.button`
    background: none;
    position: absolute;
    top: 10px;
    right: 10px;

    @media (hover: hover) {
        transition: all 0.5s ease;
        
        &:hover {
            transform: scale(0.9)
        }
   }
`

// #Form Login and Register and ClogsCreate
export const FieldBlock = styled.div`
   margin-bottom: 10px;
`