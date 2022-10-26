import { lazy } from 'react'

export const ErrorNoResult = lazy(() =>
  import(/* webpackChunkName: "ErrorNoResult" */ './ErrorNoResult').then((module) => ({
    default: module.ErrorNoResult
  }))
)
