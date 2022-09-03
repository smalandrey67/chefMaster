import { lazy } from 'react'

export const Searched = lazy(() =>
   import(/* webpackChunkName: "Searched" */'./Searched').then(module => ({
      default: module.Searched
   }))
)