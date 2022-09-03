import { lazy } from 'react';

export const Instructions = lazy(() =>
   import(/* webpackChunkName: "Instructions" */'./Instructions').then(module => ({
      default: module.Instructions
   }))
)