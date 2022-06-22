import styled from 'styled-components'

type ErrorMessageProps = {
    justifyContent?: string;
}

type SpinnerProps = {
    height: string;
}

type MarginProps = {
    margin?: string;
}

type SpecialTitleProps = {
    margin?: string; 
    fontWeight?: string;
    color?: string;
    fontSize?: string;
}

type TitleProps = {
    margin?: string;
}

type ErrorWrapperProps = {
    flexDirection?: string;
    height: string;    
}

export const Container = styled.div`
    max-width: 1130px;
    margin: 0 auto;
    padding: 0 15px;
`

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

export const SpinnerWrapper = styled.div<SpinnerProps>`
    height: ${({ height }) => height || 'auto'};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Spinner = styled.img``

export const SearchedWarning = styled.h4`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    margin: 15px 0 0 0;
    gap: 5px;
    font-size: var(--fs-md);
`

// #Base styles of button
export const Button = styled.button`
    height: 40px;
    padding: 0 15px;
    border-radius: var(--br-radius);
    box-shadow: var(--shadow);
    font-weight: var(--fw-semiBold);
    background-color: var(--color-white); 
`

// #Base styles of input
export const Input = styled.input`
    -webkit-appearance: none;

    font-size: var(--fs-md);
    background-color: var(--color-white);
    border-radius: var(--br-radius);

    &::placeholder{
        font-weight: var(--fw-semiBold);
        color: var(--color-alternative);
    }
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


