import styled from 'styled-components'

type SpinnerProps = {
    height: string;
}

export const Container = styled.div`
    max-width: 1130px;
    margin: 0 auto;
    padding: 0 15px;
`

export const ErrorMessage = styled.span`
    color: var(--color-error);
    font-size: var(--fs-small);
    display: flex;
    align-items: flex-start;
    gap: 3px;
    justify-content: center;
`

export const SpinnerWrapper = styled.div<SpinnerProps>`
    height: ${({ height }) => height || 'auto'};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const SearchedWarning = styled.h4`
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    font-size: var(--fs-md);
    gap: 5px;
`