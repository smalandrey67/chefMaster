import { ComponentType, LazyExoticComponent, FC } from 'react'

import { NotFound } from 'pages/NotFound/NotFound'
import { Searched } from 'pages/Searched/Searched'
import { Login } from 'pages/Login/Login'
import { Registration } from 'pages/Registration/Registration'
import { ResetPassword } from 'pages/ResetPassword/ResetPassword'

import { Main } from 'pages/Main/Main'
import { Cuisines } from 'pages/Cuisines/Cuisines'
import { Details } from 'pages/Details/Details'
import { Blogs } from 'pages/Blogs/Blogs'
import { BlogsCreate } from 'pages/BlogsCreate/BlogsCreate'
import { Favorites } from 'pages/Favorites/Favorites'
import { MealPlan } from 'pages/MealPlan/MealPlan'
import { Profile } from 'pages/Profile/Profile'

// import { Main } from './routesChunks'
// import { Cuisines } from './routesChunks'
// import { Details } from './routesChunks'
// import { Blogs } from './routesChunks'
// import { BlogsCreate } from './routesChunks'
// import { Favorites } from './routesChunks'
// import { MealPlan } from './routesChunks'
// import { Profile } from './routesChunks'

export type RouteType = Readonly<{
   path: string;
   component: LazyExoticComponent<FC<string | unknown>> | ComponentType;
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
   NotFound = '*',
}

export const routes: readonly RouteType[] = [
   { path: RoutePath.Main, component: Main },
   { path: RoutePath.Cuisine, component: Cuisines },
   { path: RoutePath.Details, component: Details },
   { path: RoutePath.Blogs, component: Blogs },
   { path: RoutePath.BlogsCreate, component: BlogsCreate },
   { path: RoutePath.SearchedName, component: Searched },
   { path: RoutePath.Searched, component: Searched },
   { path: RoutePath.MealPlan, component: MealPlan },
   { path: RoutePath.Login, component: Login },
   { path: RoutePath.Register, component: Registration },
   { path: RoutePath.Favorites, component: Favorites },
   { path: RoutePath.ResetPassword, component: ResetPassword },
   { path: RoutePath.Profile, component: Profile },
   { path: RoutePath.NotFound, component: NotFound }
]