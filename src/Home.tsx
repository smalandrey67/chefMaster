import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Main } from './pages/Main/Main'
import { Cuisine } from './pages/Cuisine/Cuisine'
import { Details } from './pages/Details/Details'
import { Blogs } from './pages/Blogs/Blogs'
import { BlogsCreate } from './pages/BlogsCreate/BlogsCreate'
import { Searched } from './pages/Searched/Searched'
import { NotFound } from './pages/NotFound/NotFound'

import { Header } from './components/Header/Header'
import { Categories } from './components/Сategories/Categories'

export const Home: FC = () => {
    return (
        <>
            <Header />
            <Categories /> 
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/cuisine/:type' element={<Cuisine /> } />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/blogs/create' element={<BlogsCreate />} />
                <Route path='/searched/:name' element={<Searched />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}