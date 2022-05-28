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



import { nanoid } from '@reduxjs/toolkit'

export const Home: FC = () => {



    // function test() {
    //     return [
    //         {
    //             "id": nanoid(),
    //             "date": new Date(),
    //             "title": "Vegan and Vegetarian",
    //             "image": "https://www.verywellfit.com/thmb/OoF6caInmB6_1KMDr8k5jSJ1foo=/614x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PlantPoweredDietitian-5c0812dc46e0fb000171a53d.jpg",
    //             "author": "Sharon Palmer",
    //             "description": "There is both an art and a science to living healthily that's the motto Grateful Grazer lives by. Registered dietician and recipe developer Stephanie McKercher showcases attractive plant-based meals and also provides research-based articles discussing the impact of nutrition on well being"
    //         },
    //         {
    //             "id": nanoid(),
    //             "date": new Date(),
    //             "title": "Vegan and Vegetarian",
    //             "image": "https://www.verywellfit.com/thmb/OoF6caInmB6_1KMDr8k5jSJ1foo=/614x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PlantPoweredDietitian-5c0812dc46e0fb000171a53d.jpg",
    //             "author": "Sharon Palmer",
    //             "description": "There is both an art and a science to living healthily that's the motto Grateful Grazer lives by. Registered dietician and recipe developer Stephanie McKercher showcases attractive plant-based meals and also provides research-based articles discussing the impact of nutrition on well being"
    //         }
    //     ]
    // }

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