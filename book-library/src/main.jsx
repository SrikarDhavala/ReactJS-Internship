import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import BookList from './components/BookList/BookList.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='book' element={<BookList />} />
          <Route path='/book/:id' element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
