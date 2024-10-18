import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home'
import Listskeys from '../Listskeys'
import Pagination from '../Pagination'
import NoMatchFound from '../NoMatchFound'
import Contactus from '../Contactus'
import UseStateConter from '../Hooks/UseStateConter'
import UseEffectHook from '../Hooks/UseEffectHook'
import PaginationEffect from '../Hooks/PaginationEffect'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listandkeys' element={<Listskeys />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/counter' element={<UseStateConter />} />
        <Route path='/useeffectuser' element={<UseEffectHook />} />
        <Route path='/paginationeffect' element={<PaginationEffect />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/*' element={<NoMatchFound />} />
    </Routes>
  )
}

export default Routing