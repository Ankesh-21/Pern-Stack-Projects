import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout  from './Pages/Layout'
import WriteArticles from './Pages/WriteArticles'
import BlogTitles from './Pages/BlogTitles'
import Dashboard from './Pages/Dashboard'
import RemoveObjects from './Pages/RemoveObjects'
import Generateimages from './Pages/Generateimages'
import ReviewResume from './Pages/ReviewResume'
import Removebackground from './Pages/Removebackground'
import Community from './Pages/Community'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/ai" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='write-article' element={<WriteArticles/>}/>
          <Route path='blog-title' element={<BlogTitles/>}/>
        </Route>
        <Route path='/ai/remove-objects' element={<RemoveObjects/>}></Route>
        <Route path='/ai/generate-images' element={<Generateimages/>}></Route>
        <Route path='/ai/review-resume' element={< ReviewResume/>}></Route>
        <Route path='/ai/remove-background' element={< Removebackground/>}></Route>
        <Route path='/ai/community' element={<Community/>}></Route>
      </Routes>
    </div>
  )
}

export default App