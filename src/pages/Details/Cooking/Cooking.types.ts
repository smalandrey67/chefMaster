import { DetailsType } from 'types/Details'

export type CookingProps = {
   details: DetailsType | undefined;
}
export type CookingIngredientProps = {
   name: string;
   image: string;
}
export type DetailsCookingContentProps = {
   isActiveStep: boolean;
}
export type DetailsCookingIngredientsProps = {
   isHideStep: boolean;
}