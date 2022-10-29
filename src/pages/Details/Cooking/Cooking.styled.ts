import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { DetailsCookingContentProps, DetailsCookingIngredientsProps } from './Cooking.types'

export const DetailsCookingSubtitle = styled.h4`
  margin: 5px 0;
  padding: 10px;
  text-align: left;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  font-size: var(--fs-sm);
`
export const DetailsCookingItem = styled.li`
  position: relative;
  box-shadow: var(--shadow);
  border-radius: var(--br-radius);
  background-color: var(--color-white);
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5px;
`
export const DetailsCookingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  cursor: pointer;
`
export const DetailsCookingStep = styled.span`
  font-size: var(--fs-sm);
  font-weight: var(--fw-semiBold);
`
export const DetailsCookingContent = styled.div<DetailsCookingContentProps>`
  position: relative;
  height: 0;
  visibility: hidden;
  overflow: hidden;

  ${(props): FlattenSimpleInterpolation | undefined => {
    if (props.isActiveStep) {
      return css`
        transition: all 0.3s ease;
        padding: 0 10px 10px 10px;
        height: auto;
        visibility: visible;
      `
    }
  }}
`
export const DetailsCookingIngredients = styled.div<DetailsCookingIngredientsProps>`
  height: 70px;
  display: flex;
  align-items: center;
  overflow: auto;
  margin-bottom: 5px;
  display: ${(props) => (props.isHideStep ? '' : 'none')};
`
export const DetailsCookingIngredientsPhoto = styled.img`
  height: 100%;
  width: 50px;
  object-fit: contain;

  &:not(:last-child) {
    margin-right: 5px;
  }
`
