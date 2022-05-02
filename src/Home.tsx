import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Main } from './pages/Main/Main'
import { Cuisine } from './pages/Cuisine/Cuisine'
import { Details } from './pages/Details/Details'

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
            </Routes>
        </>
    )
}