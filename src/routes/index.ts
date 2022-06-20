import { ComponentType } from 'react'

import { Main } from '../pages/Main/Main'
import { Cuisine } from '../pages/Cuisine/Cuisine'
import { Details } from '../pages/Details/Details'
import { Blogs } from '../pages/Blogs/Blogs'
import { BlogsCreate } from '../pages/BlogsCreate/BlogsCreate'
import { Searched } from '../pages/Searched/Searched'
import { Favorites } from '../pages/Favorites/Favorites'
import { NotFound } from '../pages/NotFound/NotFound'

export type Route = {
   path: string;
   component: ComponentType;
}

enum RoutePath {
   MAIN = '/',
   CUISINE = '/cuisine/:type',
   DETAILS = '/details/:id',
   BLOGS = '/blogs',
   BLOGSCREATE = '/blogs/create',
   SEARCHED = '/searched/:name',
   FAVORITES = '/favorites',
   NOTFOUND = '*',
}

export const routes: Route[] = [
   { path: RoutePath.MAIN, component: Main },
   { path: RoutePath.CUISINE, component: Cuisine },
   { path: RoutePath.DETAILS, component: Details },
   { path: RoutePath.BLOGS, component: Blogs },
   { path: RoutePath.BLOGSCREATE, component: BlogsCreate}, 
   { path: RoutePath.SEARCHED, component: Searched },
   { path: RoutePath.FAVORITES, component: Favorites },
   { path: RoutePath.NOTFOUND, component: NotFound},
]
