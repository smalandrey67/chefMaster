import { lazy } from 'react'

export const TemplateName = lazy(() =>
   import(/* webpackChunkName: "TemplateName" */'./TemplateName').then(module => ({
      default: module.TemplateName
   }))
)
