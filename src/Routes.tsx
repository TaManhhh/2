import React from 'react'
import {Routes,Route} from 'react-router-dom'
import TodoList from './page/TodoList/TodoList'
import Login from './auth/login'
import Menu from './page/Menu/Menu'


// import {Routes}
const Router = () => {
  return (
   <Routes>
    <Route path='/todolist' element={<TodoList/>}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/menu' element={<Menu/>}/>
    
   </Routes>
  )
}

export default Router
