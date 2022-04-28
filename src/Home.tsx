import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Main } from './pages/Main/Main'
import { Header } from './components'


export const Home: FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </>
    )
}