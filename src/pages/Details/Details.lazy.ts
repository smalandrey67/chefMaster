import { lazy } from 'react'

export const Details = lazy(() =>
   import(/* webpackChunkName: "Details" */'./Details').then(module => ({
      default: module.Details
   }))
)