import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home'
import Listskeys from '../Listskeys'
import Pagination from '../Pagination'
import NoMatchFound from '../NoMatchFound'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listandkeys' element={<Listskeys />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/*' element={<NoMatchFound />} />
    </Routes>
  )
}

export default Routing