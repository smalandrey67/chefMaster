import { nanoid } from '@reduxjs/toolkit'

import { FilterParamsType } from 'types/Params'

type NamesType = {
  text: string
  query: keyof FilterParamsType
}

export type CategoryType = {
  name: string
  active: boolean
  typeId: string
  value: string
}

export type FilterCategoriesTypes = {
  names: NamesType
  id: string
  type: CategoryType[]
}

enum DietsName {
  KETOGENIC = 'ketogenic',
  VEGETARIAN = 'vegetarian',
  PESCETARIAN = 'pescetarian',
  PALEO = 'paleo',
  WHOLE30 = 'whole30'
}

enum DishesName {
  SALAD = 'salad',
  DESSERT = 'dessert',
  BREAKFAST = 'breakfast',
  SOUP = 'soup',
  SNACK = 'snack'
}

export const filterCategories: FilterCategoriesTypes[] = [
  {
    names: { text: 'diets', query: 'diet' },
    id: nanoid(),
    type: [
      { name: DietsName.KETOGENIC, active: false, typeId: nanoid(), value: DietsName.KETOGENIC },
      { name: DietsName.VEGETARIAN, active: false, typeId: nanoid(), value: DietsName.VEGETARIAN },
      { name: DietsName.PESCETARIAN, active: false, typeId: nanoid(), value: DietsName.PESCETARIAN },
      { name: DietsName.PALEO, active: false, typeId: nanoid(), value: DietsName.PALEO },
      { name: DietsName.PALEO, active: false, typeId: nanoid(), value: DietsName.PALEO }
    ]
  },
  {
    names: { text: 'dishes', query: 'type' },
    id: nanoid(),
    type: [
      { name: DishesName.SALAD, active: false, typeId: nanoid(), value: DishesName.SALAD },
      { name: DishesName.DESSERT, active: false, typeId: nanoid(), value: DishesName.DESSERT },
      { name: DishesName.BREAKFAST, active: false, typeId: nanoid(), value: DishesName.BREAKFAST },
      { name: DishesName.SOUP, active: false, typeId: nanoid(), value: DishesName.SOUP },
      { name: DishesName.SNACK, active: false, typeId: nanoid(), value: DishesName.SNACK }
    ]
  },
  {
    names: { text: 'min carbs', query: 'minCarbs' },
    id: nanoid(),
    type: [
      { name: '10g', active: false, typeId: nanoid(), value: '10' },
      { name: '30g', active: false, typeId: nanoid(), value: '30' },
      { name: '50g', active: false, typeId: nanoid(), value: '50' },
      { name: '70g', active: false, typeId: nanoid(), value: '70' },
      { name: '90g', active: false, typeId: nanoid(), value: '90' }
    ]
  },
  {
    names: { text: 'min calories', query: 'minCalories' },
    id: nanoid(),
    type: [
      { name: '50g', active: false, typeId: nanoid(), value: '10' },
      { name: '150g', active: false, typeId: nanoid(), value: '150' },
      { name: '400g', active: false, typeId: nanoid(), value: '400' },
      { name: '600g', active: false, typeId: nanoid(), value: '600' },
      { name: '700g', active: false, typeId: nanoid(), value: '700' }
    ]
  }
]
