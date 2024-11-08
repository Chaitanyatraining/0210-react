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
import UnmountingComp from '../Hooks/UnmountingComp'
import UseContextHook from '../Hooks/UseContextHook'
import UseRefHook from '../Hooks/UseRefHook'
import UseReducer from '../Hooks/UseReducer'
import UseMemoHook from '../Hooks/UseMemoHook'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listandkeys' element={<Listskeys />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/counter' element={<UseStateConter />} />
        <Route path='/useeffectuser' element={<UseEffectHook />} />
        <Route path='/paginationeffect' element={<PaginationEffect />} />
        <Route path='/unmounting' element={<UnmountingComp />} />
        <Route path='/usecontexthook' element={<UseContextHook />} />
        <Route path='/userefhook' element={<UseRefHook />} />
        <Route path='/usereducer' element={<UseReducer />} />
        <Route path='/usememo' element={<UseMemoHook />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/*' element={<NoMatchFound />} />
    </Routes>
  )
}

export default Routing