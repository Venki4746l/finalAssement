import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PostDisplay from './componets/Blog/PostDisplay'
import SinglePost from './componets/Blog/SinglePost'
import Counter from './componets/Counter/Counter';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostDisplay />} />
        <Route path="/posts" element={<PostDisplay/>}/>
        <Route path="/posts/:id" element={<SinglePost/>}/>
        <Route path="/counter" element={<Counter />} />

        

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
