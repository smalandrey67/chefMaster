import { lazy } from 'react';

export const MealPlan = lazy(() =>
   import(/* webpackChunkName: "MealPlan" */'./MealPlan').then(module => ({
      default: module.MealPlan
   }))
)