import { ComponentType, LazyExoticComponent, FC } from 'react'

import { Login } from 'pages/Login/Login'
import { Registration } from 'pages/Registration/Registration'
import { ResetPassword } from 'pages/ResetPassword/ResetPassword'

// import { Main } from 'pages/Main/Main.lazy'
// import { Cuisines } from 'pages/Cuisines/Cuisines.lazy'
// import { Details } from 'pages/Details/Details.lazy'
// import { Blogs } from 'pages/Blogs/Blogs.lazy'
// import { BlogsCreate } from 'pages/BlogsCreate/BlogsCreate.lazy'
// import { Searched } from 'pages/Searched/Searched.lazy'
// import { NotFound } from 'pages/NotFound/NotFound.lazy'
// import { Favorites } from 'pages/Favorites/Favorites.lazy'
// import { MealPlan } from 'pages/MealPlan/MealPlan.lazy'
// import { Profile } from 'pages/Profile/Profile.lazy'

import { Main } from 'pages/Main/Main'
import { Cuisines } from 'pages/Cuisines/Cuisines'
import { Details } from 'pages/Details/Details'
import { Blogs } from 'pages/Blogs/Blogs'
import { BlogsCreate } from 'pages/BlogsCreate/BlogsCreate'
import { Searched } from 'pages/Searched/Searched'
import { NotFound } from 'pages/NotFound/NotFound'
import { Favorites } from 'pages/Favorites/Favorites'
import { MealPlan } from 'pages/MealPlan/MealPlan'
import { Profile } from 'pages/Profile/Profile'

export type RouteType = Readonly<{
  path: string
  component: LazyExoticComponent<FC<string | unknown>> | ComponentType
  isAuthRequired: boolean
}>

enum RoutePath {
  Main = '/',
  Cuisine = '/cuisine/:type',
  Details = '/details/:id',
  Blogs = '/blogs',
  BlogsCreate = '/blogs/create',
  SearchedName = '/searched/:name',
  Searched = '/searched/',
  Favorites = '/favorites',
  MealPlan = '/meal/plan',
  Login = '/login',
  Register = '/registration',
  ResetPassword = '/reset/password',
  Profile = '/profile',
  NotFound = '*'
}

export const routes: readonly RouteType[] = [
  { path: RoutePath.Main, component: Main, isAuthRequired: false },
  { path: RoutePath.Cuisine, component: Cuisines, isAuthRequired: false },
  { path: RoutePath.Details, component: Details, isAuthRequired: false },
  { path: RoutePath.Blogs, component: Blogs, isAuthRequired: true },
  { path: RoutePath.BlogsCreate, component: BlogsCreate, isAuthRequired: false },
  { path: RoutePath.SearchedName, component: Searched, isAuthRequired: false },
  { path: RoutePath.Searched, component: Searched, isAuthRequired: false },
  { path: RoutePath.MealPlan, component: MealPlan, isAuthRequired: true },
  { path: RoutePath.Login, component: Login, isAuthRequired: false },
  { path: RoutePath.Register, component: Registration, isAuthRequired: false },
  { path: RoutePath.Favorites, component: Favorites, isAuthRequired: false },
  { path: RoutePath.ResetPassword, component: ResetPassword, isAuthRequired: false },
  { path: RoutePath.Profile, component: Profile, isAuthRequired: false },
  { path: RoutePath.NotFound, component: NotFound, isAuthRequired: false }
]
