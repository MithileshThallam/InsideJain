import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Blog from './Pages/Blog.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
