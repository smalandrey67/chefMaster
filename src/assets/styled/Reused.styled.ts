import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import * as Type from './Styled.types'

export const Container = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  padding: 0 15px;
`
// #==================================#
export const Label = styled.label`
  display: flex;
  align-items: center;
  box-shadow: var(--shadow);
  border-radius: var(--br-radius);
  background-color: var(--color-white);
  padding: 0 15px;
  height: 100%;
  width: 100%;
`
export const Input = styled.input`
  -webkit-appearance: none;
  -webkit-box-shadow: inset 0 0 0 50px #fff;
  -webkit-text-fill-color: #000;

  font-size: var(--fs-md);
  background-color: var(--color-white);
  border-radius: var(--br-radius);
  box-shadow: inset inset 0 0 0 50px #fff;

  padding: 0 10px;
  width: 100%;
  height: 100%;

  &::placeholder {
    color: var(--color-alternative);
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: var(--br-radius);
  box-shadow: var(--shadow);
  background-color: var(--color-white);
  color: var(--color-alternative);
  padding: 0 15px;
  height: 100%;
  width: 100%;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

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
export const ButtonHeart = styled.button`
  background: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  @media (hover: hover) {
    transition: all 0.5s ease;

    &:hover {
      transform: scale(0.9);
    }
  }
`
export const Image = styled.img<Type.ImageProps>`
  height: 100%;
  width: ${(props): string | number => props.width ?? '100%'};
  object-fit: ${(props): string => props.objectFit ?? 'cover'};
`
// #==================================#
export const Form = styled.form``
export const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;
`
export const Legend = styled.legend<Type.LegendProps>`
  font-size: var(--fs-md);
  text-align: ${(props): string => props.align ?? 'center'};
  width: ${(props): string => props.width ?? 'auto'};
`
export const LinkEl = styled(Link)<Type.LinkElProps>`
  display: inline;
  cursor: pointer;
  font-size: ${(props): string => props.fontSize ?? 'var(--fs-sm)'};
  font-weight: ${(props): string => props.fontWeight ?? 'var(--fw-regular)'};
  text-decoration: ${(props): string | null => props.textDecoration ?? null};
  color: ${(props): string | null => props.color ?? null};
  margin: ${(props): string | null => props.margin ?? null};
`
export const Figure = styled.figure`
  width: 100%;
  margin: 0;
  padding: 0;
`
export const Figcaption = styled.figcaption`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`
export const List = styled(motion.ul)``

export const Section = styled(motion.section)``

export const Article = styled.article`
  cursor: pointer;
  @media (hover: hover) {
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.01);
    }
  }
`

// #==================================#
export const Flex = styled.div<Type.FlexProps>`
  display: ${(props): string => props.display ?? 'flex'};
  justify-content: ${(props): string => props.justifyContent ?? 'center'};
  align-items: ${(props): string => props.alignItems ?? 'center'};
  flex-direction: ${(props): string => props.flexDirection ?? 'row'};
  flex-wrap: ${(props): string => props.flexWrap ?? 'nowrap'};
  width: ${(props): string => props.width ?? 'auto'};
  margin: ${(props): string | 0 => props.margin ?? 0};
`
export const FlexGroup = styled.div<Type.FlexGroupProps>`
  height: ${(props): string => props.height ?? 'auto'};
  flex: ${(props): string => props.flex ?? 'auto'};
  margin: ${(props): string | 0 => props.margin ?? 0};
`
export const Group = styled(motion.div)<Type.GroupProps>`
  height: ${(props): string => props.height ?? 'auto'};
  width: ${(props): string => props.width ?? 'auto'};
  max-width: ${(props): string => props.maxwidth ?? 'auto'};
  margin: ${(props): string | 0 => props.margin ?? 0};
`

export const SpinnerWrapper = styled.div<Type.SpinnerProps>`
  height: ${(props): string => props.height ?? 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const RecipeImageWrapper = styled.div<Type.RecipeImageWrapperProps>`
  border-radius: var(--br-radius);
  overflow: hidden;
  height: 100%;
  position: relative;
  opacity: ${(props): '0.6' | '1' => (props.isExist ? '0.6' : '1')};
`
export const RecipesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 1rem;
`
// #==================================#
export const Paragraph = styled.p<Type.ParagraphProps>`
  font-size: ${(props): string => props.fontSize ?? 'var(--fs-sm)'};
  font-weight: ${(props): string => props.fontWeight ?? 'var(--fw-regular)'};
  margin: ${(props): string | 0 => props.margin ?? 0};
`
export const Title = styled.h4<Type.TitleProps>`
  margin: ${(props): string | 0 => props.margin ?? 0};
  font-size: ${(props): string => props.fontSize ?? 'var(--fs-bg)'};
  font-weight: ${(props): string => props.fontWeight ?? 'var(--fw-regular)'};
`
export const Strong = styled.strong<Type.StrongProps>`
  font-size: ${(props): string => props.fontSize ?? 'var(--fs-sm)'};
  margin: ${(props): string | 0 => props.margin ?? 0};
  color: ${(props): string => props.color ?? 'var(--color-black)'};
`
export const RecipeTitle = styled.h4`
  position: absolute;
  bottom: 10px;
  left: 10px;
  margin: 0;
  padding: 0;
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  color: var(--color-white);
`
// #==================================#
export const ErrorMessage = styled.span<Type.ErrorMessageProps>`
  display: flex;
  color: var(--color-error);
  font-size: var(--fs-small);

  justify-content: ${(props): string => props.justifyContent ?? 'center'};
  margin: ${(props): string | 0 => props.margin ?? 0};
`
export const ErrorWrapper = styled.div<Type.ErrorWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props): string => props.flexDirection ?? 'row'};
  height: ${(props): string => props.height ?? 'auto'};
`
export const Spinner = styled.img``
