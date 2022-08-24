import { lazy } from 'react'

export const Main = lazy(() =>
   import(/* webpackChunkName: "Main" */'pages/Main/Main').then(module => ({
      default: module.Main
   }))
)

export const Cuisines = lazy(() =>
   import('pages/Cuisines/Cuisines').then(module => ({
      default: module.Cuisines
   }))
)

export const Details = lazy(() =>
   import(/* webpackChunkName: "Details" */'pages/Details/Details').then(module => ({
      default: module.Details
   }))
)

export const Blogs = lazy(() =>
   import(/* webpackChunkName: "Blogs" */'pages/Blogs/Blogs').then(module => ({
      default: module.Blogs
   }))
)

export const BlogsCreate = lazy(() =>
   import(/* webpackChunkName: "BlogsCreate" */'pages/BlogsCreate/BlogsCreate').then(module => ({
      default: module.BlogsCreate
   }))
)

export const Favorites = lazy(() =>
   import(/* webpackChunkName: "Favorites" */'pages/Favorites/Favorites').then(module => ({
      default: module.Favorites
   }))
)

export const MealPlan = lazy(() =>
   import(/* webpackChunkName: "MealPlan" */'pages/MealPlan/MealPlan').then(module => ({
      default: module.MealPlan
   }))
)

export const Profile = lazy(() =>
   import(/* webpackChunkName: "Profile" */'pages/Profile/Profile').then(module => ({
      default: module.Profile
   }))
)