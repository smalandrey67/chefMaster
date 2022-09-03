import { lazy } from 'react';

export const Ingredients = lazy(() =>
   import(/* webpackChunkName: "Ingredients" */'./Ingredients').then(module => ({
      default: module.Ingredients
   }))
)