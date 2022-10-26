import { lazy } from 'react'

export const ErrorFallback = lazy(() =>
  import(/* webpackChunkName: "ErrorFallback" */ './ErrorFallback').then((module) => ({
    default: module.ErrorFallback
  }))
)
