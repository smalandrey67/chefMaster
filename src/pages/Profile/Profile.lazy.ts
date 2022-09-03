import { lazy } from 'react'

export const Profile = lazy(() =>
   import(/* webpackChunkName: "Profile" */'./Profile').then(module => ({
      default: module.Profile
   }))
)