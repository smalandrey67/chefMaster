import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Main } from './pages/Main/Main'
import { Cuisine } from './pages/Cuisine/Cuisine'

import { Header } from './components'
import { Categories } from './components'


export const Home: FC = () => {
    return (
        <>
            <Header />
            <Categories /> 
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/cuisine/:type' element={<Cuisine /> } />
            </Routes>
        </>
    )
}