import { lazy } from 'react';

export const Favorites = lazy(() =>
   import(/* webpackChunkName: "Favorites" */'./Favorites').then(module => ({
      default: module.Favorites
   }))
)